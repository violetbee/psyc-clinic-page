import '@/app/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from '../components/Provider';
import Script from 'next/script';

const GTM_ID = 'GTM-5Q5J2JMP';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Uzm. Dr. Mehmet Fatih Kınık - Ordu Giresun Çocuk Ergen Psikiyatri Uzmanı',
  applicationName: 'Uzm. Dr. Mehmet Fatih Kınık',
  description:
    'Çocuk ve Ergen Psikiyatristi Uzm. Dr. Mehmet Fatih Kınık, Ordu Çocuk ve Genç Psikiyatristi, Giresun Çocuk ve Genç Psikiyatristi',

  keywords: [
    'Ordu psikiyatri',
    'Ordu pedagog',
    'Giresun psikiyatri',
    'Giresun pedagog',
    'Psikiyatri ordu',
    'Psikiyatri giresun',
    'Pedagog Giresun',
    'Pedagog ordu',
    'Psikoloji ordu',
    'Ordu psikoloji',
    'DEHB ordu',
    'Ordu DEHB',
    'Giresun DEHB',
    'DEHB Giresun',
    'Çocuk psikoloji bölümü',
  ],
  openGraph: {
    title:
      'Uzm. Dr. Mehmet Fatih Kınık - Ordu Giresun Çocuk Ergen Psikiyatri Uzmanı',
    description:
      'Çocuk ve Ergen Psikiyatristi Uzm. Dr. Mehmet Fatih Kınık, Ordu Çocuk ve Genç Psikiyatristi, Giresun Çocuk ve Genç Psikiyatristi',
    url: 'https://www.drmehmetfatihkinik.com',
    type: 'website',
    images: [
      {
        url: 'https://www.drmehmetfatihkinik.com/images/carousel-1.png',
        width: 1200,
        height: 800,
        alt: 'Uzm. Dr. Mehmet Fatih Kınık - Çocuk ve Ergen Psikiyatristi',
      },
    ],
  },
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
