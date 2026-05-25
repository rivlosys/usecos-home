import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://usecos.app'),
  title: { default: 'Free Online Tools – usecos', template: '%s | usecos' },
  description: 'Free online tools for USA & Canada. Mortgage calculators, VIN decoders, paycheck estimators, and more.',
  alternates: {
    languages: { 'en-CA': '/', 'en-US': '/' },
  },
  openGraph: { siteName: 'usecos', type: 'website' },
  twitter: { card: 'summary_large_image' },
  robots: 'index, follow',
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-strategy" strategy="beforeInteractive">
          {`try {
            const t = localStorage.getItem('usecos-theme');
            if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.setAttribute('data-theme', 'dark');
            } else {
              document.documentElement.setAttribute('data-theme', 'light');
            }
          } catch (_) {}`}
        </Script>
      </head>
      <body className={dmSans.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1VDXWTL2CJ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1VDXWTL2CJ');`}
        </Script>
      </body>
    </html>
  );
}