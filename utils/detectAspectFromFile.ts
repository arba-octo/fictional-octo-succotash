import { FILE_ASPECT_RATIOS } from '@/constants/file';

const RATIOS: Record<keyof typeof FILE_ASPECT_RATIOS, number> = {
  '16:9': 16 / 9,
  '1:1': 1,
  '9:16': 9 / 16,
};

function pickAspectRatio(width: number, height: number): string {
  const target = width / height;
  let best = '1:1';
  let minDiff = Infinity;

  for (const [key, ratio] of Object.entries(RATIOS)) {
    const diff = Math.abs(ratio - target);

    if (diff < minDiff) {
      minDiff = diff;
      best = key;
    }
  }

  return best;
}

export function getImageSize(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      URL.revokeObjectURL(url);
      resolve({ width, height });
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };
    img.src = url;
  });
}

export async function detectAspectFromFile(file: File): Promise<{
  width: number;
  height: number;
  aspectRatio: string;
}> {
  const { width, height } = await getImageSize(file);
  const aspectRatio = pickAspectRatio(width, height);

  return { width, height, aspectRatio };
}
