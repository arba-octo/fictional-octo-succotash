import { useContext } from 'react';
import { ModalAuthContext } from './ModalAuthContext';

export const useModalAuthContext = () => useContext(ModalAuthContext);
