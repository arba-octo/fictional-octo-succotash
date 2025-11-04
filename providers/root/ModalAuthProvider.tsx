'use client';

import { useRef, useCallback, useMemo, ReactNode } from 'react';
import { ModalAuthContext } from '@/context/ModalAuth/ModalAuthContext';
import ModalAuth from '@/components/ModalAuth/ModalAuth';

type Props = {
  children: ReactNode
}
type Modal = HTMLDialogElement & {
  showModal: () => void
}

function ModalAuthProvider({ children }: Props) {
  const modalRef = useRef<Modal>(null);

  const handleOpenModalAuth = useCallback(() => {
    modalRef.current?.showModal();
  }, []);

  const value = useMemo(() => ({
    onOpenModalAuth: handleOpenModalAuth
  }), [handleOpenModalAuth]);

  return (
    <ModalAuthContext.Provider value={value}>
      {children}
      <ModalAuth modalRef={modalRef} />
    </ModalAuthContext.Provider>
  );
}

export default ModalAuthProvider;
