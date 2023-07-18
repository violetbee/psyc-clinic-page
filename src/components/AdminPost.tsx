'use client';

import { removeHtmlTags } from '@/lib/utils';
import { Post } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const AdminPost = ({ post }: { post: Post }) => {
  const removePostMutation = useMutation({
    mutationFn: async (id: string) =>
      axios.delete(`/api/post/remove`, { data: { id } }),
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <tr key={post.id}>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>{post.title}</div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {removeHtmlTags(
            post.content!.slice(0, 15) +
              (post.content?.length! > 15 ? '...' : '')
          )}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-900'>
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <button className='text-indigo-600 hover:text-indigo-900'>
          Düzenle
        </button>
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
