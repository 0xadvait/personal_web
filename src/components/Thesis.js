import { Card, Section, SectionHeading } from './ui';

const works = [
  {
    year: '2023',
    type: 'Solo paper · SSRN',
    title: 'The Economics of Wash Trading',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610162',
    overview: '/research/the-economics-of-wash-trading',
    desc:
      'An 85-page study of wash trading in NFT markets: who does it, what it moves, and why token incentives rather than price manipulation explain most of it.',
    citations: [
      {
        label: 'Journal of Banking & Finance',
        href: 'https://www.sciencedirect.com/science/article/abs/pii/S0378426625001499',
      },
      {
        label: 'European Journal of Finance',
        href: 'https://doi.org/10.1080/1351847X.2026.2624485',
      },
      { label: 'NBER', href: 'https://www.nber.org/papers/w34837' },
    ],
  },
  {
    year: '2023',
    type: 'Solo paper · SSRN',
    title: 'Beyond IPOs: The Cyclical Journey from Private to Public and Back Again',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610086',
    overview: '/research/beyond-ipos',
    desc:
      'Why companies move between private and public ownership, and what each leg of that cycle costs them.',
  },
  {
    year: '2024',
    type: 'Report',
    title: 'The State of Edge AI',
    href: 'https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf',
    overview: '/research/the-state-of-edge-ai',
    desc:
      'Where inference actually runs, and why latency, privacy, and bandwidth push useful intelligence closer to the user.',
  },
  {
    year: '2025',
    type: 'Report',
    title: 'The AiFi Thesis',
    href: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
    overview: '/research/the-aifi-thesis',
    desc:
      'AI compute as a financeable asset, and the payment rails agents need once they start transacting with each other.',
  },
];

const calls = [
  {
    year: '2024',
    made: '14 Oct 2024',
    source: 'The State of Edge AI',
    sourceHref: 'https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf',
    prediction:
      'Cloud-only AI was going to hit latency, privacy, and bandwidth walls. Useful intelligence would move closer to the user.',
    after: '9 Jun 2025',
    happened:
      'Apple opened its on-device foundation model to developers, turning local private AI into a platform feature instead of a demo.',
    evidenceLinks: [
      {
        label: 'Apple models',
        href: 'https://machinelearning.apple.com/research/apple-foundation-models-2025-updates',
      },
    ],
  },
  {
    year: '2025',
    made: '28 Feb 2025',
    source: 'The AiFi Thesis',
    sourceHref: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
    prediction:
      'AI compute would stop being just another cloud line item. Capacity itself would become something capital markets finance directly.',
    after: '24 Sep 2025 / 10 Apr 2026',
    happened:
      'Oracle moved to raise $18B of debt for AI cloud infrastructure. Blackstone later filed a public vehicle for newly built data centers.',
    evidenceLinks: [
      {
        label: 'Oracle debt',
        href: 'https://www.bloomberg.com/news/articles/2025-09-24/oracle-looks-to-raise-15-billion-from-corporate-bond-sale',
      },
      {
        label: 'Blackstone BXDC',
        href: 'https://www.blackstone.com/news/press/blackstone-digital-infrastructure-trust-announces-public-filing-of-registration-statement-with-the-sec/',
      },
    ],
  },
  {
    year: '2025',
    made: '28 Feb 2025',
    source: 'The AiFi Thesis',
    sourceHref: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
    prediction:
      'If agents were going to work with each other, they would need payment rails, spend controls, and a clean record of what happened.',
    after: '7 May 2026',
    happened:
      'AWS launched AgentCore Payments with Coinbase and Stripe, so agents can pay for APIs, MCP servers, web content, and other agents.',
    evidenceLinks: [
      {
        label: 'AWS launch',
        href: 'https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-payments-preview/',
      },
    ],
  },
];

export default function Thesis() {
  return (
    <Section id="thesis">
      <SectionHeading
        index="01"
        label="Research"
        title="Two SSRN papers, two reports,"
        tail="and a few calls that aged well."
        lede="Everything here is public. Each entry links to the original document and to a plain-language overview."
      />

      <ul className="border-t border-border">
        {works.map((w) => (
          <li key={w.title} className="grid gap-4 border-b border-border py-9 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-8">
              <div className="kicker sm:pt-2">{w.year}</div>
              <div className="min-w-0">
                <div className="kicker">{w.type}</div>
                <h3 className="mt-3 max-w-[46ch] text-[21px] font-normal leading-[1.25] tracking-[-0.015em] text-fg sm:text-[24px]">
                  <a href={w.href} target="_blank" rel="noopener noreferrer" className="link">
                    {w.title}
                  </a>
                </h3>
                <p className="mt-3 max-w-[72ch] text-[16px] leading-[1.62] text-fg-muted">
                  {w.desc}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
                  <a href={w.overview} className="link">
                    Overview and findings →
                  </a>
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fg-dim transition-colors hover:text-fg"
                  >
                    Original document ↗
                  </a>
                </div>
                {w.citations ? (
                  <div className="mt-6 rounded-[12px] border border-border-soft bg-surface px-5 py-4">
                    <div className="kicker">Cited in</div>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
                      {w.citations.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link"
                        >
                          {c.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </li>
        ))}
      </ul>

      <h3 className="mt-20 text-[26px] font-normal leading-[1.14] tracking-[-0.02em] text-fg sm:text-[32px]">
        Three calls from those reports,{' '}
        <span className="tone-soft block">and what happened next.</span>
      </h3>
      <div className="mt-10 space-y-4">
        {calls.map((c) => (
          <Card key={c.prediction} as="article" className="p-6 sm:p-8">
              <div className="grid gap-7 lg:grid-cols-2 lg:gap-12">
                <div>
                  <div className="kicker">
                    <a
                      href={c.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-fg"
                    >
                      {c.source}
                    </a>
                    <span className="mx-2 text-fg-faint" aria-hidden>
                      ·
                    </span>
                    {c.made}
                  </div>
                  <p className="mt-4 text-[19px] leading-[1.35] tracking-[-0.012em] text-fg sm:text-[21px]">
                    {c.prediction}
                  </p>
                </div>
                <div className="border-t border-border-soft pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div className="kicker">What happened · {c.after}</div>
                  <p className="mt-4 text-[16px] leading-[1.62] text-fg-muted">{c.happened}</p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px]">
                    {c.evidenceLinks.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
        ))}
      </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14.5px]">
          <a href="/research" className="link">
            All research and publications →
          </a>
          <a
            href="https://scholar.google.com/citations?user=tGFdvmgAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-dim transition-colors hover:text-fg"
          >
            Google Scholar ↗
          </a>
        </div>
    </Section>
  );
}
