import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const pillars = [
  {
    k: 'Trust layer',
    v: 'Make the run checkable.',
    d: 'If an agent trades, updates memory, or changes access, you should know which model ran, where it ran, and what came back.',
    proof: 'TEE attestation, signed outputs, execution trails',
  },
  {
    k: 'Memory layer',
    v: 'Let context move with the user.',
    d: "Good agents don't get to forget everything every session, and users shouldn't be stuck in one assistant just to keep their state.",
    proof: 'portable context across models and products',
  },
  {
    k: 'Settlement layer',
    v: 'Put real actions on neutral rails.',
    d: "When agents touch money, reputation, or access, the record can't depend on the app operator staying honest.",
    proof: 'external commitments for actions that need accountability',
  },
];

const beforeAfter = [
  ['Today', 'black-box chat', 'trust me'],
  ['Next', 'agent workflows', 'verify it'],
];

const datedCalls = [
  {
    made: '14 Oct 2024',
    source: 'The State of Edge AI',
    sourceHref: 'https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf',
    call:
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
    source: 'The AiFi Thesis',
    sourceHref: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
    call:
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
    source: 'The AiFi Thesis',
    sourceHref: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
    call:
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
    <section id="thesis" className="relative border-t border-border py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          title="Thesis"
          lede="AI agents are moving from chat into real work. The infrastructure around them is still too trust-me."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
          <Reveal>
            <div className="border-y border-border py-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Operating belief
              </div>
              <p className="mt-5 font-serif text-[22px] leading-[1.35] text-fg sm:text-[28px]">
                The winners won&apos;t be agents that sound smarter. They&apos;ll be systems you
                can check after they do the work.
              </p>
              <p className="mt-5 font-serif text-base leading-[1.65] text-fg-muted sm:text-[17px]">
                That means execution you can verify, memory users can carry, and economic rails
                that leave a record.
              </p>

              <dl className="mt-8 divide-y divide-border-soft border-y border-border">
                {beforeAfter.map(([label, system, promise]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[4.5rem_1fr] gap-4 py-4 sm:grid-cols-[5.5rem_1fr_6rem]"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt">
                      {label}
                    </dt>
                    <dd className="font-serif text-[16px] leading-snug text-fg">{system}</dd>
                    <dd className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted sm:text-right">
                      {promise}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal>
            <ol className="grid gap-4">
              {pillars.map((pillar, index) => (
                <li
                  key={pillar.k}
                  className="group grid gap-5 rounded-[3px] border border-border bg-surface px-5 py-5 transition-all hover:border-accent hover:shadow-[0_18px_50px_rgba(29,37,40,0.06)] sm:grid-cols-[4rem_1fr] sm:px-6 sm:py-6"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-alt sm:pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      {pillar.k}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl leading-snug text-fg transition-colors group-hover:text-accent">
                      {pillar.v}
                    </h3>
                    <p className="mt-3 max-w-2xl font-serif text-[15px] leading-[1.6] text-fg-muted">
                      {pillar.d}
                    </p>
                    <div className="mt-5 border-l border-accent/35 pl-4 font-serif text-[14px] leading-[1.45] text-fg-dim">
                      {pillar.proof}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-12 border-y border-border py-6 sm:mt-16 sm:py-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-14">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  Calls that aged well
                </div>
                <p className="mt-4 max-w-xl font-serif text-[21px] leading-[1.35] text-fg sm:text-[27px]">
                  The point is the pattern, not the timestamp: write down the pressure, then watch
                  where serious companies put product and capital.
                </p>
              </div>

              <ol className="divide-y divide-border-soft border-t border-border lg:border-t-0">
                {datedCalls.map((item, index) => (
                  <li
                    key={`${item.source}-${item.evidence ?? item.evidenceLinks?.[0]?.label}`}
                    className="grid gap-4 py-6 sm:grid-cols-[4.25rem_1fr] sm:gap-5 sm:px-3"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt sm:pt-1">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <a
                          href={item.sourceHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent hover:underline underline-offset-[3px]"
                        >
                          {item.made}
                        </a>
                        <span
                          aria-hidden
                          className="hidden h-px w-7 bg-accent/30 sm:inline-block"
                        />
                        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-fg-dim sm:text-[10px]">
                          {item.source}
                        </span>
                      </div>
                      <p className="mt-3 max-w-3xl font-serif text-[21px] leading-[1.25] text-fg sm:text-[27px]">
                        {item.call}
                      </p>
                      <div className="mt-4 border-l border-accent/30 pl-4">
                        <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-fg-dim sm:text-[10px]">
                          Later signal · {item.after}
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
