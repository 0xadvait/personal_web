import Link from 'next/link';
import Footer from '@/components/Footer';
import { ResearchHeader, CiteBlock, AuthorCard } from '@/components/research/ArticleShell';
import {
  articles,
  paper,
  reports,
  researchHub,
  scholarlyArticleNode,
  publications,
  publicationNodes,
} from '@/lib/research';
import { siteName, siteUrl, socialLinks } from '@/lib/site';

export const metadata = {
  title: researchHub.title,
  description: researchHub.description,
  alternates: { canonical: '/research' },
  keywords: [
    'Advait Jayant research',
    'Advait Jayant publications',
    'wash trading',
    'NFT markets',
    'The Economics of Wash Trading',
    'Beyond IPOs',
    'The AiFi Thesis',
    'The State of Edge AI',
  ],
  openGraph: {
    title: researchHub.title,
    description: researchHub.description,
    url: `${siteUrl}/research`,
    type: 'website',
  },
};

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: siteName,
      alternateName: ['Advait', 'Advait Jayant', 'Advait Leo Jayant', '0xadvait'],
      url: siteUrl,
      sameAs: Object.values(socialLinks),
    },
    scholarlyArticleNode,
    ...publicationNodes(),
    {
      '@type': 'CollectionPage',
      '@id': `${siteUrl}/research#page`,
      name: researchHub.title,
      description: researchHub.description,
      url: `${siteUrl}/research`,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Research', item: `${siteUrl}/research` },
      ],
    },
  ],
};

export default function ResearchPage() {
  const paperEntry = articles.find((a) => a.slug === 'the-economics-of-wash-trading');
  const explainers = articles.filter((a) => a.slug !== 'the-economics-of-wash-trading');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <ResearchHeader />
      <main id="main-content" className="mx-auto max-w-[880px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="kicker">Research</div>
        <h1 className="mt-5 text-[34px] font-normal leading-[1.08] tracking-[-0.03em] text-fg text-balance sm:text-[46px]">
          The research of Advait Jayant
        </h1>
        <p className="mt-6 max-w-[64ch] text-[17px] leading-[1.65] text-fg-muted sm:text-[17.5px]">
          {siteName} researches market microstructure, manipulation, and the economics of AI
          infrastructure. That spans two SSRN papers, on{' '}
          <Link href="/research/the-economics-of-wash-trading" className="link">
            wash trading in NFT markets
          </Link>{' '}
          and the{' '}
          <Link href="/research/beyond-ipos" className="link">
            private-to-public-to-private cycle
          </Link>
          , reports on edge AI and AI compute finance, and technical books. The full bibliography is
          below, mirrored on{' '}
          <a href={socialLinks.scholar} target="_blank" rel="noopener noreferrer" className="link">
            Google Scholar
          </a>
          .
        </p>

        <section aria-label="Featured paper" className="mt-14">
          <div className="rounded-[14px] border border-border bg-surface p-6 sm:p-8">
            <div className="kicker flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="text-fg-muted">Solo paper &middot; SSRN {paper.abstractId}</span>
              <span aria-hidden className="text-fg-faint">
                &middot;
              </span>
              <span>
                October 2023 &middot; {paper.pages} pages &middot; cited by 5
              </span>
            </div>
            <h2 className="mt-5 text-[26px] font-normal leading-[1.16] tracking-[-0.022em] text-fg sm:text-[32px]">
              <Link href={`/research/${paperEntry.slug}`} className="link">
                {paper.title}
              </Link>
            </h2>
            <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.62] text-fg-muted">
              {paperEntry.dek}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14.5px]">
              <a
                href={paper.ssrnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[10px] bg-fg px-[18px] py-[11px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000]"
              >
                Read on SSRN &#8599;
              </a>
              <Link href={`/research/${paperEntry.slug}`} className="link">
                Overview and findings &rarr;
              </Link>
              <a href={paper.doiUrl} target="_blank" rel="noopener noreferrer" className="link">
                DOI {paper.doi}
              </a>
            </div>
          </div>
        </section>

        <section aria-label="Papers and reports" className="mt-16">
          <h2 className="kicker">Papers and reports</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {reports.map((r) => (
              <li
                key={r.slug}
                className="rounded-[13px] border border-border bg-surface p-6 transition-all hover:border-fg-faint hover:bg-white"
              >
                <div className="kicker">{r.kicker}</div>
                <Link
                  href={`/research/${r.slug}`}
                  className="mt-3 block text-[18px] font-normal leading-[1.28] tracking-[-0.015em] text-fg transition-opacity hover:opacity-70 sm:text-[19px]"
                >
                  {r.title}
                </Link>
                <p className="mt-2.5 text-[14.5px] leading-[1.55] text-fg-muted">{r.dek}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Explainers" className="mt-16">
          <h2 className="kicker">Explainers and methods</h2>
          <ul className="mt-5 divide-y divide-border-soft border-y border-border">
            {explainers.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/research/${a.slug}`}
                  className="group grid gap-3 py-7 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8"
                >
                  <div className="kicker sm:pt-2">{a.kicker}</div>
                  <div>
                    <h3 className="text-[19px] font-normal leading-[1.3] tracking-[-0.015em] text-fg transition-opacity group-hover:opacity-70 sm:text-[21px]">
                      {a.title}
                    </h3>
                    <p className="mt-2.5 max-w-[66ch] text-[15.5px] leading-[1.6] text-fg-muted">
                      {a.dek}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Full publications list" className="mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[26px] font-normal leading-[1.16] tracking-[-0.022em] text-fg sm:text-[30px]">
              Publications
            </h2>
            <a
              href={socialLinks.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14.5px] text-fg-dim transition-colors hover:text-fg"
            >
              Google Scholar &#8599;
            </a>
          </div>
          <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.62] text-fg-muted">
            The complete authored body of work, newest first within each group.
          </p>

          <div className="mt-10 space-y-12">
            {publications.map((section) => (
              <div key={section.group}>
                <h3 className="kicker">{section.group}</h3>
                <ol className="mt-4 divide-y divide-border-soft border-y border-border">
                  {section.items.map((item) => (
                    <li
                      key={item.title}
                      className="grid gap-1.5 py-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6"
                    >
                      <div className="kicker sm:pt-1.5">{item.year}</div>
                      <div className="min-w-0">
                        <div className="text-[17px] leading-[1.35] tracking-[-0.01em] text-fg">
                          {item.internal ? (
                            <Link href={item.internal} className="link">
                              {item.title}
                            </Link>
                          ) : (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="link"
                            >
                              {item.title}
                            </a>
                          )}
                        </div>
                        <div className="mt-1.5 text-[14px] leading-[1.5] text-fg-dim">
                          {item.venue}
                          {item.doi ? ` \u00b7 DOI ${item.doi}` : ''}
                        </div>
                        {item.note && (
                          <p className="mt-2 max-w-[64ch] text-[14.5px] leading-[1.55] text-fg-muted">
                            {item.note}
                          </p>
                        )}
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[13.5px]">
                          {item.internal && (
                            <Link href={item.internal} className="link">
                              Read on this site &rarr;
                            </Link>
                          )}
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fg-dim transition-colors hover:text-fg"
                          >
                            {item.type === 'Book' ? 'Google Books \u2197' : 'Source \u2197'}
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <CiteBlock />
        <AuthorCard />
      </main>
      <Footer />
    </>
  );
}
