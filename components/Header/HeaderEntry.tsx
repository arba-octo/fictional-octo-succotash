import Link from 'next/link';
import { Session } from 'next-auth';
import { getInitialsName } from '@/utils/getInitialsName';
import HeaderEntrySignIn from '@/components/Header/HeaderEntrySignIn';
import HeaderEntrySignOut from '@/components/Header/HeaderEntrySignOut';

type Props = {
  user?: Session['user']
}

async function HeaderEntry({ user }: Props) {
  if (!user) {
    return <HeaderEntrySignIn />;
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar avatar-placeholder">
        <div className="w-10 rounded-full bg-base-300 grid place-items-center overflow-hidden">
          {user.image ? (
            <img alt={user.name ?? 'user'} src={user.image} />
          ) : (
            <span className="font-bold">{getInitialsName(user.name)}</span>
          )}
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-64"
      >
        <li>
          <Link href="/profile" className="text-base">
            <svg width={18} height={18} viewBox="0 0 24 24" className="text-neutral-500" fill="currentColor">
              <path d="M15.713 12.71a5.996 5.996 0 002.058-3.025 5.966 5.966 0 00-.088-3.65 6 6 0 00-2.2-2.923 6.052 6.052 0 00-6.995 0 6 6 0 00-2.2 2.923 5.965 5.965 0 00-.089 3.65 5.995 5.995 0 002.058 3.024 10.043 10.043 0 00-4.262 3.228 9.963 9.963 0 00-1.989 4.948 1 1 0 00.216.738 1.012 1.012 0 001.794-.518 7.981 7.981 0 012.631-5.069 8.065 8.065 0 015.358-2.034c1.977 0 3.884.724 5.358 2.034a7.98 7.98 0 012.631 5.069 1.008 1.008 0 001.005.89h.11c.264-.031.505-.164.67-.37a.996.996 0 00.215-.73 9.963 9.963 0 00-1.999-4.96 10.044 10.044 0 00-4.282-3.226zM11.985 12a4.035 4.035 0 01-2.233-.674 4.003 4.003 0 01-1.48-1.794 3.977 3.977 0 01.87-4.357 4.04 4.04 0 014.38-.867 4.015 4.015 0 011.805 1.473 3.982 3.982 0 01-.5 5.048 4.031 4.031 0 01-2.842 1.17z" />
            </svg>
            Профиль
          </Link>
        </li>
        <li>
          <HeaderEntrySignOut />
        </li>
      </ul>
    </div>
  );
}

export default HeaderEntry;
