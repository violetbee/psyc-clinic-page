'use client';

import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { User } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import type ReactQuill from 'react-quill';
const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;

export default function HakkimdaUpdate({ user }: { user: User }) {
  const [aboutMe, setAboutMe] = useState<string>(user.aboutMe as string);
  const [error, setError] = useState('');

  const postMutation = useMutation({
    mutationFn: async (data: { aboutMe: string }) => {
      await axios.patch('/api/user/hakkimda', data);
    },
    onSuccess: () => {
      setTimeout(() => {
        window.location.replace('/admin');
      }, 2000);
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        postMutation.mutate({
          aboutMe,
        });
      }}
      className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
    >
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2 mt-4'
          htmlFor='content'
        >
          Hakkımda Yazısı
        </label>

        <QuillNoSSRWrapper
          theme='snow'
          style={{ height: '250px' }}
          value={aboutMe}
          onChange={setAboutMe}
          modules={{
            toolbar: [
              [{ header: [false, 3, 2, 1] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
              ],
              ['link'],
              ['clean'],
            ],
          }}
        />

        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-20'
          type='submit'
        >
          Hakkımdayı Güncelle
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
              <strong className='font-bold'>Hakkımda</strong>
              <span className='block sm:inline'> güncelleniyor</span>
            </div>
          )}
          {postMutation.isSuccess && (
            <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'>
              <strong className='font-bold'>Hakkımda</strong>
              <span className='block sm:inline'> güncellendi</span>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
