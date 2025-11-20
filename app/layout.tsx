import type { Metadata } from 'next';

import Header from '@/container/Header';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Markup Kiheum — Frontend UI Developer',
  description: '꾸준히 발전하는 UI 개발자, Kiheum Hwang의 포트폴리오',
  keywords: [
    'Frontend',
    'Frontend UI',
    'UI Developer',
    'React',
    'Next.js',
    'Portfolio',
  ],
  authors: [{ name: 'Kiheum Hwang' }],
  metadataBase: new URL('https://markup-kiheum.vercel.app'), // 배포 도메인
  openGraph: {
    title: 'Markup Kiheum — Frontend UI Developer',
    description: '꾸준히 발전하는 UI 개발자, Kiheum Hwang의 포트폴리오',
    url: 'https://markup-kiheum.vercel.app',
    siteName: 'Markup Kiheum Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    locale: 'ko_KR',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/icon-192.png', sizes: '192x192' },
      { url: '/icon-512.png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
