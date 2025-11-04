'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DATA_BLUR_URL } from '@/constants/notFound/data';

function NotFound() {
  return (
    <main className="relative">
      <div className="h-screen">
        <Image
          priority src="/404.jpg"
          width={2000}
          height={2000}
          className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10 opacity-40"
          placeholder="blur"
          blurDataURL={DATA_BLUR_URL}
          alt="404"
        />
        <div className="h-full grid place-items-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl xl:text-4xl text-center font-bold mt-20 mb-4 pr-1 pl-1">Страница не&nbsp;найдена</p>
            <Link href="/" className="btn btn-primary">Перейти на&nbsp;главную</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
