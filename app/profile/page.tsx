import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProfilePage from '@/features/Profile/Profile';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const getUser = async () => {
  try {
    const session = await auth();

    if (!session || !session.user) {
      throw new Error('Not logged in');
    }

    const user = await prisma.user.findFirst({
      where: {
        id: session.user.id
      }
    });

    if (!user) {
      throw new Error('Not logged in');
    }

    return {
      userId: user.id,
      name: user.name,
      image: user.image,
      balance: Number(user.balance),
    };
  } catch {
    redirect('/');
  }
};

async function Profile() {
  const user = await getUser();

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="pt-3">
        <ProfilePage {...user} />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
