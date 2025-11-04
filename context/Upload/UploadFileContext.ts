import { createContext } from 'react';

type UploadFileContext = {
  file: File | null
  onFile: (file: File | null) => void
}

export const UploadFileContext = createContext<UploadFileContext | undefined>(undefined);
