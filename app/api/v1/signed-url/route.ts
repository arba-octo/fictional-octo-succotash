import { type NextRequest } from 'next/server';
import { auth } from '@/auth';
import { faceMetaSchema } from '@/lib/zod';
import { createUploadPolicy } from '@/lib/s3';
import { STATUS_SUCCESS } from '@/constants/status';
import { API_ERROR_SIGNED_URL, API_ERROR_UNAUTHORIZED } from '@/constants/api-error';
import { nanoidSmallLettersAndNumber } from '@/lib/nanoid';
import { FOLDER_ORIGINAL_FACE } from '@/constants/folder';

export async function GET(request: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return Response.json(API_ERROR_UNAUTHORIZED);
  }

  const searchParams = request.nextUrl.searchParams;
  const searchType = searchParams.get('type');
  const searchSize = Number(searchParams.get('size') ?? 0);
  const check = faceMetaSchema.safeParse({ type: searchType, size: searchSize });

  if (!check.success) {
    return Response.json(API_ERROR_SIGNED_URL);
  }

  const { size, type } = check.data;
  const prefix = nanoidSmallLettersAndNumber();

  const policy = await createUploadPolicy({
    key: `${session.user.id}/${FOLDER_ORIGINAL_FACE}/${prefix}`,
    bucket: process.env.BUCKET_ORIGINAL_FACE,
    maxBytes: size,
    contentType: type,
    expiresSec: 180,
  });

  try {
    return Response.json({
      status: STATUS_SUCCESS,
      data: policy,
      errorReason: null,
      errorDisplay: null
    });
  } catch (err) {
    console.error(err);

    return Response.json(API_ERROR_SIGNED_URL);
  }
}
