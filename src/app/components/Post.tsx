'use client';
import { Post } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { removeHtmlTags } from './admin/Posts';

export default function Posts() {
  const posts = useQuery({
    queryKey: ['posts'],
    queryFn: () => axios.get('/api/post/get-all'),
  });

  return posts.data?.data.map((post: Post) => (
    <div key={post.id} className='bg-white rounded-md shadow-md'>
      <img
        className='w-full h-[200px] object-cover rounded-t-md'
        src='https://cdn02.plentymarkets.com/2brofzsczyt8/item/images/190608/full/Kindertapete-Rasch-Sterne-weiss-dunkelblau-245264-190608.jpg'
      />
      <div className='p-5'>
        <h1 className='text-xl font-bold'>&quot;{post.title}&quot;</h1>
        <p className='text-gray-500 text-sm'>
          {removeHtmlTags(
            post.content!.slice(0, 100) +
              (post.content?.length! > 100 ? '...' : '')
          )}
        </p>
      </div>
    </div>
  ));
}
