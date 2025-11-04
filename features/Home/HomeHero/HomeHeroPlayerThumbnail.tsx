import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type Props = {
  thumbnailSrc: string
  blurDataURL?: string
  placeholder?: PlaceholderValue
  alt: string
  width: number
  height: number
}

function HomeHeroPlayerThumbnail(props: Props) {
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
    </div>
  );
}

export default HomeHeroPlayerThumbnail;
