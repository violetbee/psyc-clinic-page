import AdminPostUpdate from '@/components/AdminPostUpdate';
import prisma from '@/lib/db';

// React Rich Text Editor (Quill)

export default async function UpdatePost({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='w-full max-w-4xl'>
        <AdminPostUpdate post={post} />
      </div>
    </div>
  );
}
