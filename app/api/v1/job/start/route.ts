import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { JobStatus } from '@prisma/client';
import { jobStartSchema } from '@/lib/zod';
import { API_ERROR_JOB_START, API_ERROR_UNAUTHORIZED } from '@/constants/api-error';
import { signedGet } from '@/lib/s3';
import { prisma } from '@/lib/prisma';
import { fal } from '@/lib/fal';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { URL_WEBHOOKS_FAL_AI_IMG_TO_VIDEO } from '@/constants/urls';
import { STATUS_PROCESSING, STATUS_SUCCESS } from '@/constants/status';
import { MAP_KIND_MODELS } from '@/constants/map';

export async function POST(request: NextRequest) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!session || !session.user || !userId) {
    return Response.json(API_ERROR_UNAUTHORIZED);
  }

  const { imageKey, promptId, aspectRatio, kind } = await request.json();

  try {
    const imageUrl = await signedGet({ key: imageKey, bucket: process.env.BUCKET_ORIGINAL_FACE, expiresSeconds: 600 });
    const check = jobStartSchema.safeParse({ imageUrl, promptId, aspectRatio, kind });

    if (!check.success) {
      throw new Error(`Invalid request data ${check.error}`);
    }

    const {
      promptId: zPromptId,
      aspectRatio: zAspectRatio,
      imageUrl: zImageUrl,
      kind: zKind
    } = check.data;

    const prompt = await prisma.prompt.findUnique({
      where: { id: zPromptId },
    });

    if (!prompt) {
      throw new Error(`Prompt not found ${prompt}, id: ${zPromptId}`);
    }

    const job = await prisma.job.create({
      data: {
        userId,
        status: JobStatus.processing,
        inputImageKey: imageKey,
        aspect: zAspectRatio,
        promptId,
        model: MAP_KIND_MODELS[zKind],
      }
    });

    if (!job) {
      throw new Error(`Failed to create job ${job}`);
    }

    const webhook = `${process.env.WEBHOOK_BASE_URL}${URL_WEBHOOKS_FAL_AI_IMG_TO_VIDEO}?jobId=${encodeURIComponent(job.id)}&userId=${encodeURIComponent(userId)}`;

    const queueQueueStatus = await fal.queue.submit(job.model, {
      input: {
        image_url: zImageUrl,
        prompt: prompt.text,
        aspect_ratio: zAspectRatio,
      },
      webhookUrl: webhook,
    });

    const jobUpdate = await prisma.job.update({
      where: { id: job.id },
      data: { status: STATUS_PROCESSING, renderId: queueQueueStatus.request_id },
    });

    return NextResponse.json({
      status: STATUS_SUCCESS,
      data: {
        jobId: jobUpdate.id,
        status: jobUpdate.status,
      },
      errorReason: null,
      errorDisplay: null,
    });
  } catch (err) {
    console.error(getErrorMessage(err));

    return NextResponse.json(API_ERROR_JOB_START);
  }
}
