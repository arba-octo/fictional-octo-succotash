import Link from 'next/link';

type Props = {
  onAccept: () => void
}

function Cookies({ onAccept }: Props) {
  return (
    <div className="toast toast-center z-50">
      <div
        className="alert shadow-lg bg-base-100 flex items-center gap-3"
        role="status"
        aria-live="polite"
      >
        <span className="text-sm">
          Мы используем&nbsp;
          <Link
            href="/cookies"
            className="link link-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
          cookie-файлы
          </Link>
          &nbsp;для улучшения работы сайта.
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={onAccept}
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
