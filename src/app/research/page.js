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
      <main id="main-content" className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
          Research
        </div>
        <h1 className="mt-4 max-w-3xl font-serif text-[32px] leading-[1.16] text-fg text-balance sm:text-[44px]">
          The research of Advait Jayant
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-[17px] leading-[1.65] text-fg-muted sm:text-[18px]">
          {siteName} researches market microstructure, manipulation, and the economics of AI
          infrastructure. That spans two SSRN papers, on{' '}
          <Link
            href="/research/the-economics-of-wash-trading"
            className="text-accent underline decoration-accent/35 underline-offset-[3px] hover:decoration-accent"
          >
            wash trading in NFT markets
          </Link>{' '}
          and the{' '}
          <Link
            href="/research/beyond-ipos"
            className="text-accent underline decoration-accent/35 underline-offset-[3px] hover:decoration-accent"
          >
            private-to-public-to-private cycle
          </Link>
          , reports on edge AI and AI compute finance, and technical books. The full bibliography is
          below, mirrored on{' '}
          <a
            href={socialLinks.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/35 underline-offset-[3px] hover:decoration-accent"
          >
            Google Scholar
          </a>
          .
        </p>

        <section aria-label="Featured paper" className="mt-12">
          <div className="rounded-[3px] border border-border bg-surface p-6 shadow-[0_1px_0_rgba(29,37,40,0.02)] sm:p-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.16em]">
              <span className="text-accent">Solo paper · SSRN {paper.abstractId}</span>
              <span aria-hidden className="hidden h-px w-7 bg-accent/30 sm:inline-block" />
              <span className="text-fg-dim">October 2023 · {paper.pages} pages · cited by 5</span>
            </div>
            <h2 className="mt-4 font-serif text-[26px] leading-[1.2] text-fg sm:text-[32px]">
              <Link
                href={`/research/${paperEntry.slug}`}
                className="transition-colors hover:text-accent"
              >
                {paper.title}
              </Link>
            </h2>
            <p className="mt-3 max-w-2xl font-serif text-[15.5px] leading-[1.6] text-fg-muted">
              {paperEntry.dek}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 font-mono text-[11px] uppercase tracking-[0.12em]">
              <a
                href={paper.ssrnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[3px] border border-accent bg-accent px-3.5 py-2 text-white transition-colors hover:bg-accent-deep"
              >
                Read on SSRN ↗
              </a>
              <Link
                href={`/research/${paperEntry.slug}`}
                className="text-accent hover:underline underline-offset-[3px]"
              >
                Overview and findings →
              </Link>
              <a
                href={paper.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-[3px]"
              >
                DOI {paper.doi}
              </a>
            </div>
          </div>
        </section>

        <section aria-label="Papers and reports" className="mt-14">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim">
            Papers and reports
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {reports.map((r) => (
              <li key={r.slug} className="rounded-[3px] border border-border bg-surface p-6">
                <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-accent-alt">
                  {r.kicker}
                </div>
                <Link
                  href={`/research/${r.slug}`}
                  className="mt-2 block font-serif text-[18px] leading-[1.28] text-fg transition-colors hover:text-accent sm:text-[20px]"
                >
                  {r.title}
                </Link>
                <p className="mt-2 font-serif text-[14px] leading-[1.5] text-fg-muted">
                  {r.dek}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Explainers" className="mt-14">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim">
            Explainers and methods
          </h2>
          <ul className="mt-4 divide-y divide-border-soft border-y border-border">
            {explainers.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/research/${a.slug}`}
                  className="group grid gap-3 py-6 sm:grid-cols-[7rem_1fr] sm:gap-6"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent-alt sm:pt-1.5">
                    {a.kicker}
                  </div>
                  <div>
                    <h3 className="font-serif text-[20px] leading-[1.28] text-fg transition-colors group-hover:text-accent sm:text-[23px]">
                      {a.title}
                    </h3>
                    <p className="mt-2 max-w-2xl font-serif text-[15px] leading-[1.55] text-fg-muted">
                      {a.dek}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Full publications list" className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-serif text-[24px] leading-[1.2] text-fg sm:text-[28px]">
              Publications
            </h2>
            <a
              href={socialLinks.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent hover:underline underline-offset-[3px]"
            >
              Google Scholar ↗
            </a>
          </div>
          <p className="mt-2 max-w-2xl font-serif text-[15px] leading-[1.6] text-fg-dim">
            The complete authored body of work, newest first within each group.
          </p>

          <div className="mt-8 space-y-10">
            {publications.map((section) => (
              <div key={section.group}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim">
                  {section.group}
                </h3>
                <ol className="mt-3 divide-y divide-border-soft border-y border-border">
                  {section.items.map((item) => (
                    <li
                      key={item.title}
                      className="grid gap-1 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-5"
                    >
                      <div className="font-mono text-[11px] text-accent-alt sm:pt-1">
                        {item.year}
                      </div>
                      <div className="min-w-0">
                        <div className="font-serif text-[16.5px] leading-[1.35] text-fg">
                          {item.internal ? (
                            <Link
                              href={item.internal}
                              className="transition-colors hover:text-accent"
                            >
                              {item.title}
                            </Link>
                          ) : (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-colors hover:text-accent"
                            >
                              {item.title}
                            </a>
                          )}
                        </div>
                        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-dim">
                          {item.venue}
                          {item.doi ? ` · DOI ${item.doi}` : ''}
                        </div>
                        {item.note && (
                          <p className="mt-1.5 font-serif text-[13.5px] leading-[1.5] text-fg-muted">
                            {item.note}
                          </p>
                        )}
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em]">
                          {item.internal && (
                            <Link
                              href={item.internal}
                              className="text-accent hover:underline underline-offset-[3px]"
                            >
                              Read on this site →
                            </Link>
                          )}
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline underline-offset-[3px]"
                          >
                            {item.type === 'Book' ? 'Google Books ↗' : 'Source ↗'}
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
