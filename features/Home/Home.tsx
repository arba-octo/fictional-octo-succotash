import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import HomeHero from '@/features/Home/HomeHero/HomeHero';
import HomeCarousel from '@/features/Home/HomeCarousel/HomeCarousel';
import HomeInfo from '@/features/Home/HomeInfo/HomeInfo';
import HomeAbout from '@/features/Home/HomeAbout/HomeAbout';
import HomeFaq from '@/features/Home/HomeFaq/HomeFaq';

function HomePage() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main>
        <HomeHero />
        <HomeCarousel />
        <HomeInfo />
        <HomeAbout />
        <HomeFaq />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
