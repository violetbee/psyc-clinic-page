import Header from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Uzm. Dr. Mehmet Fatih Kınık',
  description: 'Çocuk ve Ergen Psikiyatristi Uzm. Dr. Mehmet Fatih Kınık',
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
