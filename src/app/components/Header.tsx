import { Great_Vibes, Sen } from 'next/font/google';
import Link from 'next/link';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

const sen = Sen({ subsets: ['latin'], weight: ['400'] });

export const Header = () => {
  return (
    <header
      className={`flex justify-between lg:container lg:max-w-7xl mx-auto px-4 py-5 lg:mt-5 ${sen.className}`}
    >
      <ul className='hidden lg:flex gap-5 mt-3'>
        {/* create hover over underline transition */}
        <li className='group relative cursor-pointer'>
          Anasayfa
          {/* hover over underline transition */}
          <div
            className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
        ease-in-out'
          ></div>
        </li>

        <li className='group relative cursor-pointer'>
          Hakkımda
          {/* hover over underline transition */}
          <div
            className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
        ease-in-out'
          ></div>
        </li>
        <li className='group relative cursor-pointer'>
          Yazılar
          {/* hover over underline transition */}
          <div
            className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
        ease-in-out'
          ></div>
        </li>
      </ul>
      {/* mobile hamburger menu hover over animated */}

      <div className='flex lg:hidden'>
        <div className='relative flex'>
          <button
            type='button'
            className='inline-flex justify-center items-center w-full rounded-lg leading-6 text-sm font-medium text-gray-950 hover:bg-gray-100 focus:outline-none'
            id='options-menu'
            aria-haspopup='true'
            aria-expanded='true'
          >
            <svg
              className='h-7 w-7'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>
      <Link
        href='/'
        className={`relative text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-6 ml-20 mt-2 lg:-mt-2 ${greatVibes.className}`}
      >
        <span className='text-xl'>Uzm. Dr. </span>
        Mehmet Fatih Kınık
      </Link>
      <ul className='hidden lg:flex gap-5 mt-3'>
        {/* create hover over underline transition */}
        <li className='group relative cursor-pointer'>
          Duyurular
          {/* hover over underline transition */}
          <div
            className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
        ease-in-out'
          ></div>
        </li>
        <li className='group relative cursor-pointer'>
          Videolar
          {/* hover over underline transition */}
          <div
            className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
        ease-in-out'
          ></div>
        </li>
        <li className='group relative cursor-pointer'>
          İletişim
          {/* hover over underline transition */}
          <div
            className='absolute w-full h-[2px] bg-gray-950 -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-75 transition duration-300
        ease-in-out'
          ></div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
