'use client';

import { useState, useRef, useEffect, ChangeEvent, DragEvent } from 'react';
import Image from 'next/image';
import { useUploadFileContext } from '@/context/Upload/useUploadFileContext';
import { useAppSelector } from '@/redux/upload/uploadHooks';
import { selectStatus, selectPromptId } from '@/redux/upload/uploadSlice';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import { URL_UPLOAD_PLACEHOLDER } from '@/constants/urls';
import { STATUS_LOADING } from '@/constants/status';
import { PROMPTS } from '@/constants/prompts';

function UploadAction() {
  const { file, onFile } = useUploadFileContext();
  const status = useAppSelector(selectStatus);
  const promptId = useAppSelector(selectPromptId);
  const [isOver, setIsOver] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!file && inputRef.current?.value) {
      inputRef.current.value = '';
    }
  }, [file]);

  const stop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    onFile(file ?? null);
  };

  const onDrop = async (e: DragEvent) => {
    stop(e);
    setIsOver(false);
    onFile(e.dataTransfer.files[0]);
  };

  const onDragOver = (e: DragEvent) => {
    stop(e);
    setIsOver(true);
  };

  const onDragLeave = (e: DragEvent) => {
    stop(e);
    setIsOver(false);
  };

  const handleFileClear = () => {
    onFile(null);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="avatar">
        <div className="mask mask-squircle w-50">
          {file ? (
            <Image
              width={200}
              height={200}
              src={URL.createObjectURL(file)}
              alt="face"
            />
          ) : (
            <VideoPlayer
              width={200}
              height={200}
              alt="hi"
              videoSrc="/avatarV1.mp4"
              thumbnailSrc="/avatarV3.webp"
              placeholder="blur"
              placeholderURL={URL_UPLOAD_PLACEHOLDER}
            />
          )}
        </div>
        {file && (
          <button
            type="button"
            className="btn btn-xs btn-circle absolute right-2 top-2 z-20"
            onClick={handleFileClear}
          >
            ✕
          </button>
        )}
      </div>
      <div className="h-8 mt-2 flex items-center justify-between">
        {
          PROMPTS
            .filter((item) => item.id === promptId)
            .map((item) => (
              <div key={item.id} className="badge badge-xl">
                <span>{item.title}{item.emoji}</span>
              </div>
            ))
        }
      </div>
      <h1 className="text-xl font-bold mb-1 mt-8">Выберите фото для загрузки</h1>
      <span className="text-base-content/50 mb-5">или перетащите его сюда</span>
      <button className="btn btn-primary" disabled={!!file}>Выбрать фото</button>
      <div className="absolute inset-0">
        <div
          className={`relative w-full h-full border-dashed border-1 rounded-box flex items-center justify-center hover:border-primary focus:border-primary active:border-primary ${isOver ? 'border-error' : 'border-neutral'}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          tabIndex={0}
          role="button"
          aria-label="Перетащите файлы сюда или кликните, чтобы выбрать"
        >
          <input
            ref={inputRef}
            type="file"
            className={`absolute inset-0 w-full h-full opacity-0 ${
              status === STATUS_LOADING ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            accept="image/jpeg,image/png,image/webp"
            onChange={onChange}
            disabled={status === STATUS_LOADING}
            title=""
          />
        </div>
      </div>
    </div>
  );
}

export default UploadAction;
