import { siteUrl } from '@/lib/site';

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-05-12'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
