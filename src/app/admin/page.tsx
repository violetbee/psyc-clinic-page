'use client';

import { removeHtmlTags } from '@/lib/utils';
import { Post } from '@prisma/client';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function AdminPage() {
  const posts = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/post/get-all').then((res) => res.json()),
  });

  console.log(posts);

  const removePostMutation = useMutation({
    mutationFn: async (id: string) =>
      axios.delete(`/api/post/remove`, { data: { id } }),
    onSuccess: () => {
      posts.refetch();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    BAŞLIK
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    İÇERİK
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    TARİH
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Düzenle</span>
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Sil</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {posts?.data?.map((post: Post) => (
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
                ))}
              </tbody>
            </table>
            <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
              <div className='flex-1 flex justify-between sm:hidden'>
                <a
                  href='#'
                  className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                >
                  Önceki
                </a>
                <a
                  href='#'
                  className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                >
                  Sonraki
                </a>
              </div>
              <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
                <div>
                  <p className='text-sm text-gray-700'>
                    Sayfa <span className='font-medium'>1</span> -{' '}
                    <span className='font-medium'>10</span> /{' '}
                    <span className='font-medium'>100</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
