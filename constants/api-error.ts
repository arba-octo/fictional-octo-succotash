import { STATUS_ERROR } from './status';

export const API_ERROR_SIGNED_URL = {
  status: STATUS_ERROR,
  data: null,
  errorReason: 'signed-url-error',
  errorDisplay: 'Хмм… не удалось загрузить ссылку. Попробуйте чуть позже 😉'
};
export const API_ERROR_UNAUTHORIZED = {
  status: STATUS_ERROR,
  data: null,
  errorReason: 'unauthorized-error',
  errorDisplay: 'Чтобы получить доступ к этой функции, нужно войти 👤'
};
export const API_ERROR_JOB_START = {
  status: STATUS_ERROR,
  data: null,
  errorReason: 'job-start-error',
  errorDisplay: 'Не удалось запустить все шаги обработки. Попробуйте чуть позже 😉'
};
