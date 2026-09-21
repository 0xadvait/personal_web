import { Section, SectionHeading } from './ui';

function Cite({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} (opens in a new tab)`}
      className="link"
    >
      {children}
    </a>
  );
}

const roles = [
  {
    period: '2025 – Now',
    org: 'OpenGradient',
    href: 'https://opengradient.ai',
    title: 'Chief Strategy Officer',
    body: (
      <>
        I lead product strategy, customer work, and partnerships.{' '}
        <Cite href="https://www.finsmes.com/2026/04/opengradient-raises-9-5m-in-total-funding.html">
          $9.5M seed led by a16z crypto
        </Cite>
        .
      </>
    ),
  },
  {
    period: '2022 – 2025',
    org: 'Peri Labs',
    href: 'https://perilabs.net/',
    title: 'Founder & CEO',
    body: (
      <>
        Founded SuperSight, later Peri Labs.{' '}
        <Cite href="https://www.finsmes.com/2023/07/supersight-raises-1m-in-pre-seed-funding.html">
          Raised $1.5M pre-seed at $30M
        </Cite>{' '}
        from Animoca Brands, Blockchain Founders Fund, and Vayner Fund. Selected through the NEAR
        Incubator for the{' '}
        <Cite href="https://x.com/delphi_labs/status/1884256227355492775">
          Delphi Labs AI Accelerator
        </Cite>
        , plus UT Austin&rsquo;s incubator. IP acquired.
      </>
    ),
  },
  {
    period: '2019 – 2022',
    org: 'Technics Publications',
    href: null,
    title: 'Technical Author',
    body: 'Wrote 50+ technical pieces on AI: neural networks, NLP, transfer learning, and big-data infrastructure. Featured in O’Reilly Safari Books Online. 15K+ readers.',
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        label="Experience"
        title="Where I have worked,"
        tail="and what I did there."
      />

      <ol className="border-t border-border">
        {roles.map((r) => (
          <li key={r.org} className="grid gap-4 border-b border-border py-9 sm:py-11 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12">
              <div className="kicker md:pt-2.5">{r.period}</div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-[24px] font-normal leading-[1.15] tracking-[-0.02em] text-fg sm:text-[28px]">
                    {r.href ? (
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${r.org} website (opens in a new tab)`}
                        className="link"
                      >
                        {r.org}
                      </a>
                    ) : (
                      r.org
                    )}
                  </h3>
                  <span className="text-[16px] text-fg-dim">{r.title}</span>
                </div>
                <p className="mt-4 max-w-[74ch] text-[16px] leading-[1.65] text-fg-muted">
                  {r.body}
                </p>
              </div>
            </li>
        ))}
      </ol>
    </Section>
  );
}
