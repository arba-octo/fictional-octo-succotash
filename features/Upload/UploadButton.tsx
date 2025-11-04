'use client';

import { validateImage } from '@/utils/validationImage';
import { useToastContext } from '@/context/Toast/useToastContext';
import { useUploadFileContext } from '@/context/Upload/useUploadFileContext';
import { useAppDispatch, useAppSelector } from '@/redux/upload/uploadHooks';
import { selectStatus, selectPromptId, setStatus, setPromptId } from '@/redux/upload/uploadSlice';
import { STATUS_INIT, STATUS_LOADING, STATUS_SUCCESS } from '@/constants/status';
import { detectAspectFromFile } from '@/utils/detectAspectFromFile';
import { getErrorMessage } from '@/utils/getErrorMessage';

function UploadButton() {
  const dispatch = useAppDispatch();
  const promptId = useAppSelector(selectPromptId);
  const status = useAppSelector(selectStatus);
  const { showToast } = useToastContext();
  const { file, onFile } = useUploadFileContext();

  const handleStart = async () => {
    if (!file) {
      showToast({ type: 'error', message: 'Файл не выбран. Выберите файл, чтобы продолжить.' });

      return;
    }

    const err = await validateImage(file);

    if (err) {
      showToast({ type: 'error', message: err });

      return;
    }

    dispatch(setStatus(STATUS_LOADING));

    try {
      const res = await fetch(`/api/v1/signed-url?type=${encodeURIComponent(file.type)}&size=${file.size}`);
      const json = await res.json();

      if (json.status !== STATUS_SUCCESS) {
        throw new Error((json)?.errorDisplay);
      }

      const { url, fields } = json.data;

      const form = new FormData();

      Object.entries(fields).forEach(([k, v]) => form.append(k, v as string));
      form.append('file', file);

      const uploadRes = await fetch(url, { method: 'POST', body: form });

      if (!uploadRes.ok) {
        throw new Error(`Не удалось загрузить файл: ${uploadRes.statusText}`);
      }

      const { aspectRatio } = await detectAspectFromFile(file);

      const startRes = await fetch('/api/v1/job/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          imageKey: fields.key,
          promptId,
          aspectRatio,
          kind: 'pro'
        }),
      });

      const jsonStart = await startRes.json();

      if (jsonStart.status !== STATUS_SUCCESS) {
        throw new Error(jsonStart?.errorDisplay);
      }

      showToast({ type: 'success', message: 'Фото успешно загружено и запущено в обработку. Ожидайте результат! 🚀', duration: 8000 });
      onFile(null);
      dispatch(setPromptId('') );
    } catch (e) {
      showToast({ type: 'error', message: getErrorMessage(e) });
    } finally {
      dispatch(setStatus(STATUS_INIT));
    }
  };

  return (
    <button
      className="btn btn-primary"
      onClick={handleStart}
      disabled={!file || promptId.length === 0 || status === STATUS_LOADING}
    >
      {status === STATUS_LOADING && (
        <span className="loading loading-spinner" />
      )}
      Запустить
    </button>
  );
}

export default UploadButton;
