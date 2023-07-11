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
        <div className='h-[400px] lg:h-[500px] relative'>
          <img src='https://cdn02.plentymarkets.com/2brofzsczyt8/item/images/190608/full/Kindertapete-Rasch-Sterne-weiss-dunkelblau-245264-190608.jpg' />

          <div className='absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center'>
            <h1 className='text-2xl text-white lg:text-5xl font-bold max-w-3xl'>
              &quot;Background #black opacity %75, text area carousel&quot;
            </h1>
            {/* gradient bg button */}
            <button className='w-40 mt-4 bg-gradient-to-r from-[#ffffff] to-[#eeeeee] text-black px-4 py-2 rounded-md'>
              Örnek Button
            </button>
          </div>
        </div>
        <div className='h-[400px] lg:h-[500px]'>
          <img src='https://img.freepik.com/free-vector/weather-seamless-pattern-background-vector-cute-doodle-illustration-kids_53876-105731.jpg?w=2000' />
        </div>
      </Carousel>
    </section>
  );
};
export default CarouselSection;
