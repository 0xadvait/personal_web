import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

function AdvisorLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} (opens in a new tab)`}
      className="text-fg underline decoration-fg-faint underline-offset-[3px] hover:decoration-accent hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
}

const roles = [
  {
    period: '2025 — Now',
    org: 'OpenGradient',
    href: 'https://opengradient.ai',
    title: 'Chief Strategy Officer',
    body: (
      <>
        Network for Open Intelligence — decentralized GPU + TEE coprocessor for hosting,
        executing, and verifying AI models.{' '}
        <AdvisorLink href="https://www.finsmes.com/2026/04/opengradient-raises-9-5m-in-total-funding.html">
          $9.5M seed led by a16z crypto
        </AdvisorLink>
        . Leading strategy, ecosystem, and product across the inference network and MemSync — a
        verifiable memory layer for agents across Claude, ChatGPT, Gemini, and open-source models.
      </>
    ),
  },
  {
    period: '2022 — 2025',
    org: 'Peri Labs',
    href: 'https://perilabs.net/',
    title: 'Founder & CEO',
    body: (
      <>
        Founded SuperSight (later Peri Labs).{' '}
        <AdvisorLink href="https://www.finsmes.com/2023/07/supersight-raises-1m-in-pre-seed-funding.html">
          Raised $1.5M pre-seed at $30M
        </AdvisorLink>{' '}
        from Animoca Brands, Blockchain Founders Fund, and Vayner Fund. Selected for the{' '}
        <AdvisorLink href="https://x.com/delphi_labs/status/1884256227355492775">
          Delphi Labs AI Accelerator
        </AdvisorLink>
        (with NEAR) and UT Austin&rsquo;s incubator. Advised by{' '}
        <AdvisorLink href="https://pt.linkedin.com/in/illia-polosukhin-77b6538">
          Illia Polosukhin
        </AdvisorLink>{' '}
        (NEAR),{' '}
        <AdvisorLink href="https://scholar.google.com/citations?user=SOB-2hQAAAAJ&hl=en">
          Sriram Vishwanath
        </AdvisorLink>{' '}
        (UT Austin),{' '}
        <AdvisorLink href="https://pt.linkedin.com/in/lucaprosperi">Luca Prosperi</AdvisorLink>{' '}
        (m0),{' '}
        <AdvisorLink href="https://www.linkedin.com/in/bowenli86">Bowen Li</AdvisorLink>{' '}
        (OpenAI), and{' '}
        <AdvisorLink href="https://www.linkedin.com/in/officialpaultaylor">Paul Taylor</AdvisorLink>{' '}
        (BlackRock). Designed and shipped the NL-to-SQL pipeline end-to-end to 200K+ users at 95%
        accuracy. 30+ enterprise pilots. First author of The State of Edge AI. IP acquired.
      </>
    ),
  },
  {
    period: '2019 — 2022',
    org: 'Technics Publications',
    href: null,
    title: 'Technical Author',
    body: '50+ technical publications on AI — neural networks, NLP, transfer learning, big-data infrastructure. Featured in O’Reilly Safari Books Online. 15K+ readers.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-24 md:py-32 lg:py-40 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          title="Experience"
          lede="A track record across product, research, capital, and go-to-market."
        />

        <ol>
          {roles.map((r, i) => (
            <Reveal key={r.org} delay={i * 0.05}>
              <li className="group grid gap-4 md:grid-cols-12 md:gap-10 py-8 sm:py-10 md:py-12 border-t border-border first:border-t-0 transition-colors hover:bg-surface/45 -mx-4 px-4 sm:-mx-6 sm:px-6">
                <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent md:pt-1.5">
                  {r.period}
                </div>
                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-[36px] text-fg leading-[1.1]">
                      {r.href ? (
                        <a
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${r.org} website (opens in a new tab)`}
                          className="transition-colors group-hover:text-accent hover:underline underline-offset-[4px]"
                        >
                          {r.org}
                        </a>
                      ) : (
                        r.org
                      )}
                    </h3>
                    <span className="font-serif italic text-fg-muted text-base sm:text-lg">
                      — {r.title}
                    </span>
                  </div>
                  <p className="mt-3 sm:mt-4 max-w-2xl font-serif text-[15px] sm:text-base leading-[1.65] text-fg-muted">
                    {r.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
