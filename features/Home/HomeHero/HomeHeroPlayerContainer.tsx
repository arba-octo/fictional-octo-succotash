'use client';

import { ReactNode } from 'react';
import { STATUS_PAUSE, STATUS_PLAY } from '@/constants/status';
import { useAppDispatch } from './redux/hooks';
import { changeStatus } from './redux/slice';

type Props = {
  children: ReactNode;
}

function HomeHeroPlayerContainer({ children }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div
      className="rounded-lg overflow-hidden self-start"
      onMouseEnter={() => dispatch(changeStatus(STATUS_PLAY))}
      onMouseLeave={() => dispatch(changeStatus(STATUS_PAUSE))}
    >
      {children}
    </div>
  );
}

export default HomeHeroPlayerContainer;
