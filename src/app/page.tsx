import CarouselSection from '@/components/CarouselSection';
import Header from '@/components/Header';
import { Icons } from '@/lib/Icons';
import { Pacifico } from 'next/font/google';
import { getAuthSession } from '@/lib/auth';
import HomePost from '../components/HomePost';
import prisma from '@/lib/db';
import type { Post } from '@prisma/client';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] });

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <main className='mx-auto w-full min-h-screen'>
      <Header />
      <CarouselSection />
      <div
        className={`bg-black text-white h-32 flex items-center justify-center text-3xl lg:text-5xl ${pacifico.className}`}
      >
        Hizmetlerimiz
      </div>
      <section className='lg:container px-4 xl:px-0 lg:max-w-7xl mx-auto my-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='group relative hover:scale-110 mx-auto w-full overflow-hidden bg-gray-800 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-black hover:via-gray-300 hover:to-black'>
            <div className='group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible'></div>
            <div className='relative bg-white p-6 h-full'>
              <div className='space-y-4 flex flex-col items-center justify-center h-full'>
                <img
                  src='https://www.svgrepo.com/show/310892/group.svg'
                  alt=''
                  className='w-32 h-32 mx-auto'
                />
                <p className='text-lg font-semibold text-slate-800'>
                  Online Terapi ve Danışmanlık
                </p>
                <p className='font-md text-sm text-slate-500 text-justify'>
                  Psikolojik danışmanlık ve psikoterapi hizmetlerimizi online
                  olarak da vermekteyiz. Online terapi ve danışmanlık
                  hizmetlerimiz, yüz yüze görüşme yapamayacak durumda olan
                  kişiler için uygundur.
                </p>
              </div>
            </div>
          </div>
          <div className='group hover:scale-110 relative mx-auto w-full overflow-hidden bg-gray-800 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-black hover:via-gray-300 hover:to-black'>
            <div className='group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible'></div>
            <div className='relative bg-white p-6 h-full'>
              <div className='space-y-4 flex flex-col items-center justify-center h-full'>
                <img
                  className='w-32 h-32 mx-auto'
                  src='https://www.svgrepo.com/show/446364/tick.svg'
                  alt=''
                />
                <p className='text-lg font-semibold text-slate-800'>
                  Uzmanlık Alanlarımız
                </p>
                <p className='font-md text-sm text-slate-500 text-justify'>
                  {`Dikkat Eksikliği Hiperaktivite Bozukluğu, Özgül Öğrenme
                  Bozukluğu, Otizm Spektrum Bozukluğu, Yıkıcı Duygu Durumu
                  Düzenleyememe Bozukluğu, Karşıt Olma Karşı Gelme Bozukluğu,
                  Davranım Bozukluğu, Uyku Bozuklukları, Tik Bozuklukları, Panik
                  Bozukluk, Trikotillomani, Travma Sonrası Stres Bozukluğu,
                  Yaygın Anksiyete Bozukluğu, Ayrılık Kaygısı Bozukluğu, Obsesif
                  Kompulsif Bozukluk, Toplumsal Kaygı Bozukluğu, Şizofreni,
                  Enürezis ve Enkoprezis, Çocukluk Çağı Depresyonu, Bipolar
                  Bozukluk, Kardeş Kıskançlığı.`}
                </p>
              </div>
            </div>
          </div>
          <div className='group hover:scale-110 relative mx-auto w-full overflow-hidden bg-gray-800 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-black hover:via-gray-300 hover:to-black'>
            <div className='group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible'></div>
            <div className='relative bg-white p-6 h-full'>
              <div className='space-y-4 flex flex-col items-center justify-center h-full'>
                <img
                  src='https://www.svgrepo.com/show/126095/medical-heart-scan.svg'
                  className='w-32 h-32 mx-auto'
                  alt=''
                />
                <p className='text-lg font-semibold text-slate-800'>
                  Terapi ve Tedavi Yöntemlerimiz
                </p>
                <p className='font-md text-sm text-slate-500 text-justify'>
                  Bilişsel Davranışçı Terapi, Şema Terapi, Duygusal Odaklı
                  Terapi, Çözüm Odaklı Terapi, Kabul ve Kararlılık Terapisi,
                  EMDR ve EFT gibi yöntemlerle çalışmaktayız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        id='pdf-galeri'
        className='lg:container lg:max-w-7xl mx-auto mt-5 px-4 xl:px-0'
      >
        <div className='w-full flex items-center mt-4 gap-6'>
          <h1 className='text-3xl font-bold'>Sertifikalarım</h1>

          <span className='h-[1px] w-full bg-black/10' />
        </div>
        <div className='grid grid-cols-1 mt-6 lg:grid-cols-3 gap-5'>
         
        </div>
      </section> */}
      <section
        id='yazilar'
        className='lg:container lg:max-w-7xl mx-auto mt-5 px-4 xl:px-0'
      >
        <div className='w-full flex items-center mt-4 gap-6'>
          <h1 className='text-3xl font-bold'>Yazılar</h1>
          <span className='h-[1px] w-full bg-black/10' />
        </div>
        <div className='grid grid-cols-1 mt-6 lg:grid-cols-3 gap-5'>
          {posts?.map((post: Post) => (
            <HomePost key={post.id} post={post} />
          ))}
        </div>
      </section>

      <footer className='h-40 w-full bg-[#333] mt-20'>
        <div className='lg:container lg:max-w-7xl mx-auto px-4 lg:px-0 h-full flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            {/* <Icons.logo className='w-10 h-10' /> */}
            <div className='flex flex-col'>
              <h1 className='text-white font-semibold text-xl'>
                Uzm. Dr. Mehmet Fatih Kınık
              </h1>
              <p className='text-gray-400 text-sm'>
                Tüm hakları saklıdır. © 2023
              </p>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <Icons.facebook className='w-10 h-10' />
            <Icons.twitter className='w-10 h-10' />
            <Icons.instagram className='w-10 h-10' />
          </div>
        </div>
      </footer>
    </main>
  );
}
