'use client';

import { useModalAuthContext } from '@/context/ModalAuth/useModalAuthContext';

function HeaderEntrySignIn() {
  const { onOpenModalAuth } = useModalAuthContext();

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => onOpenModalAuth()}
    >
      Войти
    </button>
  );
}

export default HeaderEntrySignIn;
