import Header from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'İletişim Sayfası - Çocuk ve Ergen Psikiyatristi Uzm. Dr. Mehmet Fatih Kınık, Ordu, Giresun, Ergen ve Çocuk Psikiyatristi, Genç ve Çocuk Psikiyatristi, Ordu Çocuk ve Genç Psikiyatristi, Giresun Çocuk ve Genç Psikiyatristi',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='mx-auto w-full min-h-screen'>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
