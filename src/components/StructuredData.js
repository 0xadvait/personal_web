const siteUrl = 'https://advaitjayant.com';

const data = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Advait Jayant',
      url: siteUrl,
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
      sameAs: [
        'https://github.com/0xadvait',
        'https://www.linkedin.com/in/advait-jayant-21b465bb/',
        'https://scholar.google.com/citations?user=jG6k8swAAAAJ&hl=en',
        'https://x.com/advait_jayant',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Advait Jayant',
      description:
        'Technical founder working on verifiable AI inference, persistent agent memory, and crypto market structure.',
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
