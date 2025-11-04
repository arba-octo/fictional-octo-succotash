import { useEffect, useRef } from 'react';
import Video from '@mux/mux-video-react';
import { useAppDispatch } from './redux/hooks';
import { changeIsLoadedData } from './redux/slice';

type Props = {
  videoSrc: string
  width: number
  height: number
}

function Player(props: Props) {
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => () => {
    videoPlayerRef.current?.pause();
    dispatch(changeIsLoadedData(false));
  }, [dispatch]);

  return (
    <div
      className="relative w-full h-full flex"
      style={{ background: 'var(--playerBlurBackground)' }}
    >
      <Video
        ref={videoPlayerRef}
        className="m-auto w-full h-full"
        src={props.videoSrc}
        type="video/mp4"
        playsInline
        muted
        autoPlay
        onLoadedData={() => {
          dispatch(changeIsLoadedData(true));
        }}
      />
    </div>
  );
}

export default Player;
