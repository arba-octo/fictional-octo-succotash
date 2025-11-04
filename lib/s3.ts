import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const s3Uploader = new S3Client({
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT_HTTPS,
  credentials: {
    accessKeyId: process.env.S3_UPLOADER_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_UPLOADER_SECRET_ACCESS_KEY!,
  },
});

type createUploadPolicy = {
  key: string;
  bucket: string;
  maxBytes: number;
  contentType: string;
  expiresSec: number
}

export async function createUploadPolicy(props: createUploadPolicy) {
  const {
    key,
    bucket,
    maxBytes,
    contentType,
    expiresSec,
  } = props;

  const { url, fields } = await createPresignedPost(s3Uploader, {
    Bucket: bucket,
    Key: key,
    Expires: expiresSec,
    Conditions: [
      ['content-length-range', 0, maxBytes],
      ['eq', '$Content-Type', contentType],
    ],
    Fields: { 'Content-Type': contentType },
  });

  return { url, fields, maxBytes, key, bucket };
}

type PutS3Image = {
  key: string;
  bucket: string;
  url: string;
}

export async function uploadFromUrl(props: PutS3Image) {
  try {
    const { key, bucket, url } = props;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Не удалось скачать файл: ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type') ?? 'application/octet-stream';
    const body = Buffer.from(await response.arrayBuffer());

    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
    });

    await s3Uploader.send(command);

    return true;
  } catch(err) {
    console.error('uploadFromUrl error', err);

    return false;
  }
}

type SignedGet = {
  key: string;
  bucket: string;
  expiresSeconds: number;
}
export async function signedGet(props: SignedGet) {
  const { key, bucket, expiresSeconds } = props;

  const cmd = new GetObjectCommand({ Bucket: bucket, Key: key });

  return getSignedUrl(s3Uploader, cmd, { expiresIn: expiresSeconds });
}
