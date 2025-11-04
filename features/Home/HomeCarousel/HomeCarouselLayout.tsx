import { type ReactNode } from 'react';
import { STATUS_PLAY } from '@/constants/status';
import { useAppSelector } from './redux/hooks';
import { selectStatus } from './redux/slice';

type Props = {
  children: ReactNode
}

function HomeCarouselLayout({ children }: Props) {
  const status = useAppSelector(selectStatus);

  return (
    <div className={`absolute top-0 bottom-0 left-0 right-0 ${status === STATUS_PLAY ? 'z-20' : 'z-0'}`}>
      {children}
    </div>
  );
};

export default HomeCarouselLayout;
