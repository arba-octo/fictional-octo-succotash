import UploadSpecCard from '@/features/Upload/UploadSpecCard';
import {
  ArrowUpTrayIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  NoSymbolIcon,
  PencilIcon,
  RectangleGroupIcon,
  SunIcon,
  UserGroupIcon,
  UserIcon
} from '@heroicons/react/24/outline';

function UploadRequired() {
  return (
    <div className="mt-6">
      <div>
        <h3 className="text-lg font-bold">📸 Требования к фото</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UploadSpecCard
            icon={<ArrowUpTrayIcon className="size-5 text-primary" />}
            title="Размер файла"
            lines={['Размер файла: до 10 МБ.']}
          />
          <UploadSpecCard
            icon={<DocumentTextIcon className="size-5 text-primary" />}
            title="Форматы файлов"
            lines={['Формат: .JPEG, PNG, WebP.']}
          />
          <UploadSpecCard
            icon={<DevicePhoneMobileIcon className="size-5 text-primary" />}
            title="Разрешение"
            lines={['Рекомендуется высокое разрешение:', '1024×1024 px и выше']}
          />
          <UploadSpecCard
            icon={<RectangleGroupIcon className="size-5 text-primary" />}
            title="Соотношение сторон"
            lines={['Рекомендуемое соотношение:', '16:9 (горизонтально), 9:16 (вертикально), 1:1 (квадрат)']}
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">👤 Требования к лицу</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UploadSpecCard
            icon={<SunIcon className="size-5 text-primary" />}
            title="Освещение"
            lines={['Выбирайте мягкий, равномерный свет, чтобы лицо было хорошо видно.']}
          />
          <UploadSpecCard
            icon={<UserIcon className="size-5 text-primary" />}
            title="Положение головы"
            lines={['Смотрите прямо в камеру — лёгкий наклон допустим.']}
          />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">❌ Что не подходит</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UploadSpecCard
            icon={<UserGroupIcon className="size-5 text-error" />}
            title="Неподходящие фото" lines={['Групповые фото, селфи с сильными искажениями, сильно повернутая голова.']} />
          <UploadSpecCard
            icon={<ExclamationTriangleIcon className="size-5 text-error" />}
            title="Качество"
            lines={['Низкое качество (меньше 512×512 px).']}
          />
          <UploadSpecCard
            icon={<NoSymbolIcon className="size-5 text-error" />}
            title="Аксессуары"
            lines={['На фото допускается только лицо — никаких лишних деталей или предметов.']}
          />
          <UploadSpecCard
            icon={<PencilIcon className="size-5 text-error" />}
            title="Художественные изображения"
            lines={['Излишний художественный стиль (рисунки, карикатуры, комиксы) — движок хуже «считывает» лицо.']}
          />
        </div>
      </div>
    </div>
  );
}

export default UploadRequired;
