import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const siteUrl = 'https://advaitjayant.com';
const siteDescription =
  'Advait Jayant is a technical founder and Chief Strategy Officer at OpenGradient, working on verifiable AI inference, persistent agent memory, and crypto market structure.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Advait Jayant',
  title: {
    default: 'Advait Jayant',
    template: '%s — Advait Jayant',
  },
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Advait Jayant', url: siteUrl }],
  creator: 'Advait Jayant',
  publisher: 'Advait Jayant',
  keywords: [
    'Advait Jayant',
    'OpenGradient',
    'verifiable inference',
    'agent memory',
    'AI infrastructure',
    'crypto market structure',
  ],
  openGraph: {
    title: 'Advait Jayant',
    description: siteDescription,
    url: '/',
    siteName: 'Advait Jayant',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@advait_jayant',
    title: 'Advait Jayant',
    description: siteDescription,
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
  themeColor: '#faf8f1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-bg text-fg font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only fixed left-4 top-4 z-[100] rounded-[3px] border border-accent bg-surface px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-accent shadow-sm"
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
