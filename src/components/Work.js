import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const items = [
  {
    num: '01',
    label: 'Film',
    title: 'OpenGradient — film work',
    desc: 'Producer, director, writer. Part of the campaign that took the OpenGradient X account past 50M+ views.',
    links: [
      { label: 'Flagship', href: 'https://x.com/OpenGradient/status/2045849964539171274' },
      { label: 'Film II', href: 'https://x.com/OpenGradient/status/2053766717474492927' },
      { label: 'Film III', href: 'https://x.com/OpenGradient/status/2052411220532109321' },
    ],
  },
  {
    num: '02',
    label: 'Report · 2024',
    title: 'The State of Edge AI',
    desc: 'First author. Real-time data, privacy, and deployment strategies for large models at the edge. 174K+ X impressions, 6 academic citations.',
    links: [
      { label: 'PDF', href: 'https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf' },
      { label: 'Launch tweet', href: 'https://x.com/advait_jayant/status/1844420752323510351' },
    ],
  },
  {
    num: '03',
    label: 'Report',
    title: 'The AiFi Thesis',
    desc: 'A framework for combining AI and DeFi to tokenize computation, training data, and ML models.',
    href: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
  },
  {
    num: '04',
    label: 'Paper · SSRN',
    title: 'The Economics of Wash Trading',
    desc: 'Microstructure and incentive design behind manufactured volume in digital-asset markets.',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610162',
  },
  {
    num: '05',
    label: 'Talk',
    title: 'FHE for Consensus in AI Models',
    desc: 'Using fully-homomorphic encryption to coordinate trustless consensus across model outputs.',
    href: 'https://www.youtube.com/watch?v=4s_IhcMoOks',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-16 sm:py-24 md:py-32 lg:py-40 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="03" title="Writing" lede="A few things I've written and made." />

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.04}>
              <Card item={it} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item }) {
  // Primary link = item.href OR the first item.links entry.
  const primaryHref = item.href ?? item.links?.[0]?.href;
  const primaryLabel = item.href ? item.title : `${item.title} — ${item.links?.[0]?.label}`;

  return (
    <div className="group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-[3px] border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_50px_rgba(29,37,40,0.06)] focus-within:border-accent sm:p-7 md:p-8">
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100" />
      <div className="relative z-10 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent">
        <span>
          <span className="text-accent">{item.num}</span>
          <span className="text-fg-faint mx-2">·</span>
          <span>{item.label}</span>
        </span>
        {/* Stretched anchor — clicking anywhere on the card opens the primary link */}
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${primaryLabel} (opens in a new tab)`}
          className="text-fg-faint group-hover:text-accent transition-colors before:content-[''] before:absolute before:inset-0 before:z-0 focus-visible:outline-offset-4"
        >
          <span aria-hidden>↗</span>
        </a>
      </div>

      <h3 className="relative z-10 mt-4 sm:mt-5 font-serif text-2xl sm:text-[28px] md:text-[30px] leading-[1.1] text-fg group-hover:text-accent transition-colors">
        {item.title}
      </h3>
      <p className="relative z-10 mt-3 font-serif text-[14.5px] sm:text-[15px] leading-[1.55] text-fg-muted">
        {item.desc}
      </p>

      {item.links && (
        <div className="relative z-10 mt-auto pt-6 flex flex-wrap gap-2">
          {item.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${l.label} for ${item.title} (opens in a new tab)`}
              className="group/pill inline-flex items-center gap-1.5 rounded-[3px] border border-border bg-bg px-3.5 py-2 min-h-[36px] font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-muted hover:border-accent hover:text-accent transition-colors"
            >
              {l.label}
              <span aria-hidden className="text-fg-faint group-hover/pill:text-accent transition-colors">↗</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
