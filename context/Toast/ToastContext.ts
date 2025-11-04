import { createContext } from 'react';
import { ShowToastProps } from '@/providers/root/ToastProvider';

type ToastContext = {
  showToast: (data: ShowToastProps) => void
}

export const ToastContext = createContext<ToastContext | undefined>(undefined);
