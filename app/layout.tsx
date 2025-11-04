import '../styles/globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Manrope } from 'next/font/google';
import SessionProvider from '@/providers/root/SessionProvider';
import ModalAuthProvider from '@/providers/root/ModalAuthProvider';
import { ToastProvider } from '@/providers/root/ToastProvider';
import CookiesProvider from '@/providers/root/CookiesProvider';

const fontSans = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ярми — видеохостинг лучших игровых моментов!',
  description: 'Смотрите лучшие игровые моменты, загружайте собственные ролики и делитесь ими с друзьями, близкими и целым миром.',
  keywords: 'видео, игра, игровые моменты, игровые идео, поделиться, бесплатно, загрузить, стрим, лучшие моменты, топ, игровые моменты',
  robots: 'index, follow'
};

type Props = Readonly<{
  children: ReactNode
}>

function RootLayout({ children }: Props) {
  return (
    <html lang="ru">
      <body className={`${fontSans.variable} antialiased`}>
        <SessionProvider>
          <ModalAuthProvider>
            <ToastProvider>
              <CookiesProvider>
                {children}
              </CookiesProvider>
            </ToastProvider>
          </ModalAuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

export default RootLayout;
