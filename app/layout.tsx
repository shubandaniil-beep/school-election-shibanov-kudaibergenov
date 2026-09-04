import type { Metadata } from 'next';
import { Inter, Unbounded } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['cyrillic', 'latin'] });
const unbounded = Unbounded({ variable: '--font-unbounded', subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://shibanov-kudaibergenov.shubandaniil.chatgpt.site'),
  title: 'Шибанов × Кудайбергенов',
  description: 'Кандидаты в школьный парламент. Бизнес, IT, события и ответственность.',
  openGraph: {
    title: 'Шибанов × Кудайбергенов',
    description: 'Твой голос. Наша ответственность.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Шибанов × Кудайбергенов',
    description: 'Твой голос. Наша ответственность.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body className={`${inter.variable} ${unbounded.variable}`}>{children}</body></html>;
}
