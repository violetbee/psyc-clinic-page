import HakkimdaUpdate from '@/components/HakkimdaUpdate';
import prisma from '@/lib/db';

export default async function Page() {
  const user = await prisma.user.findFirst({
    where: {
      email: 'fatih@drmehmetfatihkinik.com',
    },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='w-full max-w-4xl'>
        <HakkimdaUpdate user={user} />
      </div>
    </div>
  );
}
