import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle, paper } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('trade-to-earn');

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
    q: 'What is trade-to-earn?',
    a: 'A reward programme where a venue pays its own token to traders in proportion to their trading volume. LooksRare popularised it for NFTs in 2022. It reliably attracts wash trading because volume is the one metric a single actor can manufacture without limit.',
  },
  {
    q: 'Why does trade-to-earn attract wash trading?',
    a: 'Because it prices a behaviour rather than an outcome. Whenever expected token rewards exceed fees plus gas, trading with yourself is riskless positive expectancy, so rational actors print volume until the margin closes.',
  },
  {
    q: 'Can volume incentives be designed safely?',
    a: 'Safer, yes: exclude self-financed counterparties, cap rewards per funding cluster, reward two-sided outcomes like realised spreads or retained users, and vest rewards against future genuine activity. Anything keyed to raw volume will be farmed.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        <strong>Trade-to-earn</strong> is the mechanism design mistake of paying your own token
        for trading volume. It looks like growth spending: subsidise activity, bootstrap
        liquidity, take share from the incumbent. What it buys, reliably and provably, is{' '}
        <Link href="/research/wash-trading">wash trading</Link>, because volume is the single
        easiest statistic in finance for one actor to manufacture alone.
      </p>
      <p>
        The claim is not theoretical. My paper{' '}
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">
          {paper.title}
        </a>{' '}
        measures it: NFT wash trading concentrated overwhelmingly on venues with token-based
        incentives, tracked the value of those incentives, and showed no sign of achieving
        anything else, with no significant relationship between wash volumes and genuine future
        volumes.
      </p>

      <h2>The arithmetic of the exploit</h2>
      <p>A volume reward creates a mechanical profitability condition. For a self-trade:</p>
      <ul>
        <li>
          <strong>Cost</strong>: marketplace fees plus gas on the trades.
        </li>
        <li>
          <strong>Revenue</strong>: your volume&apos;s pro-rata share of the emission schedule,
          at the token&apos;s expected sale price.
        </li>
        <li>
          <strong>Risk</strong>: none at the moment of trade; both sides are you.
        </li>
      </ul>
      <p>
        When revenue exceeds cost, the reward pool is an open faucet, and every rational actor
        scales until crowding or emission decay closes the margin. The venue is not buying
        liquidity; it is auctioning its token to whoever can print volume cheapest. On{' '}
        <Link href="/research/looksrare-wash-trading">LooksRare</Link> the equilibrium arrived
        within days of launch.
      </p>

      <h2>Second-order damage</h2>
      <ul>
        <li>
          <strong>The statistics die first.</strong> Volume, rankings, and market-share charts
          become unusable, poisoning analysis long after the programme ends, as covered on{' '}
          <Link href="/research/fake-trading-volume">fake trading volume</Link>.
        </li>
        <li>
          <strong>Token holders fund it.</strong> Emissions sold by farmers are a wealth transfer
          from holders to wash traders, laundered through a growth budget.
        </li>
        <li>
          <strong>Real users mislearn.</strong> Participants who arrive for rewards behave like
          rewards, not like customers; retention collapses when emissions do.
        </li>
        <li>
          <strong>Regulatory surface grows.</strong> Manufactured activity is manipulation in
          regulated markets and increasingly treated as fraud in crypto, per the{' '}
          <Link href="/research/is-wash-trading-illegal">legality map</Link>.
        </li>
      </ul>

      <PaperCallout compact />

      <h2>Designing rewards that buy something real</h2>
      <p>Principles that survive contact with the data:</p>
      <ul>
        <li>
          <strong>Never pay raw volume.</strong> Pay outcomes that require independent
          counterparties: realised spread capture, filled resting depth, retained active buyers.
        </li>
        <li>
          <strong>Filter by funding, not identity count.</strong> Wallets are free; funded
          independence is not. Cluster by capital origin before crediting anything, using the
          methods on the <Link href="/research/wash-trading-detection">detection page</Link>.
        </li>
        <li>
          <strong>Vest against the future.</strong> Rewards that unlock only if activity persists
          after emissions stop convert farmers into either users or non-claimants.
        </li>
        <li>
          <strong>Price the attack pre-launch.</strong> If a self-trade clears the profitability
          condition on day one, the programme is a wash trading subsidy with a marketing budget.
        </li>
      </ul>
      <p>
        Trade-to-earn is the cleanest modern illustration of the paper&apos;s thesis: wash
        trading is not primarily a deception story, it is an incentive story. Fix the incentive
        and the fake volume stops being printed; leave it and no amount of tape-watching helps.
        The wider market context is on <Link href="/research/nft-markets">NFT markets</Link>.
      </p>
    </ArticleShell>
  );
}
