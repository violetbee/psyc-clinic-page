import '@/app/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from '../components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uzm. Dr. Mehmet Fatih Kınık | Çocuk ve Ergen Psikiyatristi',
  description: 'Çocuk ve Ergen Psikiyatristi Uzm. Dr. Mehmet Fatih Kınık',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
