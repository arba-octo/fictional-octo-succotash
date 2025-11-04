import { ReactNode } from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import UploadFileProvider from '@/providers/upload/UploadFileProvider';
import UploadProvider from '@/providers/upload/UploadProvider';

type Props = {
  children: ReactNode
}

async function UploadLayout({ children }: Props) {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  return (
    <UploadProvider>
      <UploadFileProvider>
        {children}
      </UploadFileProvider>
    </UploadProvider>
  );
}

export default UploadLayout;
