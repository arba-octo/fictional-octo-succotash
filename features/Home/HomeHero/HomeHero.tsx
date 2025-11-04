import Images from 'next/image';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';
import { FireIcon } from '@heroicons/react/24/solid';
import { URL_HOME_HERO_PLACEHOLDER } from '@/constants/urls';
import HomeHeroPlayer from './HomeHeroPlayer';
import HomeHeroPlayerContainer from '@/features/Home/HomeHero/HomeHeroPlayerContainer';
import HomeHeroProvider from '@/features/Home/HomeHero/HomeHeroProvider';
import HomeHeroUpload from '@/features/Home/HomeHero/HomeHeroUpload';

function HomeHero() {
  return (
    <HomeHeroProvider>
      <section className="container mx-auto">
        <div className="pt-12 lg:pt-20 xl:pt-26 pb-10 xl:pb-15 px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-[1fr_minmax(0,600px)] gap-10 md:gap-4 lg:gap-15 xl:gap-35">
            <div className="flex flex-col">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-2">Твоё фото оживает</h1>
              <p className="xl:text-lg text-base-content/60 mb-4 lg:mb-7">
                Просто выбери портрет&nbsp;&mdash; и&nbsp;мы&nbsp;оживим его: лёгкая улыбка, моргание, движение головы.
                <span className="hidden lg:inline"> Фотография превращается в&nbsp;живое воспоминание, которое можно хранить, делиться им&nbsp;или сделать
                  своим уникальным образом в&nbsp;сети.
                </span>
              </p>
              <div className="space-y-2 mb-10">
                <p className="text-base-content/60 flex items-center gap-2">
                  <SparklesIcon width={22} height={22} className="text-yellow-400 drop-shadow-glow min-w-5.5" />
                  Выделись среди миллионов одинаковых фотографий.
                </p>
                <p className="text-base-content/60 flex items-center gap-2">
                  <HeartIcon width={22} height={22} className="text-red-500 min-w-5.5" />
                  Сделай свой аватар живым и&nbsp;уникальным.
                </p>
                <p className="text-base-content/60 flex items-center gap-2">
                  <FireIcon width={22} height={22} className="text-orange-500 min-w-5.5" />
                  Попробуй прямо сейчас&nbsp;&mdash; загрузи фото и&nbsp;посмотри, как оно оживает!
                </p>
              </div>
              <HomeHeroUpload />
            </div>
            <HomeHeroPlayerContainer>
              <figure className="diff aspect-16/9" tabIndex={0}>
                <div className="diff-item-1 z-30" role="img" tabIndex={0}>
                  <Images
                    src="https://yarmiinfo.ru/main-page/thumbnail/clyy4kx8r0003rnk5ex4x2k4r.jpg"
                    width={1000}
                    height={1000}
                    placeholder="blur"
                    blurDataURL={URL_HOME_HERO_PLACEHOLDER}
                    alt="Твоё фото улыбается"
                  />
                </div>
                <div className="diff-item-2 after:z-50" role="img">
                  <div>
                    <HomeHeroPlayer
                      videoSrc="https://yarmiinfo.ru/main-page/hls/clyy4kx8r0003rnk5ex4x2k4r/playlist.m3u8"
                      thumbnailSrc="https://yarmiinfo.ru/main-page/thumbnail/clyy4kx8r0003rnk5ex4x2k4r.jpg"
                      placeholder="blur"
                      blurDataURL={URL_HOME_HERO_PLACEHOLDER}
                      width={1000}
                      height={1000}
                      alt="Твоё фото улыбается"
                    />
                  </div>
                </div>
                <div className="diff-resizer z-40"></div>
              </figure>
            </HomeHeroPlayerContainer>
          </div>
        </div>
      </section>
    </HomeHeroProvider>
  );
}

export default HomeHero;
