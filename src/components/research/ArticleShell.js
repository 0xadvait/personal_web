import Link from 'next/link';
import Footer from '@/components/Footer';
import { socialLinks } from '@/lib/site';
import { buildArticleGraph, paper, relatedArticles } from '@/lib/research';

export function ResearchHeader() {
  return (
    <header className="border-b border-border bg-bg/95">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Link
          href="/"
          className="font-serif italic text-[15px] text-fg transition-colors hover:text-accent sm:text-base"
        >
          Advait Jayant
        </Link>
        <nav aria-label="Research navigation">
          <ul className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.12em]">
            <li>
              <Link
                href="/research"
                className="border-b border-transparent text-fg-muted transition-colors hover:border-accent hover:text-accent"
              >
                Research
              </Link>
            </li>
            <li className="hidden sm:block">
              <a
                href={paper.ssrnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-transparent text-fg-muted transition-colors hover:border-accent hover:text-accent"
              >
                Paper on SSRN ↗
              </a>
            </li>
            <li>
              <Link
                href="/#contact"
                className="border-b border-transparent text-fg-muted transition-colors hover:border-accent hover:text-accent"
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
      className="not-prose my-10 rounded-[3px] border border-border bg-surface p-6 shadow-[0_1px_0_rgba(29,37,40,0.02)] sm:p-7"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
        The research behind this page
      </div>
      <h3 className="mt-3 font-serif text-[21px] leading-[1.25] text-fg sm:text-[24px]">
        <a
          href={paper.ssrnUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          {paper.title}
        </a>
      </h3>
      {!compact && (
        <p className="mt-2 max-w-xl font-serif text-[15px] leading-[1.55] text-fg-muted">
          An 85-page study of wash trading in NFT markets: who does it, what it moves, and why
          token-based incentives, not price manipulation, explain most of it.
        </p>
      )}
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em]">
        <a
          href={paper.ssrnUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[3px] border border-accent bg-accent px-3.5 py-2 text-white transition-colors hover:bg-accent-deep"
        >
          Read on SSRN ↗
        </a>
        <a
          href={paper.doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline underline-offset-[3px]"
        >
          DOI {paper.doi}
        </a>
        <Link
          href="/research/the-economics-of-wash-trading"
          className="text-accent hover:underline underline-offset-[3px]"
        >
          Paper overview →
        </Link>
      </div>
    </aside>
  );
}

export function CiteBlock() {
  return (
    <section aria-label="How to cite" className="not-prose my-10">
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
        Cite the paper
      </div>
      <div className="mt-3 rounded-[3px] border border-border-soft bg-surface-soft p-5 font-mono text-[12px] leading-[1.65] text-fg-muted">
        {paper.suggestedCitation}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em]">
        {paper.citedBy.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-[3px]"
          >
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
    <section className="mt-14" aria-label="Frequently asked questions">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim">
        Frequently asked questions
      </h2>
      <dl className="mt-4 divide-y divide-border-soft border-y border-border">
        {faqs.map((f) => (
          <div key={f.q} className="py-6">
            <dt className="font-serif text-[19px] leading-[1.3] text-fg">{f.q}</dt>
            <dd className="mt-2.5 max-w-2xl font-serif text-[15.5px] leading-[1.65] text-fg-muted">
              {f.a}
            </dd>
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
      className="mt-14 rounded-[3px] border border-border bg-surface p-6 sm:p-7"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
        About the author
      </div>
      <p className="mt-3 max-w-2xl font-serif text-[15.5px] leading-[1.65] text-fg-muted">
        <Link href="/" className="text-fg hover:text-accent transition-colors">
          Advait Jayant
        </Link>{' '}
        researches market microstructure and manipulation in crypto and NFT markets. His
        solo-authored paper{' '}
        <a
          href={paper.ssrnUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline underline-offset-[3px]"
        >
          The Economics of Wash Trading
        </a>{' '}
        (SSRN {paper.abstractId}) has been cited in the Journal of Banking &amp; Finance, the
        European Journal of Finance, and an NBER working paper. He studied at London Business
        School and BITS Pilani, and works across AI infrastructure, compute markets, and crypto
        market structure.
      </p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em]">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-[3px]"
          >
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
    <section aria-label="Related research pages" className="mt-14">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-dim">
        Keep reading
      </h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {related.map((a) => (
          <li key={a.slug} className="rounded-[3px] border border-border bg-surface p-5">
            <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-accent-alt">
              {a.kicker}
            </div>
            <Link
              href={`/research/${a.slug}`}
              className="mt-2 block font-serif text-[16.5px] leading-[1.3] text-fg transition-colors hover:text-accent"
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
      <main id="main-content" className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-dim">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/research" className="hover:text-accent transition-colors">
                Research
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-fg-muted">{article.navLabel}</li>
          </ol>
        </nav>

        <header className="mt-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            {article.kicker}
          </div>
          <h1 className="mt-4 font-serif text-[32px] leading-[1.16] text-fg text-balance sm:text-[42px]">
            {article.title}
          </h1>
          <p className="mt-5 font-serif italic text-[18px] leading-[1.4] text-fg-muted sm:text-[20px]">
            {article.dek}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-y border-border py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-dim">
            <Link href="/" className="text-fg-muted hover:text-accent transition-colors">
              Advait Jayant
            </Link>
            <span aria-hidden>·</span>
            <span>London</span>
            <span aria-hidden>·</span>
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

        <article className="prose-research mt-10">{children}</article>

        <FaqSection faqs={faqs} />
        <AuthorCard />
        <RelatedArticles slug={article.slug} />
      </main>
      <Footer />
    </>
  );
}
