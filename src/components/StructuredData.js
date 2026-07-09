import { siteDescription, siteName, siteUrl, socialLinks } from '@/lib/site';

const data = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: siteName,
      alternateName: ['Advait', 'Advait Jayant', '0xadvait'],
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
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: `${siteName} | Research, Product, and Film`,
      isPartOf: { '@id': `${siteUrl}/#website` },
      mainEntity: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'ScholarlyArticle',
      '@id': 'https://dx.doi.org/10.2139/ssrn.4610162#paper',
      headline: 'The Economics of Wash Trading',
      author: { '@id': `${siteUrl}/#person` },
      datePublished: '2023-10-22',
      url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610162',
      sameAs: [
        'https://ssrn.com/abstract=4610162',
        'https://dx.doi.org/10.2139/ssrn.4610162',
        'https://www.researchgate.net/publication/375780286_The_Economics_of_Wash_Trading',
      ],
      mainEntityOfPage: `${siteUrl}/research/the-economics-of-wash-trading`,
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
