import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle, paper } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('is-wash-trading-illegal');

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
    q: 'Is wash trading illegal in the United States?',
    a: 'In regulated markets, yes. The Commodity Exchange Act has prohibited wash sales in futures since 1936, and in securities markets wash trading is manipulation under the Exchange Act and SEC Rule 10b-5. In crypto and NFT markets, enforcement increasingly reaches the same conduct through fraud and manipulation theories.',
  },
  {
    q: 'Is wash trading illegal in the EU?',
    a: 'Yes for instruments covered by the Market Abuse Regulation, which bans trades that give false or misleading signals of supply, demand, or price. The MiCA regulation extends an equivalent market-abuse regime to crypto-assets across the EU.',
  },
  {
    q: 'Is NFT wash trading illegal?',
    a: 'It sits in a genuine gap: most NFTs are not clearly securities or commodities derivatives, so the classic statutes do not automatically apply. But prosecutors have used wire fraud and money-laundering theories for crypto wash trading, and tax law independently penalises fabricated losses.',
  },
  {
    q: 'Has anyone been prosecuted for crypto or NFT wash trading?',
    a: 'Yes. US authorities have brought cases involving wash trading of crypto assets, including actions against token market-making firms and traders who manufactured volume, typically charged as fraud, market manipulation, or both.',
  },
  {
    q: 'Is the tax wash sale rule the same thing?',
    a: 'No. The IRS wash sale rule disallows loss deductions when you sell and rebuy a security within 30 days. It is a tax provision about real trades, not the manipulation offence of trading with yourself to fake volume.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        <strong>Is wash trading illegal?</strong> In regulated markets the answer has been yes for
        nearly a century. In crypto and NFT markets the honest answer is: the conduct is the same,
        the statutes are patchier, and enforcement has been catching up fast. This page maps the
        rules by market and jurisdiction, in plain language. It is an explainer by a researcher,
        not legal advice.
      </p>

      <h2>United States: the old core</h2>
      <ul>
        <li>
          <strong>Futures and commodities.</strong> The{' '}
          <a
            href="https://www.law.cornell.edu/uscode/text/7/6c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Commodity Exchange Act, 7 U.S.C. § 6c
          </a>
          , has prohibited wash sales and fictitious trades in futures since 1936. The CFTC
          enforces it, and venues themselves police matched self-trades.
        </li>
        <li>
          <strong>Securities.</strong> Wash trading is a manipulative device under the Securities
          Exchange Act of 1934 and{' '}
          <a
            href="https://www.law.cornell.edu/cfr/text/17/240.10b-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            SEC Rule 10b-5
          </a>
          . Painting the tape with self-dealing trades has anchored manipulation cases for
          decades.
        </li>
        <li>
          <strong>Tax.</strong> Separately, the{' '}
          <a
            href="https://www.irs.gov/publications/p550"
            target="_blank"
            rel="noopener noreferrer"
          >
            IRS wash sale rule
          </a>{' '}
          disallows loss deductions on quick sell-and-rebuy round trips. Different rule, different
          purpose; the shared word causes endless confusion, untangled on the{' '}
          <Link href="/research/wash-trading">wash trading explainer</Link>.
        </li>
      </ul>

      <h2>European Union</h2>
      <p>
        The{' '}
        <a
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014R0596"
          target="_blank"
          rel="noopener noreferrer"
        >
          Market Abuse Regulation (596/2014)
        </a>{' '}
        prohibits transactions that give false or misleading signals as to supply, demand, or
        price, which is wash trading&apos;s entire job description. For crypto-assets outside
        traditional instruments, the{' '}
        <a
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114"
          target="_blank"
          rel="noopener noreferrer"
        >
          MiCA regulation (2023/1114)
        </a>{' '}
        imports an equivalent market-abuse regime, banning manipulation on crypto trading venues
        across the EU as its provisions phase in.
      </p>

      <h2>Crypto and NFTs: the gap and how it closes</h2>
      <p>
        The awkward truth my research engages directly: much NFT wash trading happened in a
        regulatory in-between. Most NFTs are not obviously securities, not commodity derivatives,
        and traded on venues no surveillance obligation touched. Three forces have been closing
        the gap:
      </p>
      <ul>
        <li>
          <strong>Fraud statutes stretch.</strong> US prosecutors have charged crypto wash trading
          as wire fraud and market manipulation, including actions against market-making firms
          that manufactured token volume for clients. The theory: fake volume deceives the people
          who rely on it, whatever the asset&apos;s classification.
        </li>
        <li>
          <strong>Venues internalise the rules.</strong> Exchanges and marketplaces increasingly
          filter self-financed trades from rewards and rankings, less from virtue than from
          having been the counterparty paying for the fake volume, as the{' '}
          <Link href="/research/looksrare-wash-trading">LooksRare episode</Link> made vivid.
        </li>
        <li>
          <strong>Tax authorities notice fabricated losses.</strong> Loss-harvesting through
          self-trades invites scrutiny wherever the wash sale logic applies, and NFT-specific
          guidance keeps tightening.
        </li>
      </ul>

      <PaperCallout compact />

      <h2>Why legality lags the conduct</h2>
      <p>
        Wash trading is defined by intent and common control, both of which are facts about
        people, while blockchains record only addresses. That is why the empirical work matters
        for the legal debate: the methods on the{' '}
        <Link href="/research/wash-trading-detection">detection page</Link> show common control
        can be inferred at scale from funding trails, and{' '}
        <a href={paper.ssrnUrl} target="_blank" rel="noopener noreferrer">
          {paper.title}
        </a>{' '}
        shows the economic motive is usually not mystery but arithmetic: rewards paid per unit of
        volume. Regulation aimed at the reward design, rather than only at the traders, targets
        the part of the machine that actually pays for the manipulation.
      </p>
      <p>
        For the scale of the phenomenon the rules are chasing, see{' '}
        <Link href="/research/nft-wash-trading">NFT wash trading: scale and motives</Link>.
      </p>
    </ArticleShell>
  );
}
