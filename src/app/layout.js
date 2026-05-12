import './globals.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  metadataBase: new URL('https://advaitjayant.com'),
  title: {
    default: 'Advait Jayant',
    template: '%s — Advait Jayant',
  },
  description:
    'Technical founder. Chief Strategy Officer at OpenGradient — verifiable inference, agent memory, and crypto market structure.',
  openGraph: {
    title: 'Advait Jayant',
    description:
      'Chief Strategy Officer at OpenGradient. Verifiable inference, agent memory, crypto market structure.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@advait_jayant',
    title: 'Advait Jayant',
    description:
      'Chief Strategy Officer at OpenGradient. Verifiable inference, agent memory, crypto market structure.',
  },
  icons: { icon: '/images/favicon_website.png' },
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
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
