import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle, paper } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('crypto-wash-trading');

export const metadata = {
  title: article.metaTitle,
  description: article.description,
  alternates: { canonical: `/research/${article.slug}` },
  keywords: article.keywords,
  openGraph: {
    title: article.metaTitle,
    description: article.description,
    url: `${siteUrl}/research/${article.slug}`,
    type: 'article',
    publishedTime: article.datePublished,
    modifiedTime: article.dateModified,
    authors: [siteUrl],
  },
};

const faqs = [
  {
    q: 'How much crypto exchange volume is wash trading?',
    a: 'The benchmark academic estimate, from Cong, Li, Tang and Yang, attributed the majority of reported volume on many unregulated exchanges to wash trading, in excess of 70% for their sample period. Regulated venues showed dramatically less. The exact share varies by venue and era.',
  },
  {
    q: 'Why would an exchange fake its own volume?',
    a: 'Rankings and listings. Data aggregators ranked exchanges by volume, higher ranks attracted users and lucrative listing fees from token projects, and volume was self-reported. The exchange bore no trading cost on its own books, so inflation was nearly free.',
  },
  {
    q: 'How is exchange wash trading detected without trade data?',
    a: 'Statistically. Genuine trading leaves regularities: first-digit distributions, trade-size clustering, autocorrelation in volume. Manufactured tapes fail these tests. Where trade-level data exists, funding and account linkage does the rest.',
  },
  {
    q: 'Is crypto wash trading different from NFT wash trading?',
    a: 'The economics differ. Exchange wash trading was mostly the venue inflating itself to climb rankings. NFT wash trading was mostly traders farming token rewards that venues offered, as shown in The Economics of Wash Trading. Same trade shape, different beneficiary.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        <strong>Crypto wash trading</strong> on centralised exchanges is the industrial-scale
        version of the oldest trick in markets. Through the 2017 to 2021 cycle, exchange rankings
        were sorted by reported volume, listing fees flowed to venues with the biggest numbers,
        and the numbers were self-reported. The predictable result: on many unregulated venues,
        most of the tape was manufactured.
      </p>
      <p>
        This page covers the exchange-level phenomenon and how it differs from the trader-level
        wash trading I study in{' '}
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">
          {paper.title}
        </a>
        . The two are routinely conflated, and the confusion matters, because they have different
        perpetrators, different victims, and different fixes.
      </p>

      <h2>The benchmark evidence</h2>
      <p>
        The reference study is Cong, Li, Tang and Yang,{' '}
        <a
          href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3530220"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crypto Wash Trading
        </a>
        , published in Management Science. Using statistical fingerprints of authentic trading,
        first-digit laws, size clustering, tail distributions, they estimated that unregulated
        exchanges in their sample inflated volumes massively, with wash trading exceeding 70% of
        reported volume on many venues, while regulated exchanges looked clean. The paper turned
        a market rumour into a measured fact and forced the data aggregators to rebuild their
        methodologies.
      </p>
      <p>
        The mechanism was almost boring: the exchange, or bots it tolerated, traded against
        itself. No third party needed to be present at all. The victims were downstream: users
        who chose venues by liquidity, projects that paid listing fees benchmarked to traffic,
        and anyone whose model consumed the numbers.
      </p>

      <h2>Trader-side wash trading is a different animal</h2>
      <p>
        In NFT markets the venue usually was not the manipulator. Traders were, and they were
        responding to prices the venues had posted for volume:{' '}
        <Link href="/research/trade-to-earn">trade-to-earn</Link> token emissions, rankings,
        airdrop eligibility. My core finding is that this incentive channel, not buyer deception,
        explains where NFT wash trading concentrated. Wash volumes showed no significant
        relationship with genuine future volumes; they tracked the rewards, and on venues like{' '}
        <Link href="/research/looksrare-wash-trading">LooksRare</Link> the rewards even shaped
        real activity around them.
      </p>
      <p>The comparison is worth a table:</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Exchange wash trading</th>
              <th>NFT trader wash trading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Who manufactures</td>
              <td>The venue or tolerated bots</td>
              <td>Traders with sibling wallets</td>
            </tr>
            <tr>
              <td>Payoff</td>
              <td>Rankings, listing fees, users</td>
              <td>Token rewards, occasionally marks</td>
            </tr>
            <tr>
              <td>Data visibility</td>
              <td>Aggregates only, off-chain</td>
              <td>Every trade public, on-chain</td>
            </tr>
            <tr>
              <td>Detection</td>
              <td>Statistical tests on the tape</td>
              <td>Funding graphs and round trips</td>
            </tr>
            <tr>
              <td>Durable fix</td>
              <td>Audited or on-chain reporting</td>
              <td>Reward designs that ignore self-financed flow</td>
            </tr>
          </tbody>
        </table>
      </div>

      <PaperCallout compact />

      <h2>What changed, and what did not</h2>
      <p>
        Aggregators now discount or exclude unverifiable venues, several jurisdictions require
        surveillance of crypto markets under regimes like{' '}
        <Link href="/research/is-wash-trading-illegal">MiCA</Link>, and enforcement actions have
        treated manufactured volume as fraud. But the underlying incentive never went away:
        wherever a statistic routes money or attention and is cheap to fake, it will be faked.
        The reading list for spotting it is on{' '}
        <Link href="/research/fake-trading-volume">fake trading volume</Link>, and the
        general-purpose toolkit is on{' '}
        <Link href="/research/wash-trading-detection">wash trading detection</Link>.
      </p>
    </ArticleShell>
  );
}
