import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle, paper } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('nft-markets');

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
    q: 'What is an NFT market?',
    a: 'An NFT market is a venue where non-fungible tokens, unique blockchain-recorded assets, are bought and sold. Trades settle on-chain as bilateral transfers, typically against a listing or an offer, rather than through a continuous order book of identical units.',
  },
  {
    q: 'Are NFT markets efficient?',
    a: 'Only weakly. Every trade is public, which helps, but each token is unique, liquidity is thin, and headline statistics are contaminated by wash trading. Research, including The Economics of Wash Trading, finds prices and volumes that reflect incentive design as much as demand.',
  },
  {
    q: 'Why is NFT trading volume misleading?',
    a: 'Because volume is self-reported activity, not verified demand. A single actor moving a token between their own wallets prints volume at zero economic cost, and during token-reward programmes such prints have at times been most of the reported total.',
  },
  {
    q: 'How is price discovered in NFT markets?',
    a: 'Through sparse bilateral trades, listing prices, and collection floor prices rather than a continuous two-sided book. With few trades per token, single transactions move reference prices, which is precisely what makes manipulation cheap.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        <strong>NFT markets</strong> are venues where non-fungible tokens, unique assets recorded
        on a blockchain, change hands. They look like ordinary financial markets from a distance:
        listings, bids, volume charts, price histories. Up close they are structurally strange.
        Every unit is one of a kind, every trade is publicly visible forever, settlement is
        bilateral rather than through a central order book, and for stretches of their history the
        headline activity numbers were substantially fictional.
      </p>
      <p>
        That combination, radical transparency plus unreliable statistics, is what makes NFT
        markets worth studying. It is the setting for my paper{' '}
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">
          {paper.title}
        </a>
        , which uses them as a laboratory for questions that are hard to answer in equities: when
        activity can be manufactured for free, who manufactures it, and does it work?
      </p>

      <h2>How the plumbing works</h2>
      <p>
        A typical NFT trade is a bilateral settlement executed by a marketplace contract: a seller
        signs a listing at a price, a buyer accepts it, and the token and payment move in one
        atomic transaction. Around that primitive, marketplaces build the familiar furniture:
      </p>
      <ul>
        <li>
          <strong>Listings and offers</strong> instead of a continuous order book. Each token has
          its own tiny market; the collection floor price, the cheapest live listing, becomes the
          de facto reference price.
        </li>
        <li>
          <strong>Rankings and trending pages</strong> sorted by volume, which route attention,
          and therefore demand, toward whatever prints the biggest numbers.
        </li>
        <li>
          <strong>Fee and reward schedules</strong>: creator royalties, marketplace fees, and in
          some cases token rewards paid out in proportion to trading volume. The last of these
          turned out to be the load-bearing detail.
        </li>
      </ul>

      <h2>Price formation with thin books</h2>
      <p>
        In liquid equities, thousands of identical shares trade per minute and no single print
        defines the price. In an NFT collection, a token might trade once a month. Reference
        prices hang off a handful of observations: the floor, the last sale, a recent sweep. Thin
        markets amplify small flows, which cuts both ways. Genuine enthusiasm moves prices fast,
        and so does a manipulator with two wallets. When a single self-trade can set a
        collection&apos;s reference price, painting the tape costs a gas fee.
      </p>
      <p>
        This is why volume statistics matter so much more in NFT markets than elsewhere: with
        little other information, participants lean on activity as the demand signal. And it is
        why <Link href="/research/wash-trading">wash trading</Link>, the manufacture of exactly
        that signal, is the characteristic manipulation of the asset class.
      </p>

      <h2>The efficiency question</h2>
      <p>
        Are NFT markets efficient? The transparency argues yes: every trade, wallet, and transfer
        is public, so information should travel. The structure argues no: unique assets, thin
        liquidity, retail-heavy participation, and statistics that reward gaming. The empirical
        answer from {paper.title} is closer to the second reading, with a twist. Wash trading
        volume, however large, showed{' '}
        <strong>no significant relationship with genuine future volume</strong>. The market was
        inefficient enough to be flooded with fake activity, but participants were not, in
        aggregate, fooled into trading behind it. The fake volume found its payoff elsewhere: in{' '}
        <Link href="/research/looksrare-wash-trading">token incentives</Link> that paid for volume
        directly.
      </p>

      <PaperCallout />

      <h2>Reading NFT market data without being lied to</h2>
      <p>A short field guide, distilled from the research:</p>
      <ul>
        <li>
          <strong>Treat volume as a claim, not a fact.</strong> Ask what share survives once
          self-financed wallet clusters are removed. The methods are on the{' '}
          <Link href="/research/wash-trading-detection">detection page</Link>.
        </li>
        <li>
          <strong>Check what the venue pays for.</strong> If a marketplace rewards volume with its
          own token, assume the volume statistics are contaminated until shown otherwise.
        </li>
        <li>
          <strong>Prefer breadth to depth.</strong> The number of distinct, independently funded
          buyers says more about demand than the dollar total any of them printed.
        </li>
        <li>
          <strong>Watch prices, not just prints.</strong> In the data behind the paper, average
          prices and genuine volumes moved on their own logic, largely indifferent to the wash
          layer stacked on top.
        </li>
      </ul>
      <p>
        The scale of the fake layer, and who profited from it, is quantified on the{' '}
        <Link href="/research/nft-wash-trading">NFT wash trading page</Link>. Whether any of it
        was legal is covered on{' '}
        <Link href="/research/is-wash-trading-illegal">Is wash trading illegal?</Link>
      </p>
    </ArticleShell>
  );
}
