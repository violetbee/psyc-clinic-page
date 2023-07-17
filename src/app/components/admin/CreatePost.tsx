'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const postMutation = useMutation({
    mutationFn: async (data: { title: string; content: string }) => {
      await axios.post('/api/post/create', data);
    },
    onSuccess: () => {
      setTitle('');
      setContent('');
      setError('');
      setTimeout(() => {
        router.push('/admin');
      }, 3000);
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data);
      } else {
        setError(error.message);
      }
    },
  });

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='w-full max-w-md'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postMutation.mutate({ title, content });
          }}
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='title'
            >
              Başlık
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='title'
              type='text'
              placeholder='Başlık'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label
              className='block text-gray-700 text-sm font-bold mb-2 mt-4'
              htmlFor='content'
            >
              İçerik
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64'
              id='content'
              placeholder='İçerik'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
              type='submit'
            >
              Gönder
            </button>

            <div className='mt-4'>
              {error && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'>
                  <strong className='font-bold'>Hata!</strong>
                  <span className='block sm:inline'>{error}</span>
                </div>
              )}
              {postMutation.isPending && (
                <div className='bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative'>
                  <strong className='font-bold'>Gönderi</strong>
                  <span className='block sm:inline'> gönderiliyor</span>
                </div>
              )}
              {postMutation.isSuccess && (
                <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'>
                  <strong className='font-bold'>Gönderi</strong>
                  <span className='block sm:inline'> gönderildi</span>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
