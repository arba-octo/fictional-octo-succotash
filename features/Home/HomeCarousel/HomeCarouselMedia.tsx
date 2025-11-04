import { useRef } from 'react';
import Video from '@mux/mux-video-react';
import { useAppDispatch } from './redux/hooks';
import { changeStatus } from './redux/slice';
import { STATUS_PLAY } from '@/constants/status';

type Props = {
  videoSrc: string
  width: number
  height: number
}

function HomeHeroPlayerMedia(props: Props) {
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const dispatch = useAppDispatch();

  return (
    <div className="relative w-full h-full flex">
      <Video
        ref={videoPlayerRef}
        className="m-auto w-full h-full object-cover"
        src={props.videoSrc}
        type="hls"
        playsInline
        muted
        autoPlay
        loop
        onLoadedData={() => {
          dispatch(changeStatus(STATUS_PLAY));
        }}
      />
    </div>
  );
}

export default HomeHeroPlayerMedia;
