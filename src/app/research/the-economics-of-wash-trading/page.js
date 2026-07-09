import Link from 'next/link';
import ArticleShell, { CiteBlock } from '@/components/research/ArticleShell';
import { getArticle, paper } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('the-economics-of-wash-trading');

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
  // Highwire Press tags so Google Scholar can cluster this overview with the
  // SSRN and ResearchGate versions of the paper.
  other: {
    citation_title: paper.title,
    citation_author: 'Jayant, Advait',
    citation_publication_date: '2023/10/22',
    citation_online_date: '2023/11/20',
    citation_doi: paper.doi,
    citation_abstract_html_url: `${siteUrl}/research/the-economics-of-wash-trading`,
    citation_technical_report_institution: 'SSRN',
    citation_technical_report_number: `SSRN ${paper.abstractId}`,
  },
};

const faqs = [
  {
    q: 'Where can I read The Economics of Wash Trading?',
    a: 'The full 85-page paper is free to download on SSRN at ssrn.com/abstract=4610162. The permanent DOI is 10.2139/ssrn.4610162. This page summarises the questions, method, and findings.',
  },
  {
    q: 'What is the main finding of the paper?',
    a: 'Wash trading in NFT markets is driven mainly by token-based incentives on exchanges such as LooksRare rather than by attempts to lure buyers. Wash trading volume shows no significant relationship with real trading volume on future days, so the fake volume largely fails as advertising.',
  },
  {
    q: 'How should I cite the paper?',
    a: 'Jayant, Advait, The Economics of Wash Trading (October 22, 2023). Available at SSRN: https://ssrn.com/abstract=4610162 or via DOI: 10.2139/ssrn.4610162.',
  },
  {
    q: 'Who has cited The Economics of Wash Trading?',
    a: 'The paper has been cited in the Journal of Banking & Finance, the European Journal of Finance, and an NBER working paper, among others. A live list is on Google Scholar.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs} isPaperPage>
      <p>
        <strong>The Economics of Wash Trading</strong> is my solo-authored research paper on
        manipulation in non-fungible token (NFT) markets, written in October 2023 and available on{' '}
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">
          SSRN as abstract 4610162
        </a>
        . Across 85 pages it asks a blunt question: when someone trades an asset with themselves
        to print volume, what are they actually buying, and does it work?
      </p>

      <h2>The question</h2>
      <p>
        NFT markets in 2021 and 2022 reported extraordinary trading volumes, and a meaningful share
        of those prints never involved two independent people. A{' '}
        <Link href="/research/wash-trading">wash trade</Link> is a transaction in which the buyer
        and the seller are, economically, the same actor. On a public blockchain these trades sit
        in plain sight once you connect the wallets, which makes NFT markets an unusually clean
        laboratory for studying a manipulation that is as old as organised exchanges.
      </p>
      <p>There are two candidate motives, and they imply different economics:</p>
      <ul>
        <li>
          <strong>Advertising.</strong> Wash trades inflate a collection&apos;s apparent volume and
          price history to make it look liquid and in demand, hoping real buyers follow the signal.
        </li>
        <li>
          <strong>Incentive farming.</strong> Some marketplaces paid traders in their own tokens in
          proportion to trading volume. Self-trading then becomes a direct claim on token
          emissions, no victim required at the moment of the trade.
        </li>
      </ul>
      <p>
        The paper measures which motive dominates, and what wash trading does to the variables a
        manipulator would want to move: real volumes and average prices in subsequent days.
      </p>

      <h2>What the data shows</h2>
      <p>The findings, in the order the paper builds them:</p>
      <ul>
        <li>
          There is a nuanced interplay between wash trading volumes, prices, and subsequent genuine
          activity, but <strong>no significant relationship between wash trading volumes and real
          trading volumes on future days</strong>. As advertising, fake volume largely fails.
        </li>
        <li>
          Wash traders <strong>predominantly exploit token-based incentives</strong> on the
          exchanges that offer them. Where volume is directly rewarded, as on{' '}
          <Link href="/research/looksrare-wash-trading">LooksRare</Link>, wash trading concentrates,
          and the rewards appear to influence real trading activity on those venues.
        </li>
        <li>
          The results support reading most NFT wash trading as <strong>rational farming of
          poorly designed incentives</strong> rather than as successful demand manufacturing, which
          is exactly where policy and marketplace design should aim.
        </li>
      </ul>
      <p>
        The interpretation matters for how seriously one takes headline NFT statistics. Reported
        volume is not a measurement of demand; it is a measurement of what the fee and reward
        structure made profitable to print. I walk through the scale estimates on the{' '}
        <Link href="/research/nft-wash-trading">NFT wash trading</Link> page and the market
        plumbing on the <Link href="/research/nft-markets">NFT markets</Link> page.
      </p>

      <h2>Method, in brief</h2>
      <p>
        The study identifies suspicious activity from public blockchain data, then applies
        statistical tests to the relationship between wash volumes, real volumes, and prices at the
        collection level over time. The design addresses the obvious confound that active
        collections attract both genuine and fake volume, and it exploits differences between
        marketplaces with and without token rewards as a source of identification. If you work on{' '}
        <Link href="/research/wash-trading-detection">wash trading detection</Link>, the
        methodological sections describe the filters and their failure modes.
      </p>

      <div className="aside-note">
        Keywords: {paper.keywords.join(' · ')}. JEL classification: {paper.jel.join(', ')}.
        Written {new Date(`${paper.dateWritten}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })},
        posted on SSRN {new Date(`${paper.datePosted}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}.
      </div>

      <h2>Abstract</h2>
      <blockquote>
        In this study, I conduct a comprehensive examination of the efficiency of non-fungible
        token (NFT) markets by analyzing the intricate relationship between wash trading
        activities, real trading volumes, and prices. Employing rigorous statistical methods, the
        research investigates the financial motivations of wash traders, assessing whether such
        practices are employed to increase the attractiveness of a collection or to capitalize on
        token-based incentives provided by specific NFT exchanges. My findings reveal a nuanced
        interplay between wash trading volumes, prices, and their subsequent effects on genuine
        trading volumes and average prices, with no significant relationship observed between wash
        trading volumes and real trading volumes in future days. Furthermore, the results
        demonstrate that wash traders predominantly exploit token-based incentives on exchanges,
        such as LooksRare, where wash trading rewards appear to influence real trading activity.
        This research contributes to a deeper understanding of NFT market dynamics and the role of
        wash trading, providing valuable insights that can inform policy discussions and aid in the
        development of a more transparent and efficient NFT ecosystem.
      </blockquote>
      <p>
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">
          <strong>Download the full paper on SSRN ↗</strong>
        </a>{' '}
        or use the permanent DOI link:{' '}
        <a href={paper.doiUrl} target="_blank" rel="noopener noreferrer">
          {paper.doiUrl.replace('https://', '')}
        </a>
        . The paper is also indexed on{' '}
        <a href={paper.researchGateUrl} target="_blank" rel="noopener noreferrer">
          ResearchGate
        </a>{' '}
        and{' '}
        <a href={paper.scholarRecordUrl} target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>
        , which tracks the{' '}
        <a href={paper.scholarCitedByUrl} target="_blank" rel="noopener noreferrer">
          live citation list
        </a>
        .
      </p>

      <h2>The talk</h2>
      <p>
        I presented the research at <strong>EthCC 2023 in Paris</strong> as{' '}
        <a href={paper.video.url} target="_blank" rel="noopener noreferrer">
          {paper.video.title}
        </a>
        . The talk is a 20-minute version of the argument: how wash trades are identified
        on-chain, why token incentives rather than buyer deception explain the volume, and what
        that means for how seriously to take NFT market statistics.
      </p>
      <p>
        <a href={paper.video.url} target="_blank" rel="noopener noreferrer">
          <strong>▶ Watch the EthCC talk on YouTube ↗</strong>
        </a>
      </p>

      <CiteBlock />

      <h2>Where the paper sits in the literature</h2>
      <p>
        Two strands of prior work frame the study. On centralised crypto exchanges, Cong, Li, Tang
        and Yang&apos;s{' '}
        <a
          href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3530220"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crypto Wash Trading
        </a>{' '}
        found that the majority of reported volume on many unregulated venues was wash traded. On
        NFTs specifically, von Wachter, Jensen, Regner and Ross{' '}
        <a href="https://arxiv.org/abs/2202.03866" target="_blank" rel="noopener noreferrer">
          quantified suspicious trading behaviour
        </a>{' '}
        at the transaction level. The Economics of Wash Trading extends this line by asking not
        just how much wash trading exists but what it is economically for, and by measuring whether
        it achieves anything its practitioners might want. The legal backdrop, from the Commodity
        Exchange Act to MiCA, is covered on{' '}
        <Link href="/research/is-wash-trading-illegal">the legality page</Link>.
      </p>
    </ArticleShell>
  );
}
