import Link from 'next/link';
import Footer from '@/components/Footer';
import { ResearchHeader, CiteBlock, AuthorCard } from '@/components/research/ArticleShell';
import { articles, paper, researchHub, scholarlyArticleNode } from '@/lib/research';
import { siteName, siteUrl } from '@/lib/site';

export const metadata = {
  title: researchHub.title,
  description: researchHub.description,
  alternates: { canonical: '/research' },
  keywords: [
    'wash trading',
    'NFT markets',
    'NFT wash trading',
    'wash trading detection',
    'The Economics of Wash Trading',
    'Advait Jayant research',
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
    scholarlyArticleNode,
    {
      '@type': 'CollectionPage',
      '@id': `${siteUrl}/research#page`,
      name: researchHub.title,
      description: researchHub.description,
      url: `${siteUrl}/research`,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${paper.doiUrl}#paper` },
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
          Wash trading and NFT markets
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-[17px] leading-[1.65] text-fg-muted sm:text-[18px]">
          {siteName} wrote{' '}
          <a
            href={paper.ssrnUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-accent/35 underline-offset-[3px] hover:decoration-accent"
          >
            The Economics of Wash Trading
          </a>
          , an 85-page study of manipulation in non-fungible token markets. These pages unpack the
          paper for people who search before they cite: what wash trading is, how large it runs in
          NFT markets, how to detect it, whether it is illegal, and what token incentives do to
          trading behaviour.
        </p>

        <section aria-label="The paper" className="mt-12">
          <div className="rounded-[3px] border border-border bg-surface p-6 shadow-[0_1px_0_rgba(29,37,40,0.02)] sm:p-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.16em]">
              <span className="text-accent">Solo paper · SSRN {paper.abstractId}</span>
              <span aria-hidden className="hidden h-px w-7 bg-accent/30 sm:inline-block" />
              <span className="text-fg-dim">October 2023 · {paper.pages} pages</span>
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

        <CiteBlock />
        <AuthorCard />
      </main>
      <Footer />
    </>
  );
}
