import { z } from 'zod';
import { FILE_ASPECT_RATIOS, FILE_MAX_SIZE_FACE, FILE_WEBM_PNG_JPEG } from '@/constants/file';
import { MAP_KIND_MODELS } from '@/constants/map';

export const faceMetaSchema  = z.object({
  type: z.enum(FILE_WEBM_PNG_JPEG),
  size: z.number().int().positive().lte(FILE_MAX_SIZE_FACE),
}).required();

type Kind = keyof typeof MAP_KIND_MODELS;

export const jobStartSchema = z.object({
  imageUrl: z.url('imageUrl должен быть корректным URL'),
  promptId: z.cuid2(),
  aspectRatio: z.enum(Object.values(FILE_ASPECT_RATIOS)),
  kind: z.enum(Object.keys(MAP_KIND_MODELS) as Kind[]),
}).required();

export const jobWebhookFalAiDvlsnSchema = z.object({
  url: z.url('imageUrl должен быть корректным URL'),
  file_size: z.number().int().positive(),
  content_type: z.enum([
    'video/mp4',
    'video/webm',
    'video/quicktime',
    'video/x-matroska',
    'video/x-msvideo',
    'video/mpeg',
    'video/3gpp',
  ]),
}).required();
