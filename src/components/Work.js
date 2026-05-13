import Image from 'next/image';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const items = [
  {
    num: '01',
    label: 'Film campaign',
    title: 'OpenGradient — film work',
    desc: 'Producer, director, writer. A launch campaign that made open intelligence feel less abstract.',
    impact: '50M+ views · launch narrative',
    featured: true,
    visual: 'campaign',
    signals: ['narrative strategy', 'technical distribution', 'launch surface'],
    links: [
      { label: 'Film I', href: 'https://x.com/OpenGradient/status/2045849964539171274' },
      { label: 'Film II', href: 'https://x.com/OpenGradient/status/2053766717474492927' },
      { label: 'Film III', href: 'https://x.com/OpenGradient/status/2052411220532109321' },
    ],
  },
  {
    num: '02',
    label: 'Report · 2024',
    title: 'The State of Edge AI',
    desc: 'First author. A report on real-time data, privacy, and edge deployment for large models. 174K+ X impressions, 6 academic citations.',
    impact: '174K+ impressions',
    signals: ['edge AI', 'market map'],
    links: [
      { label: 'PDF', href: 'https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf' },
      { label: 'Launch tweet', href: 'https://x.com/advait_jayant/status/1844420752323510351' },
    ],
  },
  {
    num: '03',
    label: 'Report',
    title: 'The AiFi Thesis',
    desc: 'A thesis for AI x DeFi: tokenized compute, training data, and model markets.',
    impact: 'AI x DeFi thesis',
    signals: ['crypto rails', 'compute markets'],
    href: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
  },
  {
    num: '04',
    label: 'Paper · SSRN',
    title: 'The Economics of Wash Trading',
    desc: 'A paper on manufactured volume, incentives, and market structure in crypto.',
    impact: 'Market structure',
    signals: ['market design', 'incentives'],
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610162',
  },
  {
    num: '05',
    label: 'Talk',
    title: 'FHE for Consensus in AI Models',
    desc: 'A talk on using FHE to coordinate trustless consensus across model outputs.',
    impact: 'Verifiable compute',
    signals: ['FHE', 'model consensus'],
    href: 'https://www.youtube.com/watch?v=4s_IhcMoOks',
  },
];

export default function Work() {
  const featured = items.find((item) => item.featured) ?? items[0];
  const indexItems = items.filter((item) => item !== featured);

  return (
    <section id="work" className="relative border-t border-border bg-surface/40 py-14 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          title="Selected work"
          lede="Research, films, and talks. The common thread: make technical ideas easier to believe, fund, and use."
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start lg:gap-8">
          <Reveal>
            <FeaturedWork item={featured} />
          </Reveal>

          <Reveal delay={0.06}>
            <WorkIndex items={indexItems} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork({ item }) {
  const primaryHref = item.href ?? item.links?.[0]?.href;
  const primaryLabel = item.href ? item.title : `${item.title} — ${item.links?.[0]?.label}`;

  return (
    <div
      className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[3px] border border-border bg-surface transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_50px_rgba(29,37,40,0.06)] focus-within:border-accent"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100" />

      <CampaignVisual />

      <div className="relative flex flex-col p-6 sm:h-full sm:p-7 md:p-8">
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
            className="text-fg-faint transition-colors before:absolute before:inset-0 before:z-0 before:content-[''] group-hover:text-accent focus-visible:outline-offset-4"
          >
            <span aria-hidden>↗</span>
          </a>
        </div>

        <h3 className="relative z-10 mt-4 font-serif text-2xl leading-[1.1] text-fg transition-colors group-hover:text-accent sm:mt-5 sm:text-[28px] md:text-[30px]">
          {item.title}
        </h3>
        <p className="relative z-10 mt-3 font-serif text-[14.5px] leading-[1.55] text-fg-muted sm:text-[15px]">
          {item.desc}
        </p>

        <div className="relative z-10 mt-5 inline-flex w-fit border-y border-border py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-alt">
          {item.impact}
        </div>

        {item.signals && (
          <div className="relative z-10 mt-5 flex flex-wrap gap-2">
            {item.signals.map((signal) => (
              <span
                key={signal}
                className="rounded-[2px] border border-border-soft bg-bg px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-fg-dim"
              >
                {signal}
              </span>
            ))}
          </div>
        )}

        {item.links && (
          <div className="relative z-10 mt-6 flex flex-wrap gap-2 sm:mt-auto sm:pt-6">
            {item.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${l.label} for ${item.title} (opens in a new tab)`}
                className="group/pill inline-flex min-h-[36px] items-center gap-1.5 rounded-[3px] border border-border bg-bg px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-muted transition-colors hover:border-accent hover:text-accent"
              >
                {l.label}
                <span aria-hidden className="text-fg-faint transition-colors group-hover/pill:text-accent">
                  ↗
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function WorkIndex({ items }) {
  return (
    <aside className="h-full border-y border-border py-4 sm:py-5">
      <div className="flex items-center justify-between gap-4 px-0 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
        <span>Work index</span>
        <span className="text-fg-dim">{String(items.length).padStart(2, '0')} entries</span>
      </div>
      <ul className="mt-4 divide-y divide-border-soft border-t border-border">
        {items.map((item) => (
          <li key={item.title}>
            <WorkRow item={item} />
          </li>
        ))}
      </ul>
    </aside>
  );
}

function WorkRow({ item }) {
  const primaryHref = item.href ?? item.links?.[0]?.href;
  const primaryLabel = item.href ? item.title : `${item.title} — ${item.links?.[0]?.label}`;

  return (
    <a
      href={primaryHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${primaryLabel} (opens in a new tab)`}
      className="group grid gap-3 py-5 transition-colors hover:bg-surface-soft/55 sm:grid-cols-[4.5rem_1fr] sm:gap-5 sm:px-3"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt">
        {item.num}
      </div>
      <div className="min-w-0">
        <div className="flex items-center justify-between gap-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
            {item.label}
          </div>
          <span aria-hidden className="text-fg-faint transition-all group-hover:translate-x-0.5 group-hover:text-accent">
            ↗
          </span>
        </div>
        <h3 className="mt-2 font-serif text-[24px] leading-[1.12] text-fg transition-colors group-hover:text-accent sm:text-[28px]">
          {item.title}
        </h3>
        <p className="mt-2 max-w-xl font-serif text-[14.5px] leading-[1.5] text-fg-muted">
          {item.desc}
        </p>
        <div className="mt-4 inline-flex border-y border-border py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-alt">
          {item.impact}
        </div>
      </div>
    </a>
  );
}

function CampaignVisual() {
  return (
    <div className="relative min-h-[235px] overflow-hidden border-b border-border bg-fg sm:min-h-[300px] lg:min-h-[380px]">
      <Image
        src="/images/ascii-animation.gif"
        alt=""
        fill
        unoptimized
        sizes="(min-width: 768px) 520px, 100vw"
        className="object-cover opacity-80"
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,13,15,0.92)_0%,rgba(7,13,15,0.58)_52%,rgba(7,13,15,0.2)_100%)]" />
      <div aria-hidden className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 flex h-full min-h-[235px] flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/68">
              Launch films
            </div>
            <p className="mt-2 max-w-[15rem] font-serif text-[26px] leading-[1.02] text-white sm:text-[31px]">
              Making open intelligence feel real.
            </p>
          </div>
          <span className="rounded-[2px] border border-white/20 bg-white/10 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/80">
            50M+
          </span>
        </div>

        <div className="mt-10 border-t border-white/20 pt-4">
          <div className="grid grid-cols-3 gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/62">
            <span>Write</span>
            <span>Direct</span>
            <span>Launch</span>
          </div>
        </div>
      </div>
    </div>
  );
}
