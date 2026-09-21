import Link from 'next/link';
import Footer from '@/components/Footer';
import { socialLinks } from '@/lib/site';
import { buildArticleGraph, paper, relatedArticles } from '@/lib/research';

export function ResearchHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-6 px-5 sm:h-[74px] sm:px-8">
        <Link
          href="/"
          className="font-serif text-[21px] leading-none text-fg transition-opacity hover:opacity-70 sm:text-[23px]"
        >
          Advait Jayant
        </Link>
        <nav aria-label="Research navigation">
          <ul className="flex items-center gap-5 text-[14.5px] sm:gap-6">
            <li>
              <Link href="/research" className="text-fg-muted transition-colors hover:text-fg">
                Research
              </Link>
            </li>
            <li className="hidden sm:block">
              <a
                href={paper.ssrnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted transition-colors hover:text-fg"
              >
                Paper on SSRN ↗
              </a>
            </li>
            <li>
              <Link
                href="/#contact"
                className="inline-flex items-center rounded-[9px] bg-fg px-[15px] py-[9px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function PaperCallout({ compact = false }) {
  return (
    <aside
      aria-label="The research paper"
      className="not-prose my-10 rounded-[14px] border border-border bg-surface p-6 sm:p-7"
    >
      <div className="kicker">The research behind this page</div>
      <h3 className="mt-4 text-[21px] font-normal leading-[1.25] tracking-[-0.015em] text-fg sm:text-[23px]">
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer" className="link">
          {paper.title}
        </a>
      </h3>
      {!compact && (
        <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.62] text-fg-muted">
          An 85-page study of wash trading in NFT markets: who does it, what it moves, and why
          token-based incentives, not price manipulation, explain most of it.
        </p>
      )}
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14.5px]">
        <a
          href={paper.ssrnUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-[10px] bg-fg px-[18px] py-[11px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000]"
        >
          Read on SSRN ↗
        </a>
        <a href={paper.doiUrl} target="_blank" rel="noopener noreferrer" className="link">
          DOI {paper.doi}
        </a>
        <Link href="/research/the-economics-of-wash-trading" className="link">
          Paper overview →
        </Link>
      </div>
    </aside>
  );
}

export function CiteBlock() {
  return (
    <section aria-label="How to cite" className="not-prose my-10">
      <div className="kicker">Cite the paper</div>
      <div className="mt-4 rounded-[12px] border border-border-soft bg-surface p-5 font-mono text-[12.5px] leading-[1.7] text-fg-muted">
        {paper.suggestedCitation}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
        {paper.citedBy.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="link">
            Cited in {c.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}

export function FaqSection({ faqs }) {
  if (!faqs?.length) return null;
  return (
    <section className="mt-16" aria-label="Frequently asked questions">
      <h2 className="kicker">Frequently asked questions</h2>
      <dl className="mt-5 divide-y divide-border-soft border-y border-border">
        {faqs.map((f) => (
          <div key={f.q} className="py-7">
            <dt className="text-[19px] font-normal leading-[1.32] tracking-[-0.012em] text-fg">
              {f.q}
            </dt>
            <dd className="mt-3 max-w-[66ch] text-[16px] leading-[1.65] text-fg-muted">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function AuthorCard() {
  const links = [
    { label: 'SSRN', href: socialLinks.ssrn },
    { label: 'Google Scholar', href: socialLinks.scholar },
    { label: 'X', href: socialLinks.x },
    { label: 'LinkedIn', href: socialLinks.linkedin },
  ];
  return (
    <section
      aria-label="About the author"
      className="mt-16 rounded-[14px] border border-border bg-surface p-6 sm:p-7"
    >
      <div className="kicker">About the author</div>
      <p className="mt-4 max-w-[70ch] text-[16px] leading-[1.68] text-fg-muted">
        <Link href="/" className="link">
          Advait Jayant
        </Link>{' '}
        researches market microstructure and manipulation in crypto and NFT markets. His
        solo-authored paper{' '}
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer" className="link">
          The Economics of Wash Trading
        </a>{' '}
        (SSRN {paper.abstractId}) has been cited in the Journal of Banking &amp; Finance, the
        European Journal of Finance, and an NBER working paper. He is an alumnus of London Business
        School, where he completed two master&rsquo;s degrees (an M.Res. in Business and Management
        Studies and a Master of Analytics and Management) and was enrolled in the PhD programme, and
        holds a Computer Science degree from BITS Pilani. He works across AI infrastructure, compute
        markets, and crypto market structure.
      </p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link">
            {l.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}

export function RelatedArticles({ slug }) {
  const related = relatedArticles(slug);
  return (
    <section aria-label="Related research pages" className="mt-16">
      <h2 className="kicker">Keep reading</h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {related.map((a) => (
          <li
            key={a.slug}
            className="rounded-[13px] border border-border bg-surface p-5 transition-all hover:border-fg-faint hover:bg-white"
          >
            <div className="kicker">{a.kicker}</div>
            <Link
              href={`/research/${a.slug}`}
              className="mt-3 block text-[16.5px] leading-[1.32] tracking-[-0.01em] text-fg transition-opacity hover:opacity-70"
            >
              {a.navLabel === 'The paper' ? paper.title : a.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ArticleShell({
  article,
  faqs,
  isPaperPage = false,
  includePaper = true,
  children,
}) {
  const graph = buildArticleGraph(article, { faqs, isPaperPage, includePaper });
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <ResearchHeader />
      <main id="main-content" className="mx-auto max-w-[47rem] px-5 py-16 sm:px-8 sm:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="kicker flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-fg">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-fg-faint">
              /
            </li>
            <li>
              <Link href="/research" className="transition-colors hover:text-fg">
                Research
              </Link>
            </li>
            <li aria-hidden className="text-fg-faint">
              /
            </li>
            <li className="text-fg-muted">{article.navLabel}</li>
          </ol>
        </nav>

        <header className="mt-10">
          <div className="kicker">{article.kicker}</div>
          <h1 className="mt-5 text-[33px] font-normal leading-[1.1] tracking-[-0.028em] text-fg text-balance sm:text-[44px]">
            {article.title}
          </h1>
          <p className="mt-6 max-w-[58ch] text-[18.5px] leading-[1.5] text-fg-muted">
            {article.dek}
          </p>
          <div className="kicker mt-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-y border-border py-4">
            <Link href="/" className="text-fg-muted transition-colors hover:text-fg">
              Advait Jayant
            </Link>
            <span aria-hidden className="text-fg-faint">
              ·
            </span>
            <span>London</span>
            <span aria-hidden className="text-fg-faint">
              ·
            </span>
            <time dateTime={article.dateModified}>
              Updated{' '}
              {new Date(`${article.dateModified}T00:00:00Z`).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                timeZone: 'UTC',
              })}
            </time>
          </div>
        </header>

        <article className="prose-research mt-12">{children}</article>

        <FaqSection faqs={faqs} />
        <AuthorCard />
        <RelatedArticles slug={article.slug} />
      </main>
      <Footer />
    </>
  );
}
