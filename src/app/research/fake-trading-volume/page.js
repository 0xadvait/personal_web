import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('fake-trading-volume');

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
    q: 'How can you tell if trading volume is fake?',
    a: 'Cross-examine it: does volume scale with unique, independently funded participants? Does it survive removing round trips and self-financed buyers? Do trade sizes and first digits follow the distributions organic activity produces? Volume that fails these checks is manufactured until proven otherwise.',
  },
  {
    q: 'Why does fake volume matter to investors?',
    a: 'Because decisions key off it: venue choice, liquidity assumptions, market-size claims, backtests, token screens. Feeding manufactured volume into any of these transmits the manipulation into your own conclusions.',
  },
  {
    q: 'Which volume numbers are trustworthy?',
    a: 'Prefer venues with regulatory surveillance, aggregators that publish adjustment methodologies, and on-chain series where self-financed flow can be filtered. Distrust any self-reported total from a venue whose ranking depends on it.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        <strong>Fake trading volume</strong> is what you get when the most quoted statistic in
        markets meets the lowest cost of manufacture. Volume drives exchange rankings, token
        screeners, liquidity assumptions, and market-size headlines, yet in unregulated venues it
        is self-reported, and on public blockchains it can be printed by one actor trading with
        themselves. This page is a working guide to consuming volume numbers without inheriting
        someone else&apos;s manipulation.
      </p>

      <h2>Where fake volume comes from</h2>
      <ul>
        <li>
          <strong>Venue self-inflation.</strong> Exchanges printing their own tape to climb
          rankings, quantified in the academic record covered on{' '}
          <Link href="/research/crypto-wash-trading">crypto wash trading</Link>.
        </li>
        <li>
          <strong>Reward farming.</strong> Traders manufacturing volume because a token programme
          pays for it, the <Link href="/research/trade-to-earn">trade-to-earn</Link> pattern that
          consumed NFT markets in 2022.
        </li>
        <li>
          <strong>Tape painting.</strong> Classic <Link href="/research/wash-trading">wash
          trading</Link> to make an asset look alive ahead of a distribution.
        </li>
        <li>
          <strong>Sybil usage theatre.</strong> Fleets of wallets simulating adoption ahead of
          airdrops, which contaminates protocol usage metrics the same way.
        </li>
      </ul>

      <h2>The auditor&apos;s checklist</h2>
      <p>Before trusting any volume number, run it through five questions:</p>
      <ul>
        <li>
          <strong>Who reports it, and what do they gain?</strong> A venue ranked by its own
          self-reported figure has already answered your question.
        </li>
        <li>
          <strong>Does volume scale with funded participants?</strong> Divide volume by unique,
          independently funded actors. Manufactured markets show enormous volume per funder;
          organic ones do not.
        </li>
        <li>
          <strong>What survives self-trade filters?</strong> On-chain, remove round trips and
          buyer-funded-by-seller transactions and see what remains. The techniques are on the{' '}
          <Link href="/research/wash-trading-detection">detection page</Link>.
        </li>
        <li>
          <strong>Do the statistics look organic?</strong> First-digit distributions, size
          roundness, and timing regularity separate human order flow from scripts printing a
          target number.
        </li>
        <li>
          <strong>Does price agree?</strong> Genuine volume moves and is moved by prices.
          Volume that towers over a flat, thin market is decoration.
        </li>
      </ul>

      <PaperCallout compact />

      <h2>What my data says about trusting the tape</h2>
      <p>
        The reassuring finding in the research: markets are better at ignoring fake volume than
        the manipulators hoped. Across NFT collections, wash volumes showed no significant
        relationship with genuine future volumes; buyers did not, in aggregate, chase the fake
        prints. The unflattering corollary: the fake volume kept being printed anyway, because
        venues were paying for it directly. Both facts belong in your model of any market
        statistic: the crowd is hard to fool for long, and the statistic will still be corrupted
        wherever corrupting it is subsidised.
      </p>
      <p>
        For the NFT-specific numbers, see{' '}
        <Link href="/research/nft-wash-trading">NFT wash trading</Link>. For the umbrella view of
        everything that distorts these markets, see{' '}
        <Link href="/research/nft-market-manipulation">NFT market manipulation</Link>.
      </p>
    </ArticleShell>
  );
}
