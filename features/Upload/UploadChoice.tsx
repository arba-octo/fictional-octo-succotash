import { PROMPT_EMOTIONS, PROMPT_INTERACTIVE } from '@/constants/prompts';
import UploadButton from '@/features/Upload/UploadButton';
import UploadPromptItem from '@/features/Upload/UploadPromptItem';

function UploadChoice() {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <h1 className="text-3xl font-bold">Оживите своё фото</h1>
        <UploadButton />
      </div>
      <p className="text-base-content/70 mb-8 text-sm">
        Чтобы фото подошло для обработки, загрузите чёткий портрет в&nbsp;хорошем свете.
        Лицо должно быть видно прямо, без теней и&nbsp;лишних предметов. Подойдут снимки в&nbsp;JPG/PNG/WebP до&nbsp;10&nbsp;МБ с&nbsp;нейтральным
        выражением или лёгкой улыбкой.
      </p>
      <h2 className="text-xl font-bold mb-2">Сценарии</h2>

      <div className="card bg-base-100 card-sm shadow mb-4">
        <div className="card-body">
          <h2 className="card-title">Эмоции и выражения</h2>
          <div className="flex flex-wrap gap-2">
            {PROMPT_EMOTIONS.map((item) => (
              <UploadPromptItem
                key={item.id}
                id={item.id}
                title={item.title}
                emoji={item.emoji}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="card bg-base-100 card-sm shadow">
        <div className="card-body">
          <h2 className="card-title">Интерактивные “оживления”</h2>
          <div className="flex flex-wrap gap-2">
            {PROMPT_INTERACTIVE.map((item) => (
              <UploadPromptItem
                key={item.id}
                id={item.id}
                title={item.title}
                emoji={item.emoji}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadChoice;
