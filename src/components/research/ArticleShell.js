import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { socialLinks } from '@/lib/site';
import { buildArticleGraph, paper, relatedArticles } from '@/lib/research';

const button =
  'inline-flex items-center justify-center rounded-[10px] bg-fg px-[18px] py-[11px] text-[14.5px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000]';

export function ResearchHeader() {
  return <Nav current="/research" />;
}

export function PaperCallout({ compact = false }) {
  return (
    <aside aria-label="The research paper" className="not-prose my-12 border-t border-border pt-7">
      <div className="kicker">The research behind this page</div>
      <h3 className="mt-4 text-[20px] font-normal leading-[1.3] tracking-[-0.012em] text-fg">
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer" className="link">
          {paper.title}
        </a>
      </h3>
      {!compact && (
        <p className="mt-2.5 text-[16px] leading-[1.65] text-fg-muted">
          An 85-page study of wash trading in NFT markets: who does it, what it moves, and why
          token-based incentives, not price manipulation, explain most of it.
        </p>
      )}
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14.5px]">
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer" className={button}>
          Read on SSRN &#8599;
        </a>
        <a href={paper.doiUrl} target="_blank" rel="noopener noreferrer" className="link">
          DOI {paper.doi}
        </a>
        <Link href="/research/the-economics-of-wash-trading" className="link">
          Paper overview &rarr;
        </Link>
      </div>
    </aside>
  );
}

export function CiteBlock() {
  return (
    <section aria-label="How to cite" className="not-prose my-12 border-t border-border pt-7">
      <h2 className="kicker">Cite the paper</h2>
      <p className="mt-4 font-mono text-[12.5px] leading-[1.7] text-fg-muted">{paper.suggestedCitation}</p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14.5px]">
        {paper.citedBy.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="link">
            Cited in {c.label} &#8599;
          </a>
        ))}
      </div>
    </section>
  );
}

export function FaqSection({ faqs }) {
  if (!faqs?.length) return null;
  return (
    <section className="mt-14 border-t border-border pt-7" aria-label="Frequently asked questions">
      <h2 className="kicker">Frequently asked questions</h2>
      <dl className="mt-6 space-y-7">
        {faqs.map((f) => (
          <div key={f.q}>
            <dt className="text-[18px] font-normal leading-[1.35] tracking-[-0.01em] text-fg">{f.q}</dt>
            <dd className="mt-2 text-[16px] leading-[1.65] text-fg-muted">{f.a}</dd>
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
    <section aria-label="About the author" className="mt-14 border-t border-border pt-7">
      <h2 className="kicker">About the author</h2>
      <p className="mt-4 text-[16px] leading-[1.68] text-fg-muted">
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
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14.5px]">
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link">
            {l.label} &#8599;
          </a>
        ))}
      </div>
    </section>
  );
}

export function RelatedArticles({ slug }) {
  const related = relatedArticles(slug);
  return (
    <section aria-label="Related research pages" className="mt-14 border-t border-border pt-7">
      <h2 className="kicker">Keep reading</h2>
      <ul className="mt-6 space-y-5">
        {related.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/research/${a.slug}`}
              className="link text-[17px] leading-[1.35] tracking-[-0.01em]"
            >
              {a.navLabel === 'The paper' ? paper.title : a.title}
            </Link>
            <div className="kicker mt-1.5">{a.kicker}</div>
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
      <main id="main-content" className="mx-auto w-full max-w-[720px] px-5 pb-8 pt-10 sm:px-8 sm:pt-14">
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

        <header className="mt-8">
          <h1 className="rise text-[30px] font-normal leading-[1.1] tracking-[-0.025em] text-fg text-balance sm:text-[36px]">
            {article.title}
          </h1>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg-muted">{article.dek}</p>
          <div className="kicker mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-y border-border py-4">
            <span>{article.kicker}</span>
            <span aria-hidden className="text-fg-faint">
              &middot;
            </span>
            <Link href="/" className="transition-colors hover:text-fg">
              Advait Jayant
            </Link>
            <span aria-hidden className="text-fg-faint">
              &middot;
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

        <article className="prose-research mt-10">{children}</article>

        <FaqSection faqs={faqs} />
        <AuthorCard />
        <RelatedArticles slug={article.slug} />
      </main>
      <Footer />
    </>
  );
}
