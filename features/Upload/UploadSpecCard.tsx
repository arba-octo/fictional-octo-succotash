import { ReactNode } from 'react';

type Props = {
  icon: ReactNode
  title: string
  lines: string[]
}

function UploadSpecCard({ icon, title, lines }: Props) {
  return (
    <div className="p-4 flex gap-3 items-start">
      <div className="rounded-lg bg-base-200 p-2 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm opacity-70 leading-snug">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>)
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadSpecCard;
