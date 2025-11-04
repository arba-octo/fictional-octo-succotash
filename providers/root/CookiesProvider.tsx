'use client';

import { ReactNode, useState, useCallback, useEffect, Suspense, lazy, Fragment } from 'react';

const Cookies = lazy(() => import('@/components/Cookies/Cookies'));

type Props = {
  children: ReactNode
}

const STORAGE_KEY = 'cookie_prefs_v1';

function CookiesProvider({ children }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);

    setVisible(!raw);
  }, []);

  const acceptAll = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  }, []);

  return (
    <Fragment>
      {children}

      {visible && (
        <Suspense>
          <Cookies onAccept={acceptAll} />
        </Suspense>
      )}
    </Fragment>
  );
}

export default CookiesProvider;
