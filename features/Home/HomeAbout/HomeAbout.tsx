import HomeAboutUpload from '@/features/Home/HomeAbout/HomeAboutUpload';

function HomeAbout() {
  return (
    <section className="py-15 px-4 bg-base-200/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-3xl sm:text-4xl font-extrabold mb-4">О нас</span>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            <strong>Ярми</strong> превращает статичные портреты в&nbsp;живые
            эмоциональные видео. Улыбки, смех, удивление и&nbsp;лёгкие движения
            глаз выглядят естественно и&nbsp;создают эффект настоящего присутствия.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🌟</div>
            <h4 className="font-semibold mb-1">Реалистичные эмоции</h4>
            <p className="text-base-content/70">
              От лёгкой улыбки до искреннего смеха — всё выглядит естественно.
            </p>
          </div>
          <div className="p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">⏱️</div>
            <h4 className="font-semibold mb-1">Быстрый результат</h4>
            <p className="text-base-content/70">
              Фото оживает в течение нескольких минут — без сложных настроек.
            </p>
          </div>
          <div className="p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">📱</div>
            <h4 className="font-semibold mb-1">Простота</h4>
            <p className="text-base-content/70">
              Загрузи фото, и ИИ сделает остальное. Всё работает онлайн.
            </p>
          </div>
          <div className="p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🎉</div>
            <h4 className="font-semibold mb-1">Удивляй друзей и близких</h4>
            <p className="text-base-content/70">
              Поделись ожившими фото и дари новые эмоции.
            </p>
          </div>
          <div className="p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🔒</div>
            <h4 className="font-semibold mb-1">Надёжная защита</h4>
            <p className="text-base-content/70">
              Ваши данные и фотографии обрабатываются безопасно и конфиденциально.
            </p>
          </div>
          <div className="p-6 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-2">🌍</div>
            <h4 className="font-semibold mb-1">Доступность</h4>
            <p className="text-base-content/70">
              Сервис работает онлайн и доступен в&nbsp;любое время, в&nbsp;любом месте.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <HomeAboutUpload />
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
