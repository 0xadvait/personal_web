import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle, paper } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('wash-trading-detection');

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
    q: 'How do you detect wash trading on a blockchain?',
    a: 'Start from the definition: no genuine change in ownership or funding. Detection clusters wallets by shared funding sources, flags round trips where a token returns to its origin, and scores counterparties that trade with each other far more often than random matching would predict.',
  },
  {
    q: 'What data do you need to detect wash trading?',
    a: 'For NFTs: complete transfer and sale logs, wallet funding histories, and marketplace metadata such as reward schedules. All of it is public on-chain, which is why NFT markets are a better detection laboratory than centralised exchanges that publish only aggregate volume.',
  },
  {
    q: 'Can wash trading detection be evaded?',
    a: 'Partially. Sophisticated actors split funding across exchanges, add hops, and randomise timing. But evasion is costly, and incentive-driven wash traders usually do not bother: when the reward per unit of volume is fixed, extra obfuscation only reduces the margin.',
  },
  {
    q: 'What statistical tests reveal fake volume?',
    a: 'Distributional tests such as first-significant-digit (Benford) checks, trade-size roundness, clustered timing, and the ratio of volume to unique funded participants. None alone is proof; together with graph evidence they separate organic from manufactured activity.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        <strong>Wash trading detection</strong> answers one question: did this trade change
        anything real? A genuine trade transfers an asset between independent decision-makers who
        each face real economics. A wash trade only rearranges an actor&apos;s own holdings while
        emitting the public signals of a market. Detection is the craft of telling the two apart
        from data, without the power to subpoena anyone.
      </p>
      <p>
        In regulated equities and futures, surveillance teams see account ownership directly, so
        matched trades between related accounts are flagged mechanically. On public blockchains
        ownership is pseudonymous, and the work shifts to inference. That inference is the
        methodological backbone of my paper{' '}
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">
          {paper.title}
        </a>
        , and this page describes the toolkit in the order a practitioner would apply it.
      </p>

      <h2>1. Graph structure: who trades with whom</h2>
      <p>
        Build the trade graph: wallets as nodes, sales as directed edges. Wash trading produces
        shapes organic trading rarely does:
      </p>
      <ul>
        <li>
          <strong>Self-loops and round trips.</strong> A token that returns to its origin wallet,
          especially quickly and repeatedly, is the canonical flag. In NFT data the token&apos;s
          full custody chain is visible, so round trips are directly enumerable.
        </li>
        <li>
          <strong>Closed cliques.</strong> Small sets of wallets that trade overwhelmingly with
          each other, at volumes wildly out of proportion to their interaction with the rest of
          the market.
        </li>
        <li>
          <strong>Improbable reciprocity.</strong> Counterparty pairs that alternate buyer and
          seller roles far more often than random matching in a large market would predict.
        </li>
      </ul>

      <h2>2. Funding forensics: who pays for the buyer</h2>
      <p>
        Graph shapes can be defeated by using fresh wallets for every trade. Funding analysis
        catches that: cluster wallets by the origin of their gas and purchase capital. When the
        buyer&apos;s ETH arrived from the seller, from a common parent wallet, or from the same
        exchange withdrawal minutes earlier, independence fails no matter how new the address is.
        Funding-source clustering is the single highest-yield technique in NFT forensics, because
        creating wallets is free but capitalising them leaves a trail.
      </p>

      <h2>3. Statistical fingerprints</h2>
      <p>
        Manufactured activity has different statistics from organic activity. Useful tests
        include first-significant-digit distributions against Benford&apos;s expectation,
        unnatural roundness in trade sizes, mechanical regularity in inter-trade times, and a
        volume-to-unique-funders ratio that explodes when few actors print many trades. Cong, Li,
        Tang and Yang applied this family of tests to centralised exchanges in{' '}
        <a
          href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3530220"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crypto Wash Trading
        </a>{' '}
        and attributed the majority of reported volume on many unregulated venues to wash
        trading. The same logic transfers to NFT markets with the advantage that individual
        trades, not just aggregates, are observable, as in von Wachter et al.&apos;s{' '}
        <a href="https://arxiv.org/abs/2202.03866" target="_blank" rel="noopener noreferrer">
          transaction-level NFT study
        </a>
        .
      </p>

      <h2>4. Incentive context: what the venue pays for</h2>
      <p>
        The cheapest detector is knowing where to look. Wash trading concentrates where a reward
        keys off volume: token emissions per traded dollar, fee rebates, leaderboard placement,
        airdrop eligibility. In my data, flagged activity clustered overwhelmingly on venues with{' '}
        <Link href="/research/looksrare-wash-trading">token-based incentives</Link>, and thinned
        out where no such subsidy existed. If you must triage a market with limited compute, sort
        venues by reward design before running a single graph query.
      </p>

      <PaperCallout compact />

      <h2>Failure modes and honest caveats</h2>
      <ul>
        <li>
          <strong>False positives.</strong> Legitimate behaviour mimics wash patterns: moving
          tokens between one&apos;s own hot and cold wallets, market-maker inventory shuffling,
          collateral migrations. Filters need allowlists for known custodial and protocol flows.
        </li>
        <li>
          <strong>False negatives.</strong> A determined manipulator with patient capital, many
          exchange accounts, and randomised behaviour can stay under any threshold. Detection
          bounds the phenomenon from below.
        </li>
        <li>
          <strong>Aggregation hides everything.</strong> Volume-level statistics from venues that
          do not publish trades cannot be audited at all. Transparency is the precondition;
          blockchains provide it, most centralised venues do not.
        </li>
      </ul>
      <p>
        For what detection implies at market scale, see{' '}
        <Link href="/research/nft-wash-trading">NFT wash trading: scale and motives</Link>. For
        what happens to those who are caught, see{' '}
        <Link href="/research/is-wash-trading-illegal">Is wash trading illegal?</Link>
      </p>
    </ArticleShell>
  );
}
