import Link from 'next/link';
import ArticleShell from '@/components/research/ArticleShell';
import { getReport } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const report = getReport('beyond-ipos');

export const metadata = {
  title: report.metaTitle,
  description: report.description,
  alternates: { canonical: `/research/${report.slug}` },
  keywords: report.keywords,
  openGraph: {
    title: report.metaTitle,
    description: report.description,
    url: `${siteUrl}/research/${report.slug}`,
    type: 'article',
    publishedTime: report.datePublished,
    modifiedTime: report.dateModified,
    authors: [siteUrl],
  },
  other: {
    citation_title: 'Beyond IPOs: The Cyclical Journey from Private to Public and Back Again',
    citation_author: 'Jayant, Advait',
    citation_publication_date: '2023/09/24',
    citation_doi: report.doi,
    citation_abstract_html_url: `${siteUrl}/research/${report.slug}`,
    citation_technical_report_institution: 'SSRN',
    citation_technical_report_number: `SSRN ${report.abstractId}`,
  },
};

const faqs = [
  {
    q: 'What is the P2P2P phenomenon?',
    a: 'Private-to-Public-to-Private (P2P2P) describes firms that start private, go public via an IPO, and then return to private ownership through a take-private transaction. Beyond IPOs studies why this cycle happens across 2,585 international firms.',
  },
  {
    q: 'Why do public companies go private again?',
    a: 'The paper finds that large initial capitalisations increasingly precede post-IPO valuation challenges, and that an investor pivot toward operational profitability often pushes firms to re-enter the private realm. Broad conditions like the S&P 500 return also gauge the pressure.',
  },
  {
    q: 'Where can I read Beyond IPOs?',
    a: 'The full 48-page paper is free on SSRN at ssrn.com/abstract=4610086 (DOI 10.2139/ssrn.4610086), and it is indexed on Google Scholar.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={report} faqs={faqs} includePaper={false}>
      <p>
        <strong>Beyond IPOs: The Cyclical Journey from Private to Public and Back Again</strong> is
        my research paper on one of corporate finance&apos;s quieter puzzles: firms fight to go
        public, then a growing number of them turn around and go private again. The paper names
        this the <strong>Private-to-Public-to-Private (P2P2P)</strong> cycle and asks what actually
        drives it, across a sample of <strong>2,585 international firms</strong> with a close lens
        on 422 US-based companies. It is on{' '}
        <a href={report.ssrnUrl} target="_blank" rel="noopener noreferrer">
          SSRN as abstract 4610086
        </a>
        .
      </p>

      <h2>The question</h2>
      <p>
        An IPO is treated as an endpoint, the finish line of a company&apos;s ambition. But the
        public-to-private direction is now common enough to demand its own explanation.
        Take-private transactions, sponsor buyouts, and delistings are not failures at the edge of
        the market; they are a recurring phase in the life of the firm. Beyond IPOs treats the full
        oscillation as the object of study rather than the IPO alone.
      </p>

      <h2>What the paper finds</h2>
      <ul>
        <li>
          <strong>Big IPOs now predict trouble, not stability.</strong> Substantial initial
          capitalisations were historically read as hallmarks of firm stability; in the data they
          increasingly precede post-IPO valuation challenges.
        </li>
        <li>
          <strong>The profitability pivot pushes firms back private.</strong> A discernible
          investor shift toward operational profitability, over growth-at-any-cost, often
          precipitates the strategic decision to re-enter the private realm.
        </li>
        <li>
          <strong>Macro conditions set the tide.</strong> Broader indicators such as the S&amp;P
          500 Composite Return act as barometers of how the financial ecosystem sways these
          transitions, on top of firm-specific factors.
        </li>
      </ul>
      <p>
        The contribution is to read individual corporate behaviour and macroeconomic currents
        together, rather than treating going-private as a series of one-off deals. The intent, as
        the paper puts it, is to inform policy and future frameworks in corporate finance.
      </p>

      <h2>Abstract</h2>
      <blockquote>
        The oscillation of firms between private and public domains, encapsulated in the
        Private-to-Public-to-Private (P2P2P) phenomenon, presents a captivating conundrum in global
        corporate strategies and financial market dynamics. In a comprehensive examination spanning
        2585 international firms, with a concentrated lens on 422 US-based entities, this study
        meticulously explores the myriad motivations behind such transitions. Initial findings
        divulge that while substantial initial capitalisations have historically been hallmarks of
        firm stability, they now frequently pave the way for post-IPO valuation challenges. This
        shift, coupled with a discernible investor pivot towards operational profitability, often
        precipitates firms&apos; strategic decisions to re-enter the private realm.
      </blockquote>
      <p>
        <a href={report.ssrnUrl} target="_blank" rel="noopener noreferrer">
          <strong>Download the full paper on SSRN ↗</strong>
        </a>{' '}
        or use the DOI:{' '}
        <a href={report.doiUrl} target="_blank" rel="noopener noreferrer">
          {report.doiUrl.replace('https://', '')}
        </a>
        . Indexed on{' '}
        <a href={report.scholarRecordUrl} target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>
        . JEL classification: G32, G34.
      </p>

      <div className="aside-note">
        Suggested citation: Jayant, Advait, Beyond IPOs: The Cyclical Journey from Private to Public
        and Back Again (September 24, 2023). Available at SSRN: https://ssrn.com/abstract=4610086.
      </div>

      <h2>Where it sits in my research</h2>
      <p>
        Beyond IPOs is the capital-markets-structure companion to{' '}
        <Link href="/research/the-economics-of-wash-trading">The Economics of Wash Trading</Link>:
        both ask how market design and incentives shape the behaviour we observe in prices and
        volumes. The full set of papers, reports, and explainers is in the{' '}
        <Link href="/research">research hub</Link>.
      </p>
    </ArticleShell>
  );
}
