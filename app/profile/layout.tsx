import type { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

function ProfileLayout({ children }: Props) {
  return children;
}

export default ProfileLayout;
