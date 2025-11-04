import Link from 'next/link';
import { auth } from '@/auth';
import HeaderEntry from '@/components/Header/HeaderEntry';
import IconLogo from '@/Icons/Logo';
import HeaderUpload from '@/components/Header/HeaderUpload';

async function Header() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Link href="/" className="link rounded-xl p-1">
          <IconLogo />
        </Link>
      </div>
      <div className="navbar-end gap-4">
        <HeaderUpload user={user} />
        <HeaderEntry user={user} />
      </div>
    </div>
  );
}

export default Header;
