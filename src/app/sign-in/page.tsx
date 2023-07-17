'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
// import axios from 'axios';

// inputs are email and password
export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('login process started');
    signIn('credentials', {
      email,
      password,
      callbackUrl: '/admin',
    });
    console.log('login process ended');
  };

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-gray-100'>
      <h1 className='text-5xl font-bold text-gray-800'>Admin Paneli</h1>
      <form className='flex flex-col w-80 mt-4' onSubmit={handleSubmit}>
        <label className='text-sm font-bold text-gray-500'>Email</label>
        <input
          type='email'
          className='w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:ring-0'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='mt-4 text-sm font-bold text-gray-500'>Password</label>
        <input
          type='password'
          className='w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:ring-0'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type='submit'
          className='w-full py-2 mt-4 text-sm font-bold text-white bg-blue-500 border border-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
