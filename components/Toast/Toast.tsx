import { ReactNode } from 'react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  InformationCircleIcon,
  XCircleIcon ,
} from '@heroicons/react/24/solid';
import { MAP_TOAST } from '@/constants/map';

const TOAST_ICONS: Record<keyof typeof MAP_TOAST, ReactNode> = {
  success: <CheckCircleIcon width={20} height={20} />,
  info: <InformationCircleIcon width={20} height={20} />,
  warning: <ExclamationTriangleIcon width={20} height={20} />,
  error: <XCircleIcon width={20} height={20} />
};

type Props = {
  id: string
  type: keyof typeof MAP_TOAST
  message: string
  duration?: number
  onClose: () => void
  stopTimer: (id: string) => void
  startTimer: (id: string) => void
}

function Toast(props: Props) {
  const {
    id,
    type,
    message,
    onClose,
    stopTimer,
    startTimer
  } = props;

  return (
    <div
      className={`alert alert-soft ${MAP_TOAST[type]}`}
      onMouseEnter={() => stopTimer(id)}
      onMouseLeave={() => startTimer(id)}
    >
      {TOAST_ICONS[type]}
      <span>{message}</span>
      <button className="cursor-pointer p-2" onClick={onClose}>
        <XMarkIcon width={15} height={15} />
      </button>
    </div>
  );
}

export default Toast;
