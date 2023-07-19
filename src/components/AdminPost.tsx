'use client';

import { removeHtmlTags } from '@/lib/utils';
import { Post } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';

const AdminPost = ({ post }: { post: Post }) => {
  const removePostMutation = useMutation({
    mutationFn: async (id: string) =>
      axios.delete(`/api/post/remove`, { data: { id } }),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      window.location.reload();
    },
  });

  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('/api/post/get-all');
      return res.json();
    },
    initialData: post,
  });

  return (
    <tr key={data.id}>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>{post.title}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {removeHtmlTags(
            post.content!.slice(0, 30) +
              (post.content?.length! > 15 ? '...' : '')
          )}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {post.createdAt.getDate() +
            '/' +
            post.createdAt.getMonth() +
            '/' +
            post.createdAt.getFullYear()}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <Link
          href={`/admin/update/${post.id}`}
          className='text-indigo-600 hover:text-indigo-900'
        >
          Düzenle
        </Link>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <button
          onClick={() => removePostMutation.mutate(post.id)}
          className='text-indigo-600 hover:text-indigo-900'
        >
          Sil
        </button>
      </td>
    </tr>
  );
};

export default AdminPost;
