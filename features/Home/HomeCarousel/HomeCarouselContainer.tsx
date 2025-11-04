'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { onPlay, onPause, selectPlayId } from './redux/slice';

type Props = {
  children: ReactNode
  id: string
}

function HomeCarouselContainer({ children, id }: Props) {
  const dispatch = useAppDispatch();
  const playId = useAppSelector(selectPlayId);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDownOutside = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') {
        return;
      }

      if (ref.current && !ref.current.contains(e.target as Node)) {
        dispatch(onPause());
      }
    };

    document.addEventListener('pointerdown', handlePointerDownOutside);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDownOutside);
    };
  }, [dispatch]);

  return (
    <div
      ref={ref}
      className="w-full h-full touch-pan-y select-none"
      onMouseEnter={() => dispatch(onPlay(id))}
      onMouseLeave={() => dispatch(onPause())}
      onTouchStart={() => dispatch(playId === id ? onPause() : onPlay(id))}
      onTouchCancel={() => dispatch(onPause())}
    >
      {children}
    </div>
  );
}

export default HomeCarouselContainer;
