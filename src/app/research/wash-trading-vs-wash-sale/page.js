import Link from 'next/link';
import ArticleShell, { PaperCallout } from '@/components/research/ArticleShell';
import { getArticle } from '@/lib/research';
import { siteUrl } from '@/lib/site';

const article = getArticle('wash-trading-vs-wash-sale');

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
    q: 'What is the difference between wash trading and a wash sale?',
    a: 'Wash trading is market manipulation: trading with yourself to fake activity, illegal in regulated markets. A wash sale is a tax event: selling at a loss and rebuying within 30 days, which is legal but disallows the loss deduction under IRS rules.',
  },
  {
    q: 'Does the wash sale rule apply to crypto?',
    a: 'Historically the US wash sale rule covered securities, and crypto classified as property fell outside it, enabling aggressive loss harvesting. Legislative proposals have repeatedly sought to close this, so check current-year guidance before relying on the gap.',
  },
  {
    q: 'Can one transaction be both?',
    a: 'Yes. Selling an asset to your own second wallet at a loss and buying it back is a wash trade in form, and if done to book the loss it is also the behaviour wash sale rules target. In that overlap you can face manipulation and tax exposure simultaneously.',
  },
  {
    q: 'Which one is illegal?',
    a: 'Wash trading is prohibited in regulated markets as manipulation. A wash sale is not illegal; the rule simply denies the tax benefit. Misreporting a wash sale to claim the disallowed loss, however, crosses into tax fraud.',
  },
];

export default function Page() {
  return (
    <ArticleShell article={article} faqs={faqs}>
      <p>
        <strong>Wash trading</strong> and the <strong>wash sale rule</strong> share a word and
        almost nothing else, and the collision generates confusion in every crypto tax thread
        ever written. The short version: wash trading is a manipulation offence about faking
        market activity; a wash sale is a tax concept about harvesting losses. Different conduct,
        different law, different enforcer, different consequences.
      </p>

      <h2>Wash trading: the manipulation</h2>
      <p>
        A wash trade is a transaction where the buyer and seller are effectively the same actor,
        executed so the market records activity that involves no real change of ownership. The
        purpose is the appearance: volume, liquidity, price prints. In regulated futures and
        securities markets it has been prohibited for roughly a century, and the full mechanics
        are on the <Link href="/research/wash-trading">wash trading explainer</Link>. The
        enforcer is a market regulator: the CFTC, the SEC, or an exchange&apos;s own
        surveillance. The victim is anyone who relied on the faked signal.
      </p>

      <h2>The wash sale: the tax rule</h2>
      <p>
        A wash sale needs no second identity and no deception. You sell an asset at a loss, then
        buy it, or something substantially identical, back within 30 days. The trades are real
        and legal. The{' '}
        <a href="https://www.irs.gov/publications/p550" target="_blank" rel="noopener noreferrer">
          IRS rule
        </a>{' '}
        simply says: that loss does not count against your taxes, because you never really left
        the position. The enforcer is the tax authority, and the only party affected is you and
        your deduction.
      </p>

      <h2>Side by side</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Wash trading</th>
              <th>Wash sale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What it is</td>
              <td>Trading with yourself to fake activity</td>
              <td>Selling at a loss, rebuying within 30 days</td>
            </tr>
            <tr>
              <td>Legal status</td>
              <td>Prohibited manipulation in regulated markets</td>
              <td>Legal; loss deduction disallowed</td>
            </tr>
            <tr>
              <td>Enforcer</td>
              <td>CFTC, SEC, venue surveillance</td>
              <td>IRS and counterparts</td>
            </tr>
            <tr>
              <td>Counterparty</td>
              <td>Yourself, disguised</td>
              <td>The real market</td>
            </tr>
            <tr>
              <td>Typical motive</td>
              <td>Fake volume, rewards, price prints</td>
              <td>Tax loss harvesting</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Where crypto tangles the two</h2>
      <p>
        Crypto made the confusion practical rather than pedantic. Because US law long treated
        crypto as property rather than securities, the wash sale rule&apos;s 30-day window did
        not clearly apply, and harvesting losses through instant sell-and-rebuy became a
        mainstream strategy. Meanwhile actual wash trading, self-dealing for fake volume,
        exploded in NFT markets for reasons that had nothing to do with tax: token rewards paid
        for volume, as documented in{' '}
        <Link href="/research/looksrare-wash-trading">the LooksRare episode</Link> and measured
        in my paper. When a self-trade books a loss and farms a reward simultaneously, both
        regimes can apply to a single transaction, which is the one genuinely interesting overlap
        between the two concepts.
      </p>

      <PaperCallout compact />

      <p>
        For the manipulation side in depth, continue with{' '}
        <Link href="/research/wash-trading">what is wash trading</Link> and{' '}
        <Link href="/research/is-wash-trading-illegal">is wash trading illegal</Link>. For how
        fake activity is unmasked in data, see{' '}
        <Link href="/research/wash-trading-detection">detection methods</Link>.
      </p>
    </ArticleShell>
  );
}
