'use client';

import { Icons } from '@/lib/Icons';
import { Great_Vibes, Sen, Cutive } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

const sen = Sen({ subsets: ['latin'], weight: ['400'] });
const mali = Cutive({ subsets: ['latin'], weight: ['400'] });

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`bg-white w-full border-b-[1px] sticky z-20 top-0  ${sen.className}`}
    >
      {/* Desktop Menu */}
      <div className='flex justify-between lg:container lg:max-w-7xl mx-auto px-4 py-5 lg:pt-10'>
        <ul className='hidden lg:flex gap-5 mt-3 ml-0'>
          <Link href='/' className='group relative cursor-pointer'>
            Anasayfa
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>

          <Link href='/hakkimda' className='group relative cursor-pointer'>
            Hakkımda
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
          <Link href='/#yazilar' className='group relative cursor-pointer'>
            Yazılar
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
        </ul>

        <div
          className='flex lg:hidden justify-center items-center w-8 rounded-lg leading-6 text-sm font-medium hover:bg-gray-100 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icons.toggle className='text-black' />
        </div>
        <Link
          href='/'
          className={`relative text-2xl sm:text-4xl xl:text-5xl font-bold  text-[#222] mt-2 lg:-mt-4 ${greatVibes.className}`}
        >
          <span className='text-2xl'>Uzm. Dr.</span> Mehmet Fatih Kınık
          <span
            className={`text-sm ${mali.className} lg:text-lg text-end lg:text-center block  text-[#444] tracking-tighter`}
          >
            Çocuk ve Ergen Ruh Sağlığı Uzmanı
          </span>
        </Link>
        <ul className='hidden lg:flex gap-5 mt-3 ml-0'>
          <Link href='#' className='group relative cursor-pointer'>
            Duyurular
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
          <Link href='#' className='group relative cursor-pointer'>
            Videolar
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
          <Link href='/iletisim' className='group relative cursor-pointer'>
            İletişim
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? 'h-[calc(100vh-70px)]' : 'h-0'
        } bg-white border-b-[1px] overflow-hidden w-full absolute z-[999] duration-300`}
      >
        <ul className='flex h-full flex-col items-center justify-start gap-16 mt-4 '>
          <Link href='/' className='group relative cursor-pointer text-3xl'>
            Anasayfa
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
          <Link
            href='/hakkimda'
            className='group relative cursor-pointer text-3xl'
          >
            Hakkımda
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
          <Link
            href='/#yazilar'
            className='group relative cursor-pointer text-3xl'
          >
            Yazılar
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
          <Link href='#' className='group relative cursor-pointer text-3xl'>
            Duyurular
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
          <Link href='#' className='group relative cursor-pointer text-3xl'>
            Videolar
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
          <Link
            href='/iletisim'
            className='group relative cursor-pointer text-3xl'
          >
            İletişim
            <div
              className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
            ease-in-out'
            ></div>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
