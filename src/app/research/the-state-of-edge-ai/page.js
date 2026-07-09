import Link from 'next/link';
import ArticleShell from '@/components/research/ArticleShell';
import { getReport } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const report = getReport('the-state-of-edge-ai');

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
    q: 'What is The State of Edge AI report?',
    a: 'A 2024 research report by Advait Jayant and co-authors, published with Peri Labs, on why AI inference migrates from centralised clouds to devices and edge infrastructure. The PDF is free to download.',
  },
  {
    q: 'What did the report predict?',
    a: 'That cloud-only AI would hit latency, privacy, and bandwidth walls, and useful intelligence would move closer to the user. Within a year, Apple opened its on-device foundation models to developers, making local private AI a platform feature.',
  },
  {
    q: 'Where can I download The State of Edge AI?',
    a: 'The full PDF is hosted by Peri Labs and linked from this page, and the report is indexed on Google Scholar, where its citations are tracked.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={report} faqs={faqs} includePaper={false}>
      <p>
        <strong>The State of Edge AI</strong> is a research report I wrote with three co-authors
        (M. Sheldon, S. Kim, and S. Shrivastava), published with Peri Labs in October 2024. Its argument was
        unfashionable at the time: the cloud-only model of AI, where every token round-trips to a
        hyperscaler data centre, runs into three walls at consumer scale, and the industry would
        be forced to move meaningful inference onto devices and edge infrastructure.
      </p>
      <p>The three walls, as the report laid them out:</p>
      <ul>
        <li>
          <strong>Latency.</strong> Interactive AI needs round trips the speed of light does not
          grant to distant data centres. Anything conversational, wearable, or in-the-loop with
          the physical world wants local compute.
        </li>
        <li>
          <strong>Privacy.</strong> The most valuable context (messages, health, screen content)
          is exactly what users and regulators least want shipped to third-party clouds. Local
          inference dissolves the dilemma.
        </li>
        <li>
          <strong>Bandwidth and cost.</strong> Streaming raw context up and tokens down for
          billions of users is an economic and network non-starter; the marginal cloud token has
          a price, the marginal local token effectively does not.
        </li>
      </ul>

      <h2>What happened next</h2>
      <p>
        The report&apos;s core prediction was made on 14 October 2024. On 9 June 2025, Apple{' '}
        <a
          href="https://machinelearning.apple.com/research/apple-foundation-models-2025-updates"
          target="_blank"
          rel="noopener noreferrer"
        >
          opened its on-device foundation model to developers
        </a>
        , turning local, private AI from a demo into a platform feature with an API surface. The
        judgement that mattered was not that edge hardware would improve, which everyone
        believed, but that a first-party platform owner would make on-device intelligence the
        default developer substrate. That is now the shipped reality on more than a billion
        devices.
      </p>

      <h2>Read the report</h2>
      <p>
        <a href={report.pdf} target="_blank" rel="noopener noreferrer">
          <strong>Download The State of Edge AI (PDF) ↗</strong>
        </a>
        {' '}The report is indexed on{' '}
        <a href={report.scholarRecordUrl} target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>
        , where its citations are tracked.
      </p>

      <h2>How it connects to the rest of my research</h2>
      <p>
        Edge AI is one leg of a broader thesis about where the economics of intelligence settle:
        computation migrates toward users, capital markets learn to finance the infrastructure,
        and agents transact on their own rails. The financing leg is{' '}
        <Link href="/research/the-aifi-thesis">The AiFi Thesis</Link>. The market-integrity leg,
        on what happens when trading venues meet manufactured activity, is{' '}
        <Link href="/research/the-economics-of-wash-trading">The Economics of Wash Trading</Link>{' '}
        and the wider <Link href="/research">research hub</Link>.
      </p>
    </ArticleShell>
  );
}
