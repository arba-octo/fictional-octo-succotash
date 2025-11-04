import { useContext } from 'react';
import { UploadFileContext } from './UploadFileContext';

export const useUploadFileContext = () => {
  const context = useContext(UploadFileContext);

  if (!context) {
    throw new Error('useUploadFileContext must be used within a UploadFileProvider');
  }

  return context;
};
