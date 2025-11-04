import { createContext } from 'react';

type ModalAuth = {
  onOpenModalAuth: () => void
}

export const ModalAuthContext = createContext<ModalAuth>({ onOpenModalAuth: () => {} });
