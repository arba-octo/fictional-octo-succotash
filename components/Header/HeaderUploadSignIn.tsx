'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import { useModalAuthContext } from '@/context/ModalAuth/useModalAuthContext';

function HeaderUploadSignIn() {
  const { onOpenModalAuth } = useModalAuthContext();

  return (
    <button
      type="button"
      className="link link-hover flex items-center gap-1"
      onClick={() => onOpenModalAuth()}
    >
      <PlusIcon width={20} height={20} />
      Загрузить
    </button>
  );
}

export default HeaderUploadSignIn;
