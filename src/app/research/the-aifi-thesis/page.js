import Link from 'next/link';
import ArticleShell from '@/components/research/ArticleShell';
import { getReport } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const report = getReport('the-aifi-thesis');

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
};

const faqs = [
  {
    q: 'What is the AiFi Thesis?',
    a: 'A 2025 research report by Advait Jayant with co-authors from Peri Labs and GAIB arguing that AI compute becomes a directly financeable asset class, with capital markets funding capacity the way they fund energy and real estate, and that AI agents need native payment rails.',
  },
  {
    q: 'What did the AiFi Thesis predict correctly?',
    a: 'Two headline calls: that AI compute capacity would be financed directly by capital markets (Oracle raised billions in debt for AI cloud infrastructure; Blackstone filed a public vehicle for data centres), and that agent-to-agent payments would get first-class rails (AWS launched AgentCore Payments with Coinbase and Stripe).',
  },
  {
    q: 'Where can I read the AiFi Thesis?',
    a: 'The full PDF is free, hosted by Peri Labs and linked from this page, and the report is indexed on Google Scholar.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={report} faqs={faqs} includePaper={false}>
      <p>
        <strong>The AiFi Thesis</strong> is a research report I wrote with co-authors from Peri
        Labs and GAIB, published in February 2025. AiFi is shorthand for
        the collision of AI and finance, and the report&apos;s claim was specific: AI compute
        stops being just another cloud line item and becomes an asset class that capital markets
        finance directly, the way they finance power plants, ships, and real estate.
      </p>
      <p>Three legs carried the argument:</p>
      <ul>
        <li>
          <strong>Compute as collateral.</strong> GPU capacity has measurable utilisation,
          contracted revenue, and depreciation schedules: the raw material of structured finance.
          Once underwriting standardises, dedicated debt and yield products follow.
        </li>
        <li>
          <strong>Capacity demand outruns balance sheets.</strong> Hyperscaler capex alone cannot
          absorb AI&apos;s compute demand curve; external capital must be invited in through
          instruments investors already understand.
        </li>
        <li>
          <strong>Agents need rails.</strong> If software agents transact with each other, they
          need payment infrastructure, spend controls, and clean records; whoever provides those
          rails owns the toll booth of the agent economy.
        </li>
      </ul>

      <h2>The receipts</h2>
      <p>The report was published on 28 February 2025. What followed:</p>
      <ul>
        <li>
          <strong>24 September 2025:</strong> Oracle moved to raise{' '}
          <a
            href="https://www.bloomberg.com/news/articles/2025-09-24/oracle-looks-to-raise-15-billion-from-corporate-bond-sale"
            target="_blank"
            rel="noopener noreferrer"
          >
            billions in corporate bonds
          </a>{' '}
          explicitly to fund AI cloud infrastructure: compute capacity financed by the debt
          markets.
        </li>
        <li>
          <strong>10 April 2026:</strong> Blackstone filed{' '}
          <a
            href="https://www.blackstone.com/news/press/blackstone-digital-infrastructure-trust-announces-public-filing-of-registration-statement-with-the-sec/"
            target="_blank"
            rel="noopener noreferrer"
          >
            a public registration for a digital infrastructure trust
          </a>
          , a retail-accessible vehicle for newly built data centres.
        </li>
        <li>
          <strong>7 May 2026:</strong> AWS launched{' '}
          <a
            href="https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-payments-preview/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AgentCore Payments
          </a>{' '}
          with Coinbase and Stripe, giving agents first-class rails to pay for APIs, MCP servers,
          web content, and each other.
        </li>
      </ul>

      <h2>Read the report</h2>
      <p>
        <a href={report.pdf} target="_blank" rel="noopener noreferrer">
          <strong>Download The AiFi Thesis (PDF) ↗</strong>
        </a>
        {' '}The report is indexed on{' '}
        <a href={report.scholarRecordUrl} target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>
        .
      </p>

      <h2>How it connects</h2>
      <p>
        The AiFi Thesis is the financing leg of the same worldview behind{' '}
        <Link href="/research/the-state-of-edge-ai">The State of Edge AI</Link> (where the
        compute lives) and{' '}
        <Link href="/research/the-economics-of-wash-trading">The Economics of Wash Trading</Link>{' '}
        (what happens to market integrity when trading meets programmable incentives). The full
        set of research pages lives in the <Link href="/research">research hub</Link>.
      </p>
    </ArticleShell>
  );
}
