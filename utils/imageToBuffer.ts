import { getErrorMessage } from '@/utils/getErrorMessage';

export async function imageToBuffer(val: unknown): Promise<Buffer> {
  if (typeof val !== 'string') {
    throw new Error('Payload must be a string (URL or dataURL)');
  }

  if (val.startsWith('http://') || val.startsWith('https://')) {
    try {
      const r = await fetch(val);

      if (!r.ok) {
        throw new Error(`Image download failed, status: ${r.status} (${r.statusText})`);
      }

      return Buffer.from(await r.arrayBuffer());
    } catch (err) {
      throw new Error(`Image download error: ${getErrorMessage(err)}`);
    }
  }

  if (val.startsWith('data:image/') && val.includes(';base64,')) {
    const commaIndex = val.indexOf(',');

    if (commaIndex === -1 || commaIndex === val.length - 1) {
      throw new Error('Invalid dataURL: missing base64 data');
    }
    const b64 = val.substring(commaIndex + 1);

    return Buffer.from(b64, 'base64');
  }

  throw new Error('Unsupported image payload format: only http(s) URLs and base64 dataURLs are supported');
}
