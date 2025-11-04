'use client';

import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import { Suspense, lazy } from 'react';
import HomeCarouselLayout from './HomeCarouselLayout';
import HomeCarouselThumbnail from './HomeCarouselThumbnail';

const HomeCarouselMedia = lazy(() => import('./HomeCarouselMedia'));

type Props = {
  isPlay: boolean
  thumbnailSrc: string
  videoSrc: string
  blurDataURL?: string
  placeholder?: PlaceholderValue
  alt: string
  width: number
  height: number
}

function HomeCarouselPlayer(props: Props) {
  return (
    <div className="relative w-full h-full">
      <HomeCarouselLayout>
        {props.isPlay && (
          <Suspense>
            <HomeCarouselMedia {...props} />
          </Suspense>
        )}
      </HomeCarouselLayout>
      <HomeCarouselThumbnail {...props} />
    </div>
  );
}

export default HomeCarouselPlayer;
