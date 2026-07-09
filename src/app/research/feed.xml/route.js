import { siteName, siteUrl } from '@/lib/site';
import { articles, reports, researchHub } from '@/lib/research';

export const dynamic = 'force-static';

function escapeXml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const items = [...articles, ...reports]
    .map((a) => {
      const url = `${siteUrl}/research/${a.slug}`;
      return `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(a.description)}</description>
      <pubDate>${new Date(`${a.datePublished}T09:00:00Z`).toUTCString()}</pubDate>
      <author>advait@advait.tech (${escapeXml(siteName)})</author>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${siteName} | Research`)}</title>
    <link>${siteUrl}/research</link>
    <atom:link href="${siteUrl}/research/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(researchHub.description)}</description>
    <language>en-gb</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
