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
  const button =
    'inline-flex items-center justify-center rounded-[10px] bg-fg px-[18px] py-[11px] text-[14.5px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000]';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <ResearchHeader />
      <main id="main-content" className="mx-auto w-full max-w-[720px] px-5 pb-8 pt-10 sm:px-8 sm:pt-14">
        <h1 className="rise text-[30px] font-normal leading-[1.1] tracking-[-0.025em] text-fg sm:text-[36px]">
          The research of Advait Jayant
        </h1>
        <p className="rise mt-8 text-[17px] leading-[1.68] text-fg-muted" style={{ animationDelay: '0.08s' }}>
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

        <section aria-label="Featured paper" className="mt-14 border-t border-border pt-7">
          <h2 className="kicker">
            Solo paper &middot; SSRN {paper.abstractId} &middot; October 2023 &middot; {paper.pages} pages &middot; cited by 5
          </h2>
          <h3 className="mt-4 text-[22px] font-normal leading-[1.25] tracking-[-0.015em] text-fg">
            <Link href={`/research/${paperEntry.slug}`} className="link">
              {paper.title}
            </Link>
          </h3>
          <p className="mt-2.5 text-[16px] leading-[1.65] text-fg-muted">{paperEntry.dek}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14.5px]">
            <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer" className={button}>
              Read on SSRN &#8599;
            </a>
            <Link href={`/research/${paperEntry.slug}`} className="link">
              Overview and findings &rarr;
            </Link>
            <a href={paper.doiUrl} target="_blank" rel="noopener noreferrer" className="link">
              DOI {paper.doi}
            </a>
          </div>
        </section>

        <section aria-label="Papers and reports" className="mt-14 border-t border-border pt-7">
          <h2 className="kicker">Papers and reports</h2>
          <ul className="mt-6 space-y-7">
            {reports.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/research/${r.slug}`}
                  className="link text-[18px] leading-[1.35] tracking-[-0.01em]"
                >
                  {r.title}
                </Link>
                <p className="mt-1.5 text-[15.5px] leading-[1.6] text-fg-muted">{r.dek}</p>
                <div className="kicker mt-2">{r.kicker}</div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Explainers" className="mt-14 border-t border-border pt-7">
          <h2 className="kicker">Explainers and methods</h2>
          <ul className="mt-6 space-y-7">
            {explainers.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/research/${a.slug}`}
                  className="link text-[18px] leading-[1.35] tracking-[-0.01em]"
                >
                  {a.title}
                </Link>
                <p className="mt-1.5 text-[15.5px] leading-[1.6] text-fg-muted">{a.dek}</p>
                <div className="kicker mt-2">{a.kicker}</div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Full publications list" className="mt-14 border-t border-border pt-7">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="kicker">Publications</h2>
            <a
              href={socialLinks.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-fg-dim transition-colors hover:text-fg"
            >
              Google Scholar &#8599;
            </a>
          </div>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-fg-muted">
            The complete authored body of work, newest first within each group.
          </p>

          <div className="mt-8 space-y-10">
            {publications.map((section) => (
              <div key={section.group}>
                <h3 className="text-[13px] font-medium uppercase tracking-[0.1em] text-fg-muted">
                  {section.group}
                </h3>
                <ol className="mt-4 space-y-6">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <div className="text-[17px] leading-[1.35] tracking-[-0.01em] text-fg">
                        {item.internal ? (
                          <Link href={item.internal} className="link">
                            {item.title}
                          </Link>
                        ) : (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="link">
                            {item.title}
                          </a>
                        )}
                      </div>
                      <div className="mt-1.5 text-[14.5px] leading-[1.5] text-fg-dim">
                        {item.year} &middot; {item.venue}
                        {item.doi ? ` \u00b7 DOI ${item.doi}` : ''}
                      </div>
                      {item.note && (
                        <p className="mt-1.5 text-[14.5px] leading-[1.55] text-fg-muted">{item.note}</p>
                      )}
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-[13.5px]">
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
