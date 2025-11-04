'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useModalAuthContext } from '@/context/ModalAuth/useModalAuthContext';

function HomeHeroUpload() {
  const { status } = useSession();
  const { onOpenModalAuth } = useModalAuthContext();

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <button
        disabled={status === 'loading'}
        className="btn btn-primary w-max btn-lg"
        onClick={() => onOpenModalAuth()}
      >
        Попробовать сейчас
      </button>
    );
  }

  return (
    <Link href="/upload" className="btn btn-primary w-max btn-lg">
      Попробовать сейчас
    </Link>
  );
}

export default HomeHeroUpload;
