import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('nft-market-manipulation');

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
    q: 'What are the main forms of NFT market manipulation?',
    a: 'Wash trading for volume or rewards, floor price management through strategic listings and self-purchases, bid support walls, sweep-and-relist momentum games, and insider trading on non-public information such as upcoming features or listings.',
  },
  {
    q: 'Why are NFT markets easy to manipulate?',
    a: 'Thin liquidity, unique assets with sparse price observations, pseudonymous identities, and statistics that route attention. When one print can set a collection’s reference price, the cost of moving the market is one gas fee.',
  },
  {
    q: 'Is NFT manipulation illegal?',
    a: 'Increasingly. Fraud theories have reached NFT insider trading and crypto wash trading even where securities classification is unsettled. The legality page maps the statutes and enforcement pattern.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        <strong>NFT market manipulation</strong> is bigger than its famous member. Wash trading
        gets the headlines, and my paper measures it directly, but thin bilateral markets with
        public tapes invite a whole repertoire of moves. This page is the field taxonomy: each
        technique, the economics that make it work, and the evidence trail it leaves.
      </p>

      <h2>1. Wash trading</h2>
      <p>
        Self-dealing to manufacture activity, either to advertise a collection or to farm rewards
        that pay per unit of volume. The evidence says the second motive dominated in NFT markets:
        fake volume tracked <Link href="/research/trade-to-earn">trade-to-earn incentives</Link>{' '}
        rather than luring genuine buyers. Start with the{' '}
        <Link href="/research/wash-trading">explainer</Link>, the{' '}
        <Link href="/research/nft-wash-trading">NFT-specific data</Link>, and the{' '}
        <Link href="/research/looksrare-wash-trading">LooksRare case study</Link>.
      </p>

      <h2>2. Floor price management</h2>
      <p>
        A collection&apos;s floor, its cheapest live listing, is its de facto price. Managing it
        is cheap in both directions: delist or self-buy the cheapest items to raise it, or
        cascade low listings to crush it before accumulating. Because a single actor can hold
        many tokens in a thin collection, the floor is closer to a poster than a price. Watch the
        custody chains of floor-setting listings; round trips back to funding parents give the
        game away.
      </p>

      <h2>3. Bid supports and phantom depth</h2>
      <p>
        Standing bids just under the floor simulate demand depth, reassuring buyers that exit
        liquidity exists. When the bids are the seller&apos;s own capital, the support is
        decoration that can vanish the moment it is tested. The equity-market ancestor is
        layering; the NFT version is cruder because identities are free.
      </p>

      <h2>4. Sweep-and-relist momentum games</h2>
      <p>
        Buying a visible tranche of a collection in one transaction, the sweep, prints a burst of
        volume and social proof, often amplified by trackers that broadcast whale activity. The
        manipulator relists into the attention. Distinguishing genuine conviction sweeps from
        theatre requires the funding and disposal analysis covered on the{' '}
        <Link href="/research/wash-trading-detection">detection page</Link>.
      </p>

      <h2>5. Insider activity</h2>
      <p>
        Trading ahead of non-public information: upcoming marketplace features, collection
        listings, reveal outcomes. The best-known enforcement in the sector involved
        front-running featured placements on a major marketplace, charged as wire fraud, which
        matters legally: fraud theories do not wait for asset-classification debates, as the{' '}
        <Link href="/research/is-wash-trading-illegal">legality page</Link> explains.
      </p>

      <PaperCallout compact />

      <h2>Why the taxonomy matters</h2>
      <p>
        Each technique corrupts a different signal: wash trading corrupts volume, floor games
        corrupt price, bid supports corrupt depth, sweeps corrupt flow, insiders corrupt
        information itself. Defences follow the same map. Statistics that resist self-dealing,
        covered under <Link href="/research/fake-trading-volume">fake trading volume</Link>,
        neutralise the first two. Funding-graph surveillance handles the middle. Only governance
        fixes the last. The general lesson from the research is unglamorous: markets get the
        integrity their measurement and incentive design pay for, and{' '}
        <Link href="/research/nft-markets">NFT markets</Link> paid for very little of it in their
        formative years.
      </p>
    </ArticleShell>
  );
}
