import { type NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { JobStatus } from '@prisma/client';
import { getErrorMessage } from '@/utils/getErrorMessage';
import { STATUS_OK } from '@/constants/status';
import { jobWebhookFalAiDvlsnSchema } from '@/lib/zod';
import { downloadToS3 } from '@/utils/downloadToS3';

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const jobId = searchParams.get('jobId');
  const userId = searchParams.get('userId');

  if (!jobId) {
    return NextResponse.json({ status: 'ERROR' });
  }

  try {
    const body = await request.json();
    const status = body?.status || '';

    if (status !== STATUS_OK) {
      const reason = body?.error || `fal webhook status=${status}, body=${JSON.stringify(body)}`;

      await prisma.job.update({
        where: { id: jobId },
        data: { status: JobStatus.error, error: reason },
      });

      throw new Error('fal webhook status not ok, reason=' + reason);
    }

    const job = await prisma.job.findUnique({ where: { id: jobId } });

    if (!job) {
      throw new Error('Job not found');
    }

    const check = jobWebhookFalAiDvlsnSchema.safeParse(body?.payload?.video);

    if (!check.success) {
      throw new Error(`fal webhook missing video info, body=${JSON.stringify(body)}`);
    }

    const { url, content_type, file_size } = check.data;

    const videoKey = `${userId}/done/${jobId}/video.mp4`;
    const result = await downloadToS3({
      url,
      bucket: process.env.BUCKET_CDN,
      contentType: content_type,
      key: videoKey,
    });

    if (!result.ok) {
      throw new Error('Failed to download video to S3');
    }

    await prisma.job.update({
      where: { id: jobId },
      data: {
        status: JobStatus.done,
        fileSize: file_size,
        contentType: content_type,
        meta: JSON.stringify(body),
        outputVideoKey: videoKey,
      },
    });

    return NextResponse.json({ status: 'OK' });
  } catch (err) {
    console.error(err);

    try {
      await prisma.job.update({ where: { id: jobId }, data: { error: getErrorMessage(err) } });
    } catch (e) {
      console.error('Failed to update job with error:', e);
    }

    return NextResponse.json({ status: 'ERROR' });
  }
}
