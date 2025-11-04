export const FILE_TYPE_WEBM = 'video/webm';
export const FILE_TYPE_MP4 = 'video/mp4';
export const FILE_TYPE_PNG = 'image/png';
export const FILE_TYPE_JPEG = 'image/jpeg';
export const FILE_WEBM_PNG_JPEG = [FILE_TYPE_WEBM, FILE_TYPE_PNG, FILE_TYPE_JPEG] as const;
export const FILE_MAX_SIZE_FACE = 10 * 1024 * 1024; // 10MB
export const FILE_ASPECT_RATIOS = {
  '16:9': '16:9',
  '1:1': '1:1',
  '9:16': '9:16',
} as const;
