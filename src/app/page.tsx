import CarouselSection from './components/CarouselSection';
import Header from './components/Header';

export default function Home() {
  return (
    <main className='mx-auto w-full min-h-screen'>
      <Header />
      <CarouselSection />
    </main>
  );
}
