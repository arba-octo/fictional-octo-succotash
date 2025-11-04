import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import PlayerWrap from './PlayerWrap';
import PlayerProvider from './PlayerProvider';

type Props = {
  thumbnailSrc: string
  videoSrc: string
  placeholderURL?: string
  placeholder?: PlaceholderValue
  alt: string
  width: number
  height: number
}

function VideoPlayer(props: Props) {
  return (
    <PlayerProvider>
      <PlayerWrap {...props} />
    </PlayerProvider>
  );
}

export default VideoPlayer;
