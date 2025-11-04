function HomeFaq() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Часто задаваемые вопросы
          </h3>
          <p className="text-lg text-base-content/70">
            Мы собрали ответы на самые популярные вопросы о Ярми
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="collapse collapse-plus bg-base-100 rounded-lg shadow-sm self-start">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Сколько времени занимает оживление фото?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                Обычно обработка занимает до&nbsp;5&nbsp;минут. Всё зависит от&nbsp;загруженности
                сервиса и&nbsp;размера исходного изображения.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 rounded-lg shadow-sm self-start">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Нужно ли устанавливать приложение?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                Нет, Ярми полностью работает онлайн. Достаточно открыть сайт в&nbsp;браузере,
                загрузить фото и&nbsp;дождаться результата.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 rounded-lg shadow-sm self-start">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Какие фото лучше подходят для обработки?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                Лучше всего использовать портреты с&nbsp;чётко видимым лицом. Чем выше качество
                исходного фото, тем реалистичнее получится результат.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 rounded-lg shadow-sm self-start">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Безопасно ли хранить фото в Ярми?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                Да, мы&nbsp;используем современные методы защиты данных. Все изображения
                обрабатываются безопасно и&nbsp;не&nbsp;передаются третьим лицам.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 rounded-lg shadow-sm self-start">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Могу ли я делиться видео с друзьями?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                Конечно! Вы&nbsp;можете скачать видео и&nbsp;отправить его любым удобным способом &mdash;
                через мессенджеры или соцсети.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 rounded-lg shadow-sm self-start">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Сколько фото я могу оживить?
            </div>
            <div className="collapse-content text-base-content/70">
              <p>
                Количество не&nbsp;ограничено&nbsp;&mdash; вы&nbsp;можете загружать и&nbsp;оживлять столько фотографий, сколько хотите.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFaq;
