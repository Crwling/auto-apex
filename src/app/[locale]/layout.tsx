import type { Metadata } from 'next';
import './globals.css';
import { Urbanist, Montserrat, Manrope } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: 'AutoApex',
  description: 'Auto repair and maintenance services',
  icons: {
    icon: '/favicon.ico',  // favicon for browser tab
    // apple: '/apple-touch-icon.png',  // iOS icon
  },
  openGraph: {
    title: 'AutoApex',
    description: 'Auto repair and maintenance services',
    url: 'https://mywebsite.com',
    siteName: 'AutoApex',
    locale: 'en_US',
    type: 'website',
  },
};

const urbanist = Urbanist({
  weight: '600',   // Semibold
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['500', '600', '400', '300', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html
      lang={locale}
      className={`${urbanist.variable} ${montserrat.variable} ${manrope.variable}`}
    >
     <body>
        <NextIntlClientProvider
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
