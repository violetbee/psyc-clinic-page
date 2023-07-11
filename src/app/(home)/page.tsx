import CarouselSection from '../components/CarouselSection';
import Header from '../components/Header';
import { Icons } from '@/libs/Icons';

export default function Home() {
  return (
    <main className='mx-auto w-full min-h-screen'>
      <Header />
      <CarouselSection />
      <section className='lg:container lg:max-w-7xl mx-auto mt-5'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='h-40 w-full flex justify-end border-[1px] relative overflow-hidden'>
            <div className='w-8/12 flex justify-center gap-2 flex-col'>
              <h1 className='font-semibold text-2xl'>Örnek Başlık</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, at dolore earum.
              </p>
            </div>
            {/* brain svg */}
            <Icons.brain className='absolute opacity-40 -bottom-10 -left-20 w-40 h-40' />
          </div>
          <div className='h-40 w-full flex justify-end border-[1px] relative overflow-hidden'>
            <div className='w-8/12 flex justify-center gap-2 flex-col'>
              <h1 className='font-semibold text-2xl'>Örnek Başlık</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, at dolore earum.
              </p>
            </div>
            {/* brain svg */}
            <Icons.doctor className='absolute opacity-40 -bottom-10 -left-10 w-40 h-40' />
          </div>
          <div className='h-40 w-full flex justify-end border-[1px] relative overflow-hidden'>
            <div className='w-8/12 flex justify-center gap-2 flex-col'>
              <h1 className='font-semibold text-2xl'>Örnek Başlık</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, at dolore earum.
              </p>
            </div>
            {/* brain svg */}
            <Icons.monitor className='absolute opacity-40 -bottom-10 -left-10 w-40 h-40' />
          </div>
        </div>
      </section>
      <section className='lg:container lg:max-w-7xl mx-auto mt-5'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
          <div className='col-span-2 space-y-2'>
            <h1 className='text-3xl font-bold'>Yazılar</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <div className='bg-white rounded-md shadow-md'>
                <img
                  className='w-full h-[200px] object-cover rounded-t-md'
                  src='https://cdn02.plentymarkets.com/2brofzsczyt8/item/images/190608/full/Kindertapete-Rasch-Sterne-weiss-dunkelblau-245264-190608.jpg'
                />
                <div className='p-5'>
                  <h1 className='text-xl font-bold'>
                    &quot;Background #black opacity %75, text area
                    carousel&quot;
                  </h1>
                  <p className='text-gray-500 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
              </div>
              <div className='bg-white rounded-md shadow-md'>
                <img
                  className='w-full h-[200px] object-cover rounded-t-md'
                  src='https://cdn02.plentymarkets.com/2brofzsczyt8/item/images/190608/full/Kindertapete-Rasch-Sterne-weiss-dunkelblau-245264-190608.jpg'
                />
                <div className='p-5'>
                  <h1 className='text-xl font-bold'>
                    &quot;Background #black opacity %75, text area
                    carousel&quot;
                  </h1>
                  <p className='text-gray-500 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
