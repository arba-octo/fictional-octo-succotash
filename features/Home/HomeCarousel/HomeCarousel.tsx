import HomeCarouselProvider from '@/features/Home/HomeCarousel/HomeCarouselProvider';
import HomeCarouselSliders from '@/features/Home/HomeCarousel/HomeCarouselSliders';

function HomeCarousel() {
  return (
    <HomeCarouselProvider>
      <section className="container mx-auto">
        <div className="py-10 xl:py-15 px-4">
          <h3 className="text-2xl font-bold">Живые эмоции в действии</h3>
          <p className="text-sm text-base-content/60 mb-3">
            Фото оживает с&nbsp;помощью мощной AI-модели, которая умеет передавать настоящие эмоции.
          </p>
          <HomeCarouselSliders />
        </div>
      </section>
    </HomeCarouselProvider>
  );
}

export default HomeCarousel;
