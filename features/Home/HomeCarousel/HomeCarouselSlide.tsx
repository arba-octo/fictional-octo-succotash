import HomeCarouselContainer from '@/features/Home/HomeCarousel/HomeCarouselContainer';
import HomeCarouselPlayer from '@/features/Home/HomeCarousel/HomeCarouselPlayer';
import { useAppSelector } from './redux/hooks';
import { selectPlayId } from './redux/slice';

type Props = {
  id: string
  src: string
  thumbnailSrc: string
  blurDataURL: string
  alt: string
  width: number
  height: number
}

function HomeCarouselSlide(props: Props) {
  const {
    id,
    src,
    thumbnailSrc,
    blurDataURL,
    width,
    height,
    alt
  } = props;

  const playId = useAppSelector(selectPlayId);

  return (
    <HomeCarouselContainer id={id}>
      <HomeCarouselPlayer
        isPlay={id === playId}
        videoSrc={src}
        thumbnailSrc={thumbnailSrc}
        placeholder="blur"
        blurDataURL={blurDataURL}
        width={width}
        height={height}
        alt={alt}
      />
    </HomeCarouselContainer>
  );
}

export default HomeCarouselSlide;
