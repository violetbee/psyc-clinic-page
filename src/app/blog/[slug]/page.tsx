import Quill from '@/components/Quill';
import prisma from '@/lib/db';
import { removeHtmlTags } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const post = await prisma.post.findFirst({
    where: {
      slug,
    },
  });
  return {
    title: post?.title + ' - Blog',
    description:
      removeHtmlTags(post?.content?.slice(0, 50) as string) +
      (post?.content?.length! > 50 ? '...' : ''),
  };
}

export default async function Page({ params }: Props) {
  const post = await prisma.post.findFirst({
    where: {
      slug: params.slug,
    },
  });

  return (
    <div className='container max-w-7xl my-10 mx-auto'>
      <div className='w-full h-full rounded-md bg-white shadow-md'>
        <div className='relative'>
          <Image
            src={post?.banner || '/images/kinder.jpg'}
            alt='Post Banner'
            className='w-full h-60 object-cover rounded-md blur-[1px]'
            width={500}
            height={500}
            draggable={false}
          />
          <div className='absolute bottom-0 left-0 p-5'>
            <h1 className='text-3xl font-bold drop-shadow-sm p-2 bg-[#222] text-white'>
              {post?.title}
            </h1>
            <p className='text-gray-800 text-sm'>
              {new Date(post?.createdAt as Date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className='p-5 space-y-3'>
          <Quill content={post?.content as string} />
        </div>
      </div>
    </div>
  );
}
