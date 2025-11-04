'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store  from '@/redux/upload/uploadStore';

type Props = {
  children: ReactNode
}

function UploadProvider({ children }: Props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default UploadProvider;
