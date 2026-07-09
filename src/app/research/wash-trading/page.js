import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle, paper } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('wash-trading');

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
    q: 'What is wash trading in simple terms?',
    a: 'Wash trading is buying and selling the same asset with yourself, directly or through accounts you control, so the market records trades that carry no real change of ownership. The prints inflate volume and can paint a misleading price history.',
  },
  {
    q: 'Is wash trading the same as a wash sale?',
    a: 'No. A wash sale is a tax concept: selling a security at a loss and rebuying it within 30 days, which disallows the loss deduction under IRS rules. Wash trading is market manipulation: trading with yourself to fake activity. The names are similar; the offences are different.',
  },
  {
    q: 'Why do traders wash trade?',
    a: 'Three motives dominate: making an asset look liquid and in demand so real buyers follow, farming rewards that pay per unit of volume (exchange tokens, fee rebates, ranking placement), and laundering value between wallets under the cover of ordinary trades.',
  },
  {
    q: 'Does wash trading actually move prices?',
    a: 'The evidence is mixed and mostly discouraging for manipulators. In The Economics of Wash Trading, wash volume in NFT markets showed no significant relationship with real future volume. Fake prints coordinate attention briefly, but they do not manufacture durable demand.',
  },
  {
    q: 'How is wash trading detected?',
    a: 'Surveillance looks for trades with no change in beneficial ownership: matched accounts, shared funding sources, round-trip patterns, and statistical fingerprints such as first-digit anomalies. On blockchains, wallet clustering and funding-graph analysis do most of the work.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        <strong>Wash trading</strong> is the practice of buying and selling the same asset with
        yourself, either directly or through accounts under common control, so that the market
        records activity that involves no genuine change of ownership. The tape shows trades,
        volume, sometimes a rising price. Economically, nothing happened. The point is the
        appearance: to third parties the asset looks liquid, traded, and wanted.
      </p>
      <p>
        The technique is much older than crypto. US law has prohibited wash sales in commodity
        futures since the{' '}
        <a
          href="https://www.law.cornell.edu/uscode/text/7/6c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Commodity Exchange Act of 1936
        </a>
        , and bucket-shop era stock pools used matched orders to paint the tape decades before
        that. What changed with crypto and NFT markets is the cost structure: creating a second
        identity went from opening a brokerage account to generating a wallet address, which is
        free and takes seconds.
      </p>

      <h2>The mechanics</h2>
      <p>A wash trade needs three ingredients, each trivial in unregulated markets:</p>
      <ul>
        <li>
          <strong>Two trading identities under one decision-maker.</strong> On an exchange, two
          accounts; on-chain, two wallets funded from the same source.
        </li>
        <li>
          <strong>A venue that reports activity.</strong> Volume tickers, leaderboards, trending
          pages, or any statistic that other people use as a demand signal.
        </li>
        <li>
          <strong>A payoff that scales with reported activity.</strong> Buyers lured by the fake
          signal, rewards paid per unit of volume, or a cleaner-looking price history.
        </li>
      </ul>
      <p>
        In order-book markets the classic form is the matched order: one account posts a bid, the
        sibling account hits it, and the pair repeats. In NFT markets the form is even simpler,
        because trades are bilateral: wallet A sells the token to wallet B, B sells it back or on
        to wallet C, and all three wallets trace back to one funding source. The{' '}
        <Link href="/research/wash-trading-detection">detection page</Link> covers how those traces
        are found in practice.
      </p>

      <h2>Why traders do it</h2>
      <p>
        In <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">{paper.title}</a> I
        split the motives into two testable families, and the distinction turns out to matter more
        than the headline volumes:
      </p>
      <ul>
        <li>
          <strong>Attractiveness.</strong> The manipulator wants real buyers. Fake volume and
          managed prices exist to make a collection or coin look like the crowd is already there.
          This is the folk theory of wash trading, and it is the one the data supports least.
        </li>
        <li>
          <strong>Token-based incentives.</strong> The manipulator wants the reward attached to
          trading itself. When a marketplace pays its own token per dollar of volume, every wash
          trade is a small claim on the emission schedule. The trade is profitable even if no
          third party ever looks at the chart. The{' '}
          <Link href="/research/looksrare-wash-trading">LooksRare episode</Link> is the cleanest
          natural experiment here.
        </li>
      </ul>
      <p>
        My central finding: in NFT markets, wash trading volumes showed{' '}
        <strong>no significant relationship with real trading volumes on future days</strong>,
        while wash activity concentrated exactly where token incentives paid for it. Most wash
        trading, in other words, is not failed advertising. It is successful farming.
      </p>

      <PaperCallout />

      <h2>How big is it?</h2>
      <p>
        Estimates vary by market and method, but the consistent result is that unregulated venues
        carry a large multiple of their genuine activity. Cong, Li, Tang and Yang&apos;s{' '}
        <a
          href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3530220"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crypto Wash Trading
        </a>{' '}
        estimated that well over half of reported volume on many unregulated crypto exchanges was
        wash traded. For NFTs, von Wachter and co-authors{' '}
        <a href="https://arxiv.org/abs/2202.03866" target="_blank" rel="noopener noreferrer">
          flagged a small share of transactions
        </a>{' '}
        but a large share of value on specific days, and during reward programmes the fake share of
        volume became the majority. I collect the NFT-specific numbers on the{' '}
        <Link href="/research/nft-wash-trading">NFT wash trading page</Link>.
      </p>

      <h2>Wash trading vs the tax wash sale</h2>
      <p>
        Two different things share the word wash. The <strong>wash sale rule</strong> is a tax
        provision: under{' '}
        <a
          href="https://www.irs.gov/publications/p550"
          target="_blank"
          rel="noopener noreferrer"
        >
          IRS rules
        </a>
        , selling a security at a loss and repurchasing a substantially identical one within 30
        days disallows the loss deduction. It involves real trades with the market and is legal,
        merely tax-ineffective. <strong>Wash trading</strong> is trading with yourself to
        manufacture activity, and in regulated markets it is a prohibited manipulation. Whether
        the prohibition reaches crypto and NFTs is its own question, answered at length on{' '}
        <Link href="/research/is-wash-trading-illegal">Is wash trading illegal?</Link>
      </p>

      <h2>Why it persists</h2>
      <p>
        Wash trading survives because the signal it corrupts, volume, is the cheapest signal
        markets have. Rankings sort by it, aggregators chart it, incentive programmes pay for it,
        and newcomers read it as social proof. As long as anything of value keys off reported
        volume, someone will manufacture reported volume. The durable fixes are structural:
        reward mechanisms that pay for something harder to fake, statistics that exclude
        self-financed flow, and market designs covered on the{' '}
        <Link href="/research/nft-markets">NFT markets page</Link>. The enforcement picture is
        improving too, but slowly, and mostly after the fact.
      </p>
    </ArticleShell>
  );
}
