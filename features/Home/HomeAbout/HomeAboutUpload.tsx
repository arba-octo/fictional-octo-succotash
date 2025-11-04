'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useModalAuthContext } from '@/context/ModalAuth/useModalAuthContext';

function HomeAboutUpload() {
  const { status } = useSession();
  const { onOpenModalAuth } = useModalAuthContext();

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <button
        disabled={status === 'loading'}
        className="btn btn-primary w-max btn-lg"
        onClick={() => onOpenModalAuth()}
      >
        Загрузить фото
      </button>
    );
  }

  return (
    <Link href="/upload" className="btn btn-primary w-max btn-lg">
      Загрузить фото
    </Link>
  );
}

export default HomeAboutUpload;
