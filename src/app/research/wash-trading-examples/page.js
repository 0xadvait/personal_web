import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle, paper } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('wash-trading-examples');

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
    q: 'What is a simple example of wash trading?',
    a: 'A trader controls wallets A and B. Wallet A lists an NFT for 100 ETH; wallet B, funded by the same person, buys it. Marketplaces record a 100 ETH sale, yet nothing changed hands economically. Repeat daily and the collection charts as a top mover.',
  },
  {
    q: 'What is the most famous wash trading case?',
    a: 'Depends on the market. For equities, the 1920s pool operations that preceded the 1934 Exchange Act. For crypto exchanges, the venue-level volume inflation quantified by Cong, Li, Tang and Yang. For NFTs, the LooksRare trade-to-earn era of 2022.',
  },
  {
    q: 'How were NFT wash traders caught?',
    a: 'By their funding trails. Public block data lets analysts cluster wallets financed from one source and enumerate tokens that loop back to their origin. The methods are detailed on the wash trading detection page.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        Definitions only go so far;{' '}
        <strong>wash trading makes most sense through examples</strong>. Here are five episodes,
        arranged so the economics escalate: from painting the tape for buyers, to farming rewards
        from the venue itself. Together they cover nearly every motive documented in{' '}
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">
          {paper.title}
        </a>
        .
      </p>

      <h2>1. The stock pools of the 1920s</h2>
      <p>
        Before the Securities Exchange Act of 1934, operator pools coordinated matched orders:
        members traded a stock among themselves at rising prices, the tape advertised the action,
        outsiders piled in, the pool distributed into the demand it had manufactured. The
        practice was so central to the era&apos;s manipulation that outlawing fictitious trades
        became a design goal of the 1934 Act and the{' '}
        <a
          href="https://www.law.cornell.edu/uscode/text/7/6c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Commodity Exchange Act
        </a>
        . Motive: lure real buyers. Detection: account-level surveillance, eventually.
      </p>

      <h2>2. Crypto exchanges ranking themselves upward</h2>
      <p>
        Through the late 2010s, exchange rankings sorted by self-reported volume, and volume was
        free to print. Cong, Li, Tang and Yang&apos;s{' '}
        <a
          href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3530220"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crypto Wash Trading
        </a>{' '}
        showed statistically that most reported volume on many unregulated venues failed the
        fingerprints of genuine trading. Motive: rankings and listing fees. Detection:
        Benford-style distributional tests. Full story on{' '}
        <Link href="/research/crypto-wash-trading">crypto wash trading</Link>.
      </p>

      <h2>3. LooksRare and the trade-to-earn machine</h2>
      <p>
        January 2022: LooksRare pays LOOKS tokens pro rata to trading volume. Traders respond by
        selling NFTs between their own wallets at gigantic prices, at times making the venue&apos;s
        reported volume a multiple of OpenSea&apos;s with a fraction of the genuine activity.
        Motive: harvest emissions, no deceived buyer required. Detection: trivial, and nobody hid.
        The full <Link href="/research/looksrare-wash-trading">case study</Link> explains why
        this episode is the cleanest natural experiment in the literature.
      </p>

      <h2>4. Floor games in illiquid collections</h2>
      <p>
        A thin NFT collection has a reference price set by a handful of prints. Self-trades at
        chosen prices manufacture a rising floor, against which the manipulator borrows, sells
        into, or markets new mints. Motive: a mark-to-fiction price. Detection: round-trip custody
        chains and self-financed buyers, covered in the{' '}
        <Link href="/research/nft-market-manipulation">manipulation taxonomy</Link>.
      </p>

      <h2>5. Airdrop and points farming</h2>
      <p>
        The modern default. Whenever a protocol announces, or is rumoured to plan, rewards keyed
        to usage, volume appears to meet it: self-trades, circular flows, sybil wallet fleets.
        It is the LooksRare logic generalised from one marketplace to the whole industry, and it
        is why <Link href="/research/fake-trading-volume">volume statistics</Link> need auditing
        before use. Motive: expected token allocations. Detection: funding graphs across wallet
        fleets.
      </p>

      <PaperCallout compact />

      <h2>The pattern behind the examples</h2>
      <p>
        Read in sequence, the five episodes make one argument: wash trading follows the payoff.
        When the payoff was other people&apos;s buying, it faded as surveillance improved. When
        venues started paying for volume directly, manipulation stopped needing victims at the
        point of trade and scaled like any subsidy harvest. That shift, from deception to
        incentive farming, is the central finding of the paper, and the reason mechanism design
        now matters more than tape-watching. Continue with{' '}
        <Link href="/research/trade-to-earn">trade-to-earn economics</Link> or the{' '}
        <Link href="/research/wash-trading">full wash trading explainer</Link>.
      </p>
    </ArticleShell>
  );
}
