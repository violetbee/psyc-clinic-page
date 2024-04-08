/* eslint-disable @next/next/no-img-element */
import { useSlider } from '@/hooks/useSlider';
import { useEffect, useRef } from 'react';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';

interface Props {
  title: string;
  items: [];
}

const SliderBottomDot = ({ title, items }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const { currentSlide, setSelectedSlide } = useSlider(items.length, false);
  console.log(items.length, currentSlide);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentSlide === items.length ? 0 : 220 * currentSlide,
        behavior: 'smooth',
      });
    }
  }, [currentSlide, items.length]);

  return (
    <div className='relative h-full w-full lg:mb-4 lg:w-[48%]'>
      <h1 className='relative flex justify-center text-xl text-white after:absolute after:-bottom-1 after:left-1/2 after:h-[1px] after:w-28 after:-translate-x-1/2 after:bg-slate-200'>
        {title}
      </h1>
      <div
        ref={sliderRef}
        className='aspect-h-9 aspect-w-16 relative mt-5 flex gap-6 overflow-x-hidden scroll-smooth py-2'
      >
        {/* TODO: Items will be added here */}
        {items.map((_, idx) => (
          <div key={idx} className={`rounded-x relative w-[48%] shrink-0`}>
            <div className='block rounded-t-lg bg-slate-800 p-2 text-sm font-semibold text-white'>
              Tournament {idx + 1}
            </div>
            <img
              src={
                idx % 2 == 0
                  ? 'https://circuitotormenta.com/img/home/twitch.jpg'
                  : 'https://circuitotormenta.com/img/home/discord.jpg'
              }
              alt=''
              className='max-h-96 w-full object-cover'
            ></img>

            <div className='absolute bottom-2 flex w-full items-center justify-between px-2'>
              <h1 className='rounded-lg bg-slate-800 px-2 py-1 text-lg font-semibold text-white'>
                Game Name {idx + 1}
              </h1>
              <span
                className={`${
                  idx % 2 === 0 ? 'bg-red-600' : 'bg-green-600'
                } h-4 w-4 animate-pulse rounded-full`}
              ></span>
            </div>
          </div>
        ))}
      </div>

      {/* button to next slide start */}
      <div className='absolute right-1 top-[calc(50%+40px)] -translate-y-1/2 transform'>
        <button
          onClick={() => setSelectedSlide(currentSlide + 1)}
          className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-800'
        >
          <BsFillArrowRightCircleFill className='text-white' size={24} />
        </button>
      </div>
      {/* button to next slide end */}

      {/* button to prev slide start */}
      <div className='absolute left-1 top-[calc(50%+40px)] -translate-y-1/2 transform'>
        <button
          onClick={() => setSelectedSlide(currentSlide - 1)}
          className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-800'
        >
          <BsFillArrowLeftCircleFill className='text-white' size={24} />
        </button>
      </div>
      {/* button to prev slide end */}
    </div>
  );
};

export default SliderBottomDot;
