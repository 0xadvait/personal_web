import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const datedPredictions = [
  {
    made: '14 Oct 2024',
    year: '2024',
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
    made: '28 Feb 2025',
    year: '2025',
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
    made: '28 Feb 2025',
    year: '2025',
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

const soloPaper = {
  year: '2023',
  title: 'The Economics of Wash Trading',
  href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610162',
  desc:
    'Solo-authored SSRN paper on NFT wash trading: token incentives, fake volume, and whether any of it translated into real trading.',
  citations: [
    {
      label: 'Journal of Banking & Finance',
      href: 'https://www.sciencedirect.com/science/article/abs/pii/S0378426625001499',
    },
    {
      label: 'European Journal of Finance',
      href: 'https://doi.org/10.1080/1351847X.2026.2624485',
    },
    {
      label: 'NBER',
      href: 'https://www.nber.org/papers/w34837',
    },
    {
      label: 'Scholar citations',
      href: 'https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2223007016064564882&as_sdt=5',
    },
  ],
};

export default function Thesis() {
  return (
    <section id="thesis" className="relative border-t border-border py-14 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          title="Early research"
          lede={
            <>
              Before OpenGradient, I wrote two SSRN papers, on{' '}
              <a
                href="/research/the-economics-of-wash-trading"
                className="text-accent hover:underline underline-offset-[3px]"
              >
                NFT wash trading
              </a>{' '}
              and the{' '}
              <a
                href="/research/beyond-ipos"
                className="text-accent hover:underline underline-offset-[3px]"
              >
                private-to-public-to-private cycle
              </a>
              , plus reports on{' '}
              <a
                href="/research/the-state-of-edge-ai"
                className="text-accent hover:underline underline-offset-[3px]"
              >
                edge AI
              </a>{' '}
              and{' '}
              <a
                href="/research/the-aifi-thesis"
                className="text-accent hover:underline underline-offset-[3px]"
              >
                AI x DeFi
              </a>
              .
            </>
          }
        />

        <Reveal>
          <div className="border-y border-border py-2 sm:py-4">
            <article className="grid gap-4 py-7 sm:grid-cols-[4.25rem_1fr] sm:gap-5 sm:px-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt sm:pt-1">
                {soloPaper.year}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                  <a
                    href={soloPaper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent hover:underline underline-offset-[3px]"
                  >
                    Solo paper · SSRN
                  </a>
                  <span aria-hidden className="hidden h-px w-7 bg-accent/30 sm:inline-block" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-fg-dim sm:text-[10px]">
                    Market structure
                  </span>
                  <a
                    href="/research/the-economics-of-wash-trading"
                    className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt hover:underline underline-offset-[3px]"
                  >
                    Overview + findings →
                  </a>
                </div>
                <h3 className="mt-3 max-w-3xl font-serif text-[21px] leading-[1.25] text-fg sm:text-[27px]">
                  <a
                    href={soloPaper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent hover:underline underline-offset-[4px]"
                  >
                    {soloPaper.title}
                  </a>
                </h3>
                <p className="mt-3 max-w-2xl font-serif text-[15px] leading-[1.55] text-fg-muted sm:text-[16px]">
                  {soloPaper.desc}
                </p>
                <div className="mt-4 border-l border-accent/30 pl-4">
                  <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-fg-dim sm:text-[10px]">
                    Cited by
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {soloPaper.citations.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex font-mono text-[10px] uppercase tracking-[0.14em] text-accent hover:underline underline-offset-[3px]"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <ol className="divide-y divide-border-soft border-t border-border">
              {datedPredictions.map((item, index) => (
                <li
                  key={`${item.source}-${item.evidence ?? item.evidenceLinks?.[0]?.label}`}
                  className="grid gap-4 py-7 sm:grid-cols-[4.25rem_1fr] sm:gap-5 sm:px-3"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt sm:pt-1">
                    {item.year}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        Prediction {String(index + 1).padStart(2, '0')}
                      </span>
                      <span aria-hidden className="hidden h-px w-7 bg-accent/30 sm:inline-block" />
                      <a
                        href={item.sourceHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim hover:text-accent hover:underline underline-offset-[3px]"
                      >
                        {item.made}
                      </a>
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-fg-dim sm:text-[10px]">
                        {item.source}
                      </span>
                    </div>
                    <p className="mt-3 max-w-3xl font-serif text-[21px] leading-[1.25] text-fg sm:text-[27px]">
                      {item.prediction}
                    </p>
                    <div className="mt-4 border-l border-accent/30 pl-4">
                      <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-fg-dim sm:text-[10px]">
                        What happened · {item.after}
                      </div>
                      <p className="mt-2 max-w-2xl font-serif text-[15px] leading-[1.55] text-fg-muted sm:text-[16px]">
                        {item.happened}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                        {(item.evidenceLinks ?? [
                          { label: item.evidence, href: item.evidenceHref },
                        ]).map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex font-mono text-[10px] uppercase tracking-[0.14em] text-accent hover:underline underline-offset-[3px]"
                          >
                            {link.label} ↗
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="/research"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent hover:underline underline-offset-[3px]"
            >
              All research and publications <span aria-hidden>→</span>
            </a>
            <span aria-hidden className="hidden h-px w-8 bg-accent/30 sm:inline-block" />
            <a
              href="https://scholar.google.com/citations?user=tGFdvmgAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-dim hover:text-accent transition-colors"
            >
              Google Scholar ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
