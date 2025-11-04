import Images from 'next/image';

function HomeInfo() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-10 xl:py-15 px-4">
          <div className="grid md:grid-cols-2 lg:[grid-template-columns:2fr_1fr] gap-6 mb-5 md:mb-10">
            <div className="max-w-4xl">
              <h3 className="text-2xl font-bold">Оживи свои фотографии с&nbsp;помощью эмоций</h3>
              <p className="text-sm text-base-content/60 mb-3">
                ИИ&nbsp;превращает статичные портреты в&nbsp;реалистичные видео с&nbsp;улыбками,
                смехом и&nbsp;живыми движениями. Ваши фото наполняются эмоциями, которые
                невозможно передать в&nbsp;статике.
              </p>
              <div className="space-y-2 mb-10">
                <p className="text-base-content/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral"></span>
                  Сделай своё фото живым и&nbsp;уникальным.
                </p>
                <p className="text-base-content/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral"></span>
                  Попробуй прямо сейчас&nbsp;&mdash; эффект впечатлит.
                </p>
                <p className="text-base-content/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral"></span>
                  Добавь эмоции в&nbsp;каждый портрет за&nbsp;секунды.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <Images
                  className="object-cover max-w-full max-h-full"
                  src="/info/info_2.webp"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  alt="успех"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:[grid-template-columns:1fr_2fr] gap-6 mb-5 md:mb-10">
            <div className="row-start-2 md:row-auto">
              <div className="aspect-video rounded-lg overflow-hidden">
                <Images
                  className="object-cover max-w-full max-h-full"
                  src="/info/info_3.webp"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  alt="успех"
                />
              </div>
            </div>
            <div className="ml-auto max-w-4xl">
              <h2 className="text-2xl font-bold">Эмоции возвращаются в&nbsp;каждый портрет</h2>
              <p className="text-sm text-base-content/60 mb-3">
                Фото&nbsp;&mdash; это память, а&nbsp;эмоции делают её&nbsp;настоящей. Наш сервис оживляет
                ваши портреты, возвращая улыбки и&nbsp;радость. Статичное изображение
                превращается в&nbsp;живое воспоминание.
              </p>
              <div className="space-y-2 mb-10">
                <p className="text-base-content/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral"></span>
                  Верни улыбки и&nbsp;радость на&nbsp;свои фото.
                </p>
                <p className="text-base-content/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral"></span>
                  Почувствуй эмоции в&nbsp;каждом кадре.
                </p>
                <p className="text-base-content/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral"></span>
                  Лёгкие движения делают портрет живым.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:[grid-template-columns:2fr_1fr] gap-6">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-bold">Оживи свои фото прямо сейчас</h2>
              <p className="text-sm text-base-content/60 mb-3">
                Загрузи портрет&nbsp;&mdash; и&nbsp;уже через секунды увидишь, как он&nbsp;оживает. Поделись
                результатом с&nbsp;друзьями или используй для работы. Сделай первый шаг &mdash;
                твои фото готовы ожить.
              </p>
              <div className="space-y-2 mb-10">
                <p className="text-base-content/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral"></span>
                  Загрузи фото&nbsp;&mdash; и&nbsp;оживи его за&nbsp;мгновения.
                </p>
                <p className="text-base-content/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral"></span>
                  Поделись результатом и&nbsp;удиви друзей.
                </p>
                <p className="text-base-content/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral"></span>
                  Сделай первый шаг&nbsp;&mdash; твои фото готовы ожить.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <Images
                  className="object-cover max-w-full max-h-full"
                  src="/info/info_5.jpg"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  alt="успех"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeInfo;
