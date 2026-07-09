import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle, paper } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('nft-wash-trading');

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
    q: 'How much NFT trading volume is wash trading?',
    a: 'It depends on the venue and the period. Academic transaction-level studies flag a low single-digit share of trades but a much larger share of value, and on marketplaces that paid token rewards for volume, wash trades at times made up most of reported activity.',
  },
  {
    q: 'Why do people wash trade NFTs?',
    a: 'Two reasons: to make a collection look liquid and in demand, and to farm rewards that pay per unit of volume. The Economics of Wash Trading finds the second motive dominant: wash activity concentrates where token incentives directly pay for volume.',
  },
  {
    q: 'Does NFT wash trading raise prices?',
    a: 'Not durably. The paper finds no significant relationship between wash volumes and real trading volumes on future days. Fake prints can distort a floor price briefly, but they do not manufacture sustained genuine demand.',
  },
  {
    q: 'Is wash trading NFTs profitable?',
    a: 'Mostly only where subsidised. Chainalysis-style analyses of self-financed sellers found many wash traders lost money to gas fees, with profits concentrated in a small successful group and in reward-farming on venues that paid tokens for volume.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        <strong>NFT wash trading</strong> is the practice of trading a non-fungible token between
        wallets controlled by the same actor so that marketplaces and data aggregators record
        activity that never involved two real counterparties. During the NFT boom it was not a
        marginal nuisance. On particular venues and days, self-dealing was the majority of
        reported volume, and entire reward programmes were, in effect, consumed by it.
      </p>
      <p>
        This page collects what the data actually shows: how the trades are structured, how large
        the phenomenon ran, who made money, and what it did to prices. It draws on my paper{' '}
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">
          {paper.title}
        </a>{' '}
        (SSRN {paper.abstractId}), an 85-page study of exactly this question.
      </p>

      <h2>The anatomy of an NFT wash trade</h2>
      <p>
        Because NFT trades settle bilaterally, the simplest wash trade is a sale from wallet A to
        wallet B where both keys sit in one browser. In practice, patterns are slightly more
        elaborate to evade naive filters:
      </p>
      <ul>
        <li>
          <strong>Round trips</strong>: the token returns to its origin wallet after one or more
          hops, often within hours.
        </li>
        <li>
          <strong>Daisy chains</strong>: A sells to B, B to C, C to D, with every wallet funded
          from one source and the token drifting in a closed loop.
        </li>
        <li>
          <strong>Self-financed purchases</strong>: the buyer&apos;s ETH arrives from the seller,
          or from the same exchange withdrawal, moments before the trade.
        </li>
      </ul>
      <p>
        All three leave fingerprints in public block data, which is what makes NFT markets such a
        good laboratory. The specific heuristics, and their false-positive traps, are on the{' '}
        <Link href="/research/wash-trading-detection">wash trading detection page</Link>.
      </p>

      <h2>How big it ran</h2>
      <p>The estimates that have held up, ordered by method:</p>
      <ul>
        <li>
          <strong>Transaction-level flags.</strong> von Wachter, Jensen, Regner and Ross&apos;s{' '}
          <a href="https://arxiv.org/abs/2202.03866" target="_blank" rel="noopener noreferrer">
            NFT Wash Trading
          </a>{' '}
          study of on-chain sales found a low single-digit percentage of transactions suspicious,
          but those trades were large: the value share was far higher than the count share.
        </li>
        <li>
          <strong>Venue-level accounting.</strong> Where marketplaces paid tokens for volume, the
          contaminated share exploded. In early 2022, most reported volume on{' '}
          <Link href="/research/looksrare-wash-trading">LooksRare</Link> was widely assessed to be
          wash trading, at times an order of magnitude more than its genuine activity.
        </li>
        <li>
          <strong>Trader-level profitability.</strong> Chainalysis&apos;s 2022 crypto crime
          analysis of self-financed NFT sellers found that most wash traders lost money to gas
          costs, while a small profitable group cleared millions. Unsubsidised wash trading is a
          bad business; subsidised wash trading is a very good one.
        </li>
      </ul>

      <h2>What it did, and did not do</h2>
      <p>
        The core empirical result of {paper.title}: wash trading volumes showed{' '}
        <strong>no significant relationship with real trading volumes in future days</strong>. The
        advertising theory of wash trading, in which fake prints lure real buyers who then sustain
        the market, finds little support at the collection level. What the data does show is wash
        activity concentrating precisely where{' '}
        <strong>token-based incentives paid for volume</strong>, and on those venues the rewards
        appear to have influenced real trading activity too, by changing who showed up and why.
      </p>
      <p>
        The interpretation I defend in the paper: most NFT wash trading was not manipulation of
        buyers. It was rational extraction from marketplaces that priced their own token emissions
        against a statistic anyone could print for free. The buyers being fooled, to the extent
        anyone was, were the token holders funding the rewards.
      </p>

      <PaperCallout />

      <h2>Consequences for markets and data</h2>
      <ul>
        <li>
          <strong>Headline statistics remain unreliable.</strong> Aggregate NFT volume series that
          do not filter self-financed flow overstate the asset class&apos;s activity, especially
          for 2022. Any analysis built on raw marketplace volume inherits the contamination.
        </li>
        <li>
          <strong>Incentive design is market design.</strong> Trade-to-earn programmes are
          subsidies on the most fakeable metric in finance. The structural fixes are discussed on
          the <Link href="/research/nft-markets">NFT markets page</Link>.
        </li>
        <li>
          <strong>Enforcement is arriving late but arriving.</strong> Wash trading in regulated
          markets has been illegal for close to a century, and prosecutors have begun applying
          fraud and manipulation theories to crypto and NFT cases. The legal map is on{' '}
          <Link href="/research/is-wash-trading-illegal">Is wash trading illegal?</Link>
        </li>
      </ul>
    </ArticleShell>
  );
}
