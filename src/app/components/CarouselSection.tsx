'use client';

import { Carousel } from 'react-responsive-carousel';
import { useRef } from 'react';

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
      className='mt-4 cursor-grab'
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
        <div className='h-[200px] lg:h-[500px]'>
          <img src='https://cdn02.plentymarkets.com/2brofzsczyt8/item/images/190608/full/Kindertapete-Rasch-Sterne-weiss-dunkelblau-245264-190608.jpg' />
        </div>
        <div className='h-[200px] lg:h-[500px]'>
          <img src='https://img.freepik.com/free-vector/weather-seamless-pattern-background-vector-cute-doodle-illustration-kids_53876-105731.jpg?w=2000' />
        </div>
      </Carousel>
    </section>
  );
};
export default CarouselSection;
