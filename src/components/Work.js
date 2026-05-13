import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const items = [
  {
    num: '01',
    label: 'Campaign system',
    title: 'OpenGradient — film work',
    desc: 'Producer, director, writer. A technical media campaign designed to make open intelligence feel tangible, not abstract.',
    impact: '50M+ views · launch narrative',
    featured: true,
    visual: 'campaign',
    signals: ['narrative strategy', 'technical distribution', 'brand surface'],
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
    desc: 'A framework for combining AI and DeFi to tokenize computation, training data, and ML models.',
    impact: 'AI x DeFi thesis',
    signals: ['crypto rails', 'compute markets'],
    href: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
  },
  {
    num: '04',
    label: 'Paper · SSRN',
    title: 'The Economics of Wash Trading',
    desc: 'Microstructure and incentive design behind manufactured volume in digital-asset markets.',
    impact: 'Market structure',
    signals: ['market design', 'incentives'],
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4610162',
  },
  {
    num: '05',
    label: 'Talk',
    title: 'FHE for Consensus in AI Models',
    desc: 'Using fully-homomorphic encryption to coordinate trustless consensus across model outputs.',
    impact: 'Verifiable compute',
    signals: ['FHE', 'model consensus'],
    href: 'https://www.youtube.com/watch?v=4s_IhcMoOks',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-16 sm:py-24 md:py-32 lg:py-40 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          title="Selected work"
          lede="Research, media, and talks that move technical ideas into the market."
        />

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.04} className={it.featured ? 'sm:col-span-2' : undefined}>
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
  const isFeatured = item.featured;

  return (
    <div
      className={`group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-[3px] border border-border bg-surface transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_50px_rgba(29,37,40,0.06)] focus-within:border-accent ${
        isFeatured ? 'md:grid md:min-h-[330px] md:grid-cols-[0.92fr_1.08fr]' : 'p-6 sm:p-7 md:p-8'
      }`}
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100" />

      {item.visual === 'campaign' && <CampaignVisual />}

      <div className={`relative flex h-full flex-col ${isFeatured ? 'p-6 sm:p-7 md:p-8' : ''}`}>
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
          <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-6">
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

function CampaignVisual() {
  const frames = [
    { k: 'Hook', v: 'Open intelligence enters the room' },
    { k: 'Proof', v: 'TEE inference becomes visible' },
    { k: 'Distribution', v: 'The thesis travels' },
  ];

  return (
    <div className="relative min-h-[240px] overflow-hidden border-b border-border bg-fg md:min-h-full md:border-b-0 md:border-r">
      <div
        aria-hidden
        className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(237,243,255,0.5),transparent_28%),radial-gradient(circle_at_18%_72%,rgba(15,118,110,0.22),transparent_32%),linear-gradient(135deg,rgba(36,70,199,0.32),transparent_58%)]"
      />
      <div
        aria-hidden
        className="absolute -right-12 top-8 h-52 w-52 rounded-full border border-white/20 bg-accent/20"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-fg via-fg/55 to-transparent"
      />

      <div className="relative z-10 flex h-full min-h-[240px] flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/68">
              Campaign artifact
            </div>
            <p className="mt-2 max-w-[15rem] font-serif text-[25px] leading-[1.02] text-white sm:text-[30px]">
              Making open intelligence feel cinematic.
            </p>
          </div>
          <span className="rounded-[2px] border border-white/18 bg-white/10 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/80">
            50M+
          </span>
        </div>

        <div className="mt-8 grid gap-2">
          {frames.map((frame, index) => (
            <div
              key={frame.k}
              className="grid grid-cols-[3.5rem_1fr] gap-3 border border-white/16 bg-white/[0.07] px-3 py-2.5 backdrop-blur-[2px]"
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent-soft">
                F{String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/70">
                  {frame.k}
                </div>
                <div className="mt-1 font-serif text-[13.5px] leading-snug text-white/82">
                  {frame.v}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2">
            {[20, 42, 68, 100].map((width, index) => (
              <div key={width} className="h-px flex-1 bg-white/18">
                <div
                  className="h-px bg-accent-soft"
                  style={{ width: `${index === 3 ? 100 : width}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/62">
            <span>Write</span>
            <span>Direct</span>
            <span>Launch</span>
            <span>Distribute</span>
          </div>
        </div>
      </div>
    </div>
  );
}
