function Cite({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {children}
    </a>
  );
}

const roles = [
  {
    org: 'OpenGradient',
    href: 'https://opengradient.ai',
    title: 'Chief Strategy Officer',
    period: '2025 to now',
    body: (
      <>
        I run marketing and business development: brand, launches, films, customer work, and
        partnerships. Crossed 50M+ views within a year of taking over marketing, helped take the
        product from zero to 7-figure revenue, and ran a Korea launch week with 1,000+ attendees.{' '}
        <Cite href="https://www.finsmes.com/2026/04/opengradient-raises-9-5m-in-total-funding.html">
          $9.5M seed led by a16z crypto
        </Cite>
        .
      </>
    ),
  },
  {
    org: 'Peri Labs',
    href: 'https://perilabs.net/',
    title: 'Founder & CEO',
    period: '2022 to 2025',
    body: (
      <>
        Founded SuperSight, later Peri Labs, and built it to 200K+ users and 30+ enterprise pilots.{' '}
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
    org: 'Technics Publications',
    href: null,
    title: 'Technical Author',
    period: '2019 to 2022',
    body: 'Wrote 50+ technical pieces on AI: neural networks, NLP, transfer learning, and big-data infrastructure. Featured in O’Reilly Safari Books Online. 15K+ readers.',
  },
];

export default function Experience() {
  return (
    <ul className="space-y-9">
      {roles.map((r) => (
        <li key={r.org}>
          <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <h2 className="text-[19px] font-normal leading-[1.35] tracking-[-0.012em] text-fg">
              {r.href ? (
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="link">
                  {r.org}
                </a>
              ) : (
                r.org
              )}
            </h2>
            <span className="text-[14.5px] text-fg-dim">
              {r.title}, {r.period}
            </span>
          </div>
          <p className="mt-2 text-[16px] leading-[1.65] text-fg-muted">{r.body}</p>
        </li>
      ))}
    </ul>
  );
}
