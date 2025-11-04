'use client';

import { signOut } from 'next-auth/react';

function HeaderEntrySignOut() {
  return (
    <button
      type="button"
      className="cursor-pointer text-base flex gap-2 items-center"
      onClick={() => signOut()}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" className="text-neutral-500" fill="currentColor">
        <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m15.76 12.16-11.4-.03 5.31 5.54m-5.3-5.54 5.3-5.45m5.3 12.82h4.06V4.85h-4.07" />
      </svg>
      Выйти
    </button>
  );
}

export default HeaderEntrySignOut;
