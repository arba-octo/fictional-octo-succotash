import Image from 'next/image';
import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import { useAppSelector } from './redux/hooks';
import { selectStatus } from './redux/slice';
import { STATUS_LOADING } from '@/constants/status';

type Props = {
  isPlay: boolean
  thumbnailSrc: string
  blurDataURL?: string
  placeholder?: PlaceholderValue
  alt: string
  width: number
  height: number
}

function HomeCarouselThumbnail(props: Props) {
  const status = useAppSelector(selectStatus);

  return (
    <div className='flex absolute top-0 right-0 bottom-0 left-0 z-10'>
      <Image
        width={props.width}
        height={props.height}
        style={{ maxHeight: '100%', objectFit: 'cover' }}
        src={props.thumbnailSrc}
        placeholder={props.placeholder}
        blurDataURL={props.blurDataURL}
        alt={props.alt}
      />
      {status === STATUS_LOADING && props.isPlay && (
        <div className="loading loading-xl text-info absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      )}
    </div>
  );
}

export default HomeCarouselThumbnail;
