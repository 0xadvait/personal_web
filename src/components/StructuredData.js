import { siteDescription, siteName, siteUrl, socialLinks } from '@/lib/site';

const data = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      jobTitle: 'Chief Strategy Officer',
      worksFor: {
        '@type': 'Organization',
        name: 'OpenGradient',
        url: 'https://opengradient.ai',
      },
      homeLocation: {
        '@type': 'Place',
        name: 'London',
      },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'London Business School' },
        { '@type': 'CollegeOrUniversity', name: 'BITS Pilani' },
      ],
      knowsAbout: [
        'Early technical markets',
        'Agent economies',
        'Technical film',
        'AI research',
        'Crypto market structure',
        'Product strategy',
      ],
      sameAs: Object.values(socialLinks),
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: 'en-GB',
      publisher: { '@id': `${siteUrl}/#person` },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
