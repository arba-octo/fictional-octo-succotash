'use client';

import { ReactNode, useState, useMemo, useCallback } from 'react';
import { UploadFileContext } from '@/context/Upload/UploadFileContext';

type Props = {
  children: ReactNode
}

function UploadFileProvider({ children }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleFile = useCallback((newFile: File | null) => {
    setFile(newFile);
  }, []);
  const value = useMemo(() => ({
    file,
    onFile: handleFile,
  }), [file, handleFile]);

  return (
    <UploadFileContext.Provider value={value}>
      {children}
    </UploadFileContext.Provider>
  );
}

export default UploadFileProvider;
