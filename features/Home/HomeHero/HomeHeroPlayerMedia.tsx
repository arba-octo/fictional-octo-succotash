import { useEffect, useRef } from 'react';
import Video from '@mux/mux-video-react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { selectStatus, changeIsLoadedData } from './redux/slice';
import { STATUS_PAUSE, STATUS_PLAY } from '@/constants/status';

type Props = {
  videoSrc: string
  width: number
  height: number
}

function HomeHeroPlayerMedia(props: Props) {
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  useEffect(() => () => {
    videoPlayerRef.current?.pause();
    dispatch(changeIsLoadedData(false));
  }, [dispatch]);

  useEffect(() => {
    if (status === STATUS_PLAY) {
      videoPlayerRef.current?.play().catch(console.info);

    }
    if (status === STATUS_PAUSE) {
      videoPlayerRef.current?.pause();
    }
  }, [status]);

  return (
    <div
      className="relative w-full h-full flex"
      style={{ background: 'var(--playerBlurBackground)' }}
    >
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
          dispatch(changeIsLoadedData(true));
        }}
      />
    </div>
  );
}

export default HomeHeroPlayerMedia;
