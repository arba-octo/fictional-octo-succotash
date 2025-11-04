import Link from 'next/link';
import { Session } from 'next-auth';
import { PlusIcon } from '@heroicons/react/24/outline';
import HeaderUploadSignIn from '@/components/Header/HeaderUploadSignIn';

type Props = {
  user?: Session['user']
}

async function HeaderUpload({ user }: Props) {
  if (!user) {
    return <HeaderUploadSignIn />;
  }

  return (
    <div>
      <Link href="/upload" className="link link-hover flex items-center gap-1">
        <PlusIcon width={20} height={20} />
        Загрузить
      </Link>
    </div>
  );
}

export default HeaderUpload;
