import '@/app/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from '../components/Provider';
import Script from 'next/script';

const GTM_ID = 'GTM-5Q5J2JMP';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uzm. Dr. Mehmet Fatih Kınık | Çocuk ve Ergen Psikiyatristi',
  description:
    'Çocuk ve Ergen Psikiyatristi Uzm. Dr. Mehmet Fatih Kınık, Ordu Çocuk ve Genç Psikiyatristi, Giresun Çocuk ve Genç Psikiyatristi',
  keywords: [
    'Çocuk Psikiyatristi',
    'Ergen Psikiyatristi',
    'Çocuk ve Ergen Psikiyatristi',
    'Çocuk Psikiyatristi Ordu',
    'Ergen Psikiyatristi Ordu',
    'Çocuk ve Ergen Psikiyatristi Ordu',
    'Ordu Çocuk Psikiyatristi',
    'Ordu Ergen Psikiyatristi',
    'Ordu Çocuk ve Ergen Psikiyatristi',
    'Çocuk Psikiyatristi Giresun',
    'Ergen Psikiyatristi Giresun',
    'Çocuk ve Ergen Psikiyatristi Giresun',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='tr'>
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Provider>{children}</Provider>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
