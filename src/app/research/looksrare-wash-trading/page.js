import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle, paper } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('looksrare-wash-trading');

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
    q: 'What was the LooksRare wash trading episode?',
    a: 'LooksRare launched in January 2022 paying LOOKS tokens to traders in proportion to their trading volume. Traders responded by selling NFTs back and forth between their own wallets at enormous prices, and for stretches the great majority of reported volume was self-dealing to farm the rewards.',
  },
  {
    q: 'Why did LooksRare pay traders for volume?',
    a: 'It was a growth mechanic: bootstrap liquidity and lure users from OpenSea by rewarding activity with the marketplace token. The design rewarded reported volume rather than genuine demand, so it primarily purchased manufactured volume.',
  },
  {
    q: 'Did the wash traders profit?',
    a: 'Where reward value exceeded fees and gas, yes, and the paper shows wash activity concentrating exactly on such venues. Once emissions fell and fees rose relative to rewards, the manufactured volume dried up, consistent with the incentive explanation.',
  },
  {
    q: 'What does LooksRare prove about wash trading generally?',
    a: 'The episode is a natural experiment: change the incentive design while other conditions stay similar. It shows most NFT wash trading was reward farming rather than buyer deception, the central finding of The Economics of Wash Trading.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        In January 2022 a new NFT marketplace called <strong>LooksRare</strong> launched with an
        aggressive growth mechanic: traders earned LOOKS tokens in proportion to their trading
        volume. Within days it reported volumes that dwarfed OpenSea, then the dominant venue. The
        catch, visible to anyone reading the chain, was that much of this volume was a handful of
        wallets selling NFTs back and forth to themselves at implausible prices, farming the
        emission schedule.
      </p>
      <p>
        For manipulation research this was a gift: a marketplace-scale{' '}
        <strong>natural experiment</strong> in what happens when you attach a subsidy to the most
        fakeable statistic in finance. It is the identification core of my paper{' '}
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">
          {paper.title}
        </a>
        .
      </p>

      <h2>The mechanism, precisely</h2>
      <ul>
        <li>
          <strong>Trade-to-earn.</strong> Each day&apos;s LOOKS emissions were split across
          traders pro rata by their share of eligible volume. Trade more, earn more.
        </li>
        <li>
          <strong>The arbitrage.</strong> Sell an NFT between two of your own wallets and you pay
          the marketplace fee and gas, and receive reward tokens. Whenever expected token value
          exceeded those costs, self-trading printed money.
        </li>
        <li>
          <strong>The equilibrium.</strong> Rational actors scaled the trade until costs met
          rewards. Enormous nominal volumes, tiny genuine turnover underneath.
        </li>
      </ul>
      <p>
        Note what is missing: any need for a deceived buyer. The reward contract itself was the
        counterparty paying for the fake volume. That distinguishes incentive-driven wash trading
        from the classic <Link href="/research/wash-trading">tape-painting story</Link>, and it is
        why the two need different fixes.
      </p>

      <h2>What the experiment identifies</h2>
      <p>
        Because token rewards existed on some venues and not others, over windows with otherwise
        similar market conditions, the setting separates the two motives for wash trading:
      </p>
      <ul>
        <li>
          If wash trading were mainly <strong>advertising</strong> for collections, it should
          appear broadly across venues and predict genuine future activity. It does not: across
          the data, wash volumes show{' '}
          <strong>no significant relationship with real volumes in future days</strong>.
        </li>
        <li>
          If wash trading were mainly <strong>reward farming</strong>, it should concentrate
          where volume is paid for, track the value of emissions, and collapse when rewards fall.
          That is the observed pattern, and on incentive venues the rewards appear to influence
          real trading activity as well, by changing who participates and why.
        </li>
      </ul>

      <PaperCallout compact />

      <h2>Lessons for mechanism designers</h2>
      <ul>
        <li>
          <strong>Never subsidise a self-reportable metric.</strong> Volume can be printed by one
          actor at will. Rewards keyed to it are grants to whoever prints fastest.
        </li>
        <li>
          <strong>Price the attack before launch.</strong> The profitability condition, reward
          value versus fees plus gas, is arithmetic anyone can do in advance. If it clears for a
          self-trade, the volume statistics are already spoken for.
        </li>
        <li>
          <strong>Filter by funding, not by wallet.</strong> Venues that later excluded
          self-financed flow from rewards blunted the farming. The techniques are on the{' '}
          <Link href="/research/wash-trading-detection">detection page</Link>.
        </li>
        <li>
          <strong>Expect the statistics to stay poisoned.</strong> Historical NFT volume series
          still carry the LooksRare era inside them. Any backtest or market-size claim built on
          raw 2022 volumes inherits it, as discussed on the{' '}
          <Link href="/research/nft-markets">NFT markets page</Link>.
        </li>
      </ul>
      <p>
        The broader tally of how much NFT activity was manufactured, and who profited, is on{' '}
        <Link href="/research/nft-wash-trading">NFT wash trading: scale, motives, and data</Link>.
      </p>
    </ArticleShell>
  );
}
