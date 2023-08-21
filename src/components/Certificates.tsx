'use client';
import { Carousel } from 'react-responsive-carousel';
import { useRef } from 'react';
import Image from 'next/image';

export default function Certificates() {
  const carouselRef = useRef<HTMLElement>(null);

  return (
    <section
      id='pdf-galeri'
      className='lg:container lg:max-w-7xl mx-auto mt-5 px-4 xl:px-0'
    >
      <div className='w-full flex items-center mt-4 gap-6'>
        <p className='text-xl md:text-3xl font-bold'>
          Sertifikalarım & Katıldığım Kongreler
        </p>
        <span className='h-[1px] flex-1 bg-black/10' />
      </div>
      <div
        onMouseDown={() => {
          carouselRef.current?.classList.add('cursor-grabbing');
        }}
        onMouseUp={() => {
          carouselRef.current?.classList.remove('cursor-grabbing');
        }}
        ref={carouselRef as any}
        className='cursor-grab pt-5'
      >
        <Carousel
          dynamicHeight={false}
          emulateTouch={true}
          showStatus={false}
          showThumbs={true}
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          renderThumbs={() => {
            return Array.from({ length: 21 }).map((image, idx) => (
              <Image
                key={idx}
                width={200}
                height={200}
                className='h-20 w-20 object-cover object-center'
                src={'/images/certificates/' + (idx + 1) + '.jpg'}
                alt='Uzm. Dr. Mehmet Fatih Kınık'
              />
            ));
          }}
        >
          {Array.from({ length: 21 }).map((image, idx) => (
            <Image
              key={idx}
              width={800}
              height={900}
              className='h-[400px] xl:h-[500px] 3xl:h-[600px] object-contain object-center'
              src={'/images/certificates/' + (idx + 1) + '.jpg'}
              alt='Sertifikalarım'
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
