import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Script from 'next/script';

import Header from '@/container/Header';
import { ThemeProvider } from '@/context/ThemeContext';

import '@/styles/globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

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
  metadataBase: new URL('https://markup-kiheum.vercel.app'),
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
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = stored || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  // 오류가 나더라도 전체 앱은 정상적으로 작동해야 하므로 무시한다. 
                }
              })();
            `,
          }}
        />
      </head>
      <body className={notoSansKr.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
