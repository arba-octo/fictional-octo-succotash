'use client';

import { useAppSelector } from './redux/hooks';
import { selectData } from './redux/slice';
import HomeCarouselSlide from './HomeCarouselSlide';

function HomeCarouselSliders() {
  const data = useAppSelector(selectData);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {data?.map((item) => (
        <div key={item.id} className="aspect-[16/9] relative overflow-hidden rounded-lg shadow-xl">
          <HomeCarouselSlide {...item} />
        </div>
      ))}
    </div>
  );
}

export default HomeCarouselSliders;
