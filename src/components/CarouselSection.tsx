'use client';

import { Carousel } from 'react-responsive-carousel';
import { useRef } from 'react';
import Image from 'next/image';

export const CarouselSection = () => {
  const carouselRef = useRef<HTMLElement>(null);

  return (
    <section
      onMouseDown={() => {
        carouselRef.current?.classList.add('cursor-grabbing');
      }}
      onMouseUp={() => {
        carouselRef.current?.classList.remove('cursor-grabbing');
      }}
      ref={carouselRef}
      className='cursor-grab'
    >
      <Carousel
        dynamicHeight={false}
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <Image
          width={2000}
          height={3000}
          className='h-[400px] lg:h-[780px] 3xl:h-[1000px] object-cover object-center'
          src='/images/carousel-1.jpg'
          alt='Uzm. Dr. Mehmet Fatih Kınık'
        />
        <Image
          width={2000}
          height={3000}
          className='h-[400px] lg:h-[780px] 3xl:h-[1000px] object-cover object-center'
          src='/images/carousel-1.jpg'
          alt='Uzm. Dr. Mehmet Fatih Kınık'
        />
      </Carousel>
    </section>
  );
};
export default CarouselSection;
