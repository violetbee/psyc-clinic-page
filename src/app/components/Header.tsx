'use client';

import { Icons } from '@/lib/Icons';
import { Great_Vibes, Sen } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

const sen = Sen({ subsets: ['latin'], weight: ['400'] });

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`bg-white border-b-[1px] sticky z-10 top-0  ${sen.className}`}
    >
      {/* Desktop Menu */}
      <div className='flex justify-between lg:container lg:max-w-7xl mx-auto px-4 py-5 lg:pt-10'>
        <ul className='hidden lg:flex gap-5 mt-3'>
          <li className='group relative cursor-pointer'>
            Anasayfa
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>

          <li className='group relative cursor-pointer'>
            Hakkımda
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>
          <li className='group relative cursor-pointer'>
            Yazılar
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>
        </ul>

        <div className='flex lg:hidden'>
          <div className='relative flex'>
            <button
              type='button'
              className='inline-flex justify-center items-center w-full rounded-lg leading-6 text-sm font-medium text-gray-950 hover:bg-gray-100 focus:outline-none'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icons.toggle />
            </button>
          </div>
        </div>
        <Link
          href='/'
          className={`relative text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-6  mt-2 lg:-mt-2 ${greatVibes.className}`}
        >
          <span className='text-xl'>Uzm. Dr. </span>
          Mehmet Fatih Kınık
        </Link>
        <ul className='hidden lg:flex gap-5 mt-3'>
          <li className='group relative cursor-pointer'>
            Duyurular
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>
          <li className='group relative cursor-pointer'>
            Videolar
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>
          <li className='group relative cursor-pointer'>
            İletişim
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? 'h-[calc(100vh-70px)]' : 'h-0'
        } bg-white border-b-[1px] overflow-hidden w-full absolute z-[999] duration-300`}
      >
        <ul className='flex h-full flex-col items-center justify-evenly '>
          <li className='group relative cursor-pointer text-3xl'>
            Anasayfa
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>
          <li className='group relative cursor-pointer text-3xl'>
            Hakkımda
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>{' '}
          <li className='group relative cursor-pointer text-3xl'>
            Yazılar
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>
          <li className='group relative cursor-pointer text-3xl'>
            Duyurular
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>
          <li className='group relative cursor-pointer text-3xl'>
            Videolar
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>
          <li className='group relative cursor-pointer text-3xl'>
            İletişim
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
