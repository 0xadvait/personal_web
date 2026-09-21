import './globals.css';
import { Figtree, IBM_Plex_Mono, Newsreader } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteDescription, siteName, siteUrl } from '@/lib/site';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  variable: '--font-figtree',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-plex-mono',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Marketing, BD, and Research`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/research/feed.xml',
    },
  },
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    'Advait',
    'Advait Jayant',
    'OpenGradient',
    'early technical markets',
    'crypto marketing',
    'AI research',
    'crypto market structure',
    'wash trading',
    'NFT markets',
    'The Economics of Wash Trading',
  ],
  openGraph: {
    title: `${siteName} | Marketing, BD, and Research`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@advait_jayant',
    title: `${siteName} | Marketing, BD, and Research`,
    description: siteDescription,
  },
  verification: {
    google: 'Pmkxad7jaIq-ZBTDDkq5UqkO30fM1R7HHtpEo2GXBEI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/images/favicon_website.png', sizes: '16x16', type: 'image/png' }],
    apple: [{ url: '/images/website_icon.png', type: 'image/png' }],
  },
};

export const viewport = {
  themeColor: '#f5f4f0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${plexMono.variable} ${newsreader.variable}`}
    >
      <body className="bg-bg text-fg font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] rounded-full bg-fg px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-bg shadow-sm"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
