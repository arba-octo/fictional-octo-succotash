'use client';

import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import { Suspense, lazy } from 'react';
import PlayerLayout from './PlayerLayout';
import Thumbnail from './Thumbnail';

const Player = lazy(() => import('./Player'));

type Props = {
  thumbnailSrc: string
  videoSrc: string
  placeholderURL?: string
  placeholder?: PlaceholderValue
  alt: string
  width: number
  height: number
}

function PlayerWrap(props: Props) {
  return (
    <div className="relative w-full h-full">
      <PlayerLayout>
        <Suspense>
          <Player {...props} />
        </Suspense>
      </PlayerLayout>
      <Thumbnail {...props} />
    </div>
  );
}

export default PlayerWrap;
