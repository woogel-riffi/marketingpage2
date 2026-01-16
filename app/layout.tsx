import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Pfeil & Bogen - Bogenschießen in Rifferswil',
    template: '%s | Pfeil & Bogen',
  },
  description:
    'Bogenschießen in Rifferswil. Pfeil & Bogen bietet Training und Gemeinschaft für Bogensportbegeisterte im Bezirk Affoltern.',
  metadataBase: new URL('https://www.pfeil-bogen.ch'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
