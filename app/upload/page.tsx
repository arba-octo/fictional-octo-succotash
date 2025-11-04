import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import UploadPage from '@/features/Upload/Upload';

function Upload() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main>
        <UploadPage />
      </main>
      <Footer />
    </div>
  );
}

export default Upload;
