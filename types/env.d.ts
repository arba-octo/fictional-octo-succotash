declare namespace NodeJS {
  interface ProcessEnv {
    YANDEX_ID: string;
    YANDEX_SECRET: string;
    DATABASE_URL: string;
    BUCKET_ORIGINAL_FACE: string;
    BUCKET_CDN: string;
    FAL_MODEL: string;
    WEBHOOK_BASE_URL: string;
  }
}
