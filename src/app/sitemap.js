import { siteUrl } from '@/lib/site';
import { articles, reports } from '@/lib/research';

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/research`,
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...articles.map((a) => ({
      url: `${siteUrl}/research/${a.slug}`,
      lastModified: new Date(a.dateModified),
      changeFrequency: 'monthly',
      priority: a.slug === 'the-economics-of-wash-trading' ? 0.9 : 0.8,
    })),
    ...reports.map((r) => ({
      url: `${siteUrl}/research/${r.slug}`,
      lastModified: new Date(r.dateModified),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
