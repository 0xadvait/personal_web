import { Section } from './ui';

function Out({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {children}
    </a>
  );
}

const works = [
  {
    title: 'The Economics of Wash Trading',
    overview: '/research/the-economics-of-wash-trading',
    source: { label: 'SSRN', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610162' },
    desc: 'An 85-page study of wash trading in NFT markets: who does it, what it moves, and why token incentives rather than price manipulation explain most of it.',
    meta: (
      <>
        Solo paper, SSRN 4610162, October 2023. Cited in the{' '}
        <Out href="https://www.sciencedirect.com/science/article/abs/pii/S0378426625001499">
          Journal of Banking &amp; Finance
        </Out>
        , the{' '}
        <Out href="https://doi.org/10.1080/1351847X.2026.2624485">European Journal of Finance</Out>
        , and an <Out href="https://www.nber.org/papers/w34837">NBER working paper</Out>.
      </>
    ),
  },
  {
    title: 'Beyond IPOs: The Cyclical Journey from Private to Public and Back Again',
    overview: '/research/beyond-ipos',
    source: { label: 'SSRN', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610086' },
    desc: 'Why companies move between private and public ownership, and what each leg of that cycle costs them.',
    meta: 'Solo paper, SSRN 4610086, September 2023.',
  },
  {
    title: 'The State of Edge AI',
    overview: '/research/the-state-of-edge-ai',
    source: {
      label: 'PDF',
      href: 'https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf',
    },
    desc: 'Where inference actually runs, and why latency, privacy, and bandwidth push useful intelligence closer to the user.',
    meta: 'Report, October 2024. 174K+ launch impressions and 6 citations.',
  },
  {
    title: 'The AiFi Thesis',
    overview: '/research/the-aifi-thesis',
    source: {
      label: 'PDF',
      href: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
    },
    desc: 'AI compute as a financeable asset, and the payment rails agents need once they start transacting with each other.',
    meta: 'Report, February 2025.',
  },
];

export default function Research() {
  return (
    <Section id="research" label="Research">
      <ul className="space-y-8">
        {works.map((w) => (
          <li key={w.title}>
            <h3 className="text-[18px] font-normal leading-[1.35] tracking-[-0.012em] text-fg">
              <a href={w.overview} className="link">
                {w.title}
              </a>
            </h3>
            <p className="mt-2 text-[15.5px] leading-[1.62] text-fg-muted">{w.desc}</p>
            <p className="mt-2 text-[14px] leading-[1.6] text-fg-dim">
              {w.meta} <Out href={w.source.href}>{w.source.label}</Out>
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[14.5px]">
        <a href="/research" className="link">
          All research and publications &rarr;
        </a>
        <a
          href="https://scholar.google.com/citations?user=tGFdvmgAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-dim transition-colors hover:text-fg"
        >
          Google Scholar &#8599;
        </a>
      </p>
    </Section>
  );
}
