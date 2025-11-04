'use client';

import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import { Suspense, lazy } from 'react';
import HomeHeroPlayerLayout from './HomeHeroPlayerLayout';
import HomeHeroPlayerThumbnail from './HomeHeroPlayerThumbnail';

const HomeHeroPlayerMedia = lazy(() => import('./HomeHeroPlayerMedia'));

type Props = {
  thumbnailSrc: string
  videoSrc: string
  blurDataURL?: string
  placeholder?: PlaceholderValue
  alt: string
  width: number
  height: number
}

function HomeHeroPlayer(props: Props) {
  return (
    <div className="relative w-full h-full">
      <HomeHeroPlayerLayout>
        <Suspense>
          <HomeHeroPlayerMedia {...props} />
        </Suspense>
      </HomeHeroPlayerLayout>
      <HomeHeroPlayerThumbnail {...props} />
    </div>
  );
}

export default HomeHeroPlayer;
