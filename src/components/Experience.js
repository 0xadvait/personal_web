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
        OpenGradient builds decentralized GPU + TEE infrastructure for hosting, running, and
        verifying AI models.{' '}
        <AdvisorLink href="https://www.finsmes.com/2026/04/opengradient-raises-9-5m-in-total-funding.html">
          $9.5M seed led by a16z crypto
        </AdvisorLink>
        . I work across the inference network, MemSync, ecosystem, and the products customers use.
      </>
    ),
    highlights: ['7-figure product revenue', '4,500+ hosted models', '500K+ proofs'],
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
        from Animoca Brands, Blockchain Founders Fund, and Vayner Fund. Selected through the NEAR
        Incubator for the{' '}
        <AdvisorLink href="https://x.com/delphi_labs/status/1884256227355492775">
          Delphi Labs AI Accelerator
        </AdvisorLink>
        , plus UT Austin&rsquo;s incubator. Built the NL-to-SQL pipeline end-to-end to 200K+ users
        at 95% accuracy. 30+ enterprise pilots. First author of The State of Edge AI. IP acquired.
      </>
    ),
    highlights: ['$1.5M raised', '200K+ users', '30+ pilots'],
  },
  {
    period: '2019 — 2022',
    org: 'Technics Publications',
    href: null,
    title: 'Technical Author',
    body: 'Wrote 50+ technical pieces on AI: neural networks, NLP, transfer learning, and big-data infrastructure. Featured in O’Reilly Safari Books Online. 15K+ readers.',
    highlights: ['50+ publications', '15K+ readers', 'O’Reilly Safari'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-border py-14 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          title="Experience"
          lede="I’ve mostly worked where product, research, capital, and distribution overlap."
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
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {r.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-[2px] border border-border bg-bg px-2.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-fg-dim"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
