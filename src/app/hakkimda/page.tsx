import Quill from '@/components/Quill';
import prisma from '@/lib/db';

export default async function Page() {
  const user = await prisma.user.findFirst({
    where: {
      email: 'fatih@drmehmetfatihkinik.com',
    },
  });

  return (
    <div className='container max-w-7xl my-10 mx-auto'>
      <div className='w-full h-full rounded-md bg-white shadow-md p-5'>
        <h1 className='font-bold text-3xl tracking-wide mb-5'>Hakkımda</h1>
        <Quill content={user?.aboutMe as string} />
      </div>
    </div>
  );
}
