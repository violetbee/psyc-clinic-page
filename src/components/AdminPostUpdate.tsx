'use client';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import { Post } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AdminPostUpdate({ post }: { post: Post }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState<string>(post.content as string);
  const [error, setError] = useState('');
  const router = useRouter();

  const postMutation = useMutation({
    mutationFn: async (data: {
      id: string;
      title: string;
      content: string;
    }) => {
      await axios.patch('/api/post/update', data);
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
          id: post.id,
          title,
          content,
        });
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

        <ReactQuill
          theme='snow'
          style={{ height: '250px' }}
          value={content}
          onChange={setContent}
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
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-14'
          type='submit'
        >
          Gönderiyi Güncelle
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
              <span className='block sm:inline'> güncelleniyor</span>
            </div>
          )}
          {postMutation.isSuccess && (
            <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'>
              <strong className='font-bold'>Gönderi</strong>
              <span className='block sm:inline'> güncellendi</span>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
