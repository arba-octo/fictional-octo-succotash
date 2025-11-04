import IconLogo from '@/Icons/Logo';

function Footer() {
  return (
    <footer className="border-t border-base-300">
      <div className="footer md:footer-horizontal text-base-content py-15 px-4 container mx-auto">
        <aside>
          <IconLogo />
          <p className="text-sm text-base-content/70">
            © {new Date().getFullYear()} yarmy.ru
            <br />
            Сервис оживления фотографий с помощью AI
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Преимущества</h6>
          <span>🎥 Результат — короткое видео с эмоциями</span>
          <span>🤖 Современные AI-технологии</span>
          <span>🕒 Обычно обработка занимает до 5 минут</span>
          <span>⚡ Быстрая обработка фото</span>
        </nav>
        <nav>
          <h6 className="footer-title">О сервисе</h6>
          <span>📸 Лучше всего подходят портретные фото</span>
          <span>🔒 Безопасность и приватность</span>
          <span>🌍 Полностью онлайн, без установки</span>
          <span>😊 Реалистичные эмоции</span>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
