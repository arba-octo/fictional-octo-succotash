'use client';

import { useCallback, useRef, useState, useMemo, ReactNode } from 'react';
import { nanoidSmallLetters } from '@/lib/nanoid';
import { ToastContext } from '@/context/Toast/ToastContext';
import Toast from '@/components/Toast/Toast';
import { MAP_TOAST } from '@/constants/map';

export type ShowToastProps = {
  type: keyof typeof MAP_TOAST
  message: string
  duration?: number
}
type Toast = {
  id: string
  type: keyof typeof MAP_TOAST
  message: string
}
type Props = {
  children: ReactNode
}

const nanoId = nanoidSmallLetters(5);

export function ToastProvider({ children }: Props) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timers = useRef<Record<string, NodeJS.Timeout>>({});

  const showToast = useCallback(({ type, message, duration = 5000 }: ShowToastProps) => {
    const id = nanoId();

    setToasts((prev) => [...prev, { id, type, message }]);

    timers.current[id] = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      delete timers.current[id];
    }, duration);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
      delete timers.current[id];
    }
  }, []);

  const stopTimer = useCallback((id: string) => {
    if (timers.current[id]) {
      clearTimeout(timers.current[id]);
    }
  }, []);

  const startTimer = useCallback((id: string) => {
    timers.current[id] = setTimeout(() => removeToast(id), 5000);
  }, [removeToast]);

  const contextValue = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="toast toast-bottom toast-center">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
            stopTimer={stopTimer}
            startTimer={startTimer}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
