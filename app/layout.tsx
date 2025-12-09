import type { Metadata } from 'next';
import Script from 'next/script';

import Header from '@/container/Header';
import { ThemeProvider } from '@/context/ThemeContext';
import { siteMetadata } from '@/lib/constants/metaData';
import { notoSansKr } from '@/lib/constants/notoSansFont';

import '@/styles/globals.css';

export const metadata: Metadata = siteMetadata;

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
