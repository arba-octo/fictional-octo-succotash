import { type ReactNode } from 'react';
import { useAppSelector } from './redux/hooks';
import { selectIsLoadedData } from './redux/slice';

type Props = {
  children: ReactNode
}

function HomeHeroPlayerLayout({ children }: Props) {
  const isLoadedData = useAppSelector(selectIsLoadedData);

  return (
    <div className={`absolute top-0 bottom-0 left-0 right-0 ${isLoadedData ? 'z-20' : 'z-0'}`}>
      {children}
    </div>
  );
};

export default HomeHeroPlayerLayout;
