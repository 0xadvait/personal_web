import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

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
          lede="Calls from the Edge AI and AiFi reports, plus what happened after."
        />

        <Reveal>
          <div className="border-y border-border py-2 sm:py-4">
            <ol className="divide-y divide-border-soft">
              {datedCalls.map((item, index) => (
                <li
                  key={`${item.source}-${item.evidence ?? item.evidenceLinks?.[0]?.label}`}
                  className="grid gap-4 py-7 sm:grid-cols-[4.25rem_1fr] sm:gap-5 sm:px-3"
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
      </div>
    </section>
  );
}
