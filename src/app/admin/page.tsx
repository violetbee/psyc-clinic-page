import { getAuthSession } from '@/lib/auth';
import { useRouter } from 'next/router';

export default async function Admin() {
  const session = await getAuthSession();

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-gray-100'>
      <h1 className='text-5xl font-bold text-gray-800'>Admin Paneli</h1>
    </div>
  );
}
