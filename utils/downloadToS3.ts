import { Upload } from '@aws-sdk/lib-storage';
import { s3Uploader } from '@/lib/s3';
import { Readable } from 'stream';
import type { ReadableStream as NodeReadableStream } from 'node:stream/web';

export function toNodeStream(webStream: NodeReadableStream<Uint8Array>): Readable {
  return Readable.fromWeb(webStream);
}

type Props = {
  url: string;
  key: string;
  bucket: string;
  contentType: string;
  bodyTimeoutMs?: number;
};
export async function downloadToS3(props: Props) {
  const {
    url,
    key,
    bucket,
    contentType,
    bodyTimeoutMs = 5 * 60_000,
  } = props;

  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), bodyTimeoutMs);

  try {
    const res = await fetch(url, { signal: ac.signal, headers: { 'User-Agent': 'YARMY/1.0' } });

    if (!res.ok) {
      clearTimeout(t);

      return { ok: false };
    }

    const webBody = res.body;

    if (!webBody) {
      clearTimeout(t);

      return { ok: false };
    }

    const stream = toNodeStream(webBody as NodeReadableStream<Uint8Array>);

    const uploader = new Upload({
      client: s3Uploader,
      params: {
        Bucket: bucket,
        Key: key,
        Body: stream as unknown as Readable,
        ContentType: contentType,
      },
      partSize: 8 * 1024 * 1024, // 8MB
      queueSize: 4,
    });

    await uploader.done();
    clearTimeout(t);

    return { ok: true };
  } catch (e) {
    clearTimeout(t);
    ac.abort();
    console.error('Download failed:', e);

    return { ok: false };
  }
}
