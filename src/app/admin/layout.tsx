'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto min-h-screen py-2 bg-gray-100'>
      <main className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <nav className='flex justify-between items-center py-6'>
          <div className='flex items-center'>
            <Link
              href='/admin'
              className='text-xl font-semibold tracking-tight'
            >
              Yönetici Paneli
            </Link>
          </div>
          <Link
            href='/admin/create'
            className='flex items-center px-2 md:px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700'
          >
            Yeni Gönderi Ekle
          </Link>
          <div className='flex items-center'>
            <div className='flex space-x-0 md:space-x-4'>
              <Link
                href='/admin'
                className='text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium '
              >
                Anasayfa
              </Link>
              <button
                className='text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                onClick={() => signOut()}
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </nav>
        {children}
      </main>
    </div>
  );
}
