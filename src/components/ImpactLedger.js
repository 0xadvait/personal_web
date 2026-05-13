import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const entries = [
  {
    year: '2026',
    arena: 'Product',
    result: 'Helped turn a new technical product from zero into 7-figure revenue.',
    role: 'Zero to revenue, early customers, enterprise sales',
    detail: 'The work spans what to build, who needs it, and how to explain it clearly.',
  },
  {
    year: '2026',
    arena: 'Market entry',
    result: 'Built a Korea market entry week with 1,000+ attendees.',
    role: 'Regional launch, community, local partners',
    detail: 'Builder community, local events, and Korean press coverage.',
  },
  {
    year: '2025',
    arena: 'Film',
    result: 'Produced a film-led open intelligence campaign that passed 50M+ views.',
    role: 'Producer, director, writer',
    detail: 'The point was simple: make open intelligence feel concrete.',
  },
  {
    year: '2024',
    arena: 'Research',
    result: 'Published The State of Edge AI with 174K+ launch impressions and academic citations.',
    role: 'First author, market synthesis, technical writing',
    detail: 'Used by builders, investors, and researchers working on edge AI.',
  },
  {
    year: '2022',
    arena: 'Founder track',
    result: 'Built SuperSight / Peri Labs to 200K+ users and 30+ enterprise pilots.',
    role: 'Founder, product architect, NL-to-SQL pipeline',
    detail: '$1.5M pre-seed at $30M; IP later acquired.',
  },
];

const capabilities = [
  'Edge AI before on-device models became the default conversation.',
  'AI compute before data centers started looking like finance products.',
  'Agent payments before the big platforms put rails around them.',
  'Film when the category needed to feel less abstract.',
];

export default function ImpactLedger() {
  return (
    <section
      id="impact"
      className="relative border-t border-border bg-surface/35 py-14 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          title="Track record"
          lede="A few places where an early read became a product, a launch, or media people actually saw."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <Reveal className="hidden lg:block">
            <aside className="lg:sticky lg:top-28">
              <div className="border-y border-border py-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  Common thread
                </div>
                <p className="mt-5 font-serif text-[21px] leading-[1.4] text-fg sm:text-[27px]">
                  A lot of it sits in the messy middle: the product works, the market is still
                  half-formed, and the story has to catch up.
                </p>
              </div>

              <ul className="mt-7 divide-y divide-border-soft border-b border-border">
                {capabilities.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[1.4rem_1fr] gap-3 py-4 font-serif text-[15px] leading-[1.5] text-fg-muted"
                  >
                    <span aria-hidden className="font-mono text-[10px] text-accent-alt">
                      /
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>

          <div>
            {entries.map((entry, index) => (
              <Reveal key={`${entry.year}-${entry.arena}`} delay={index * 0.04}>
                <article
                  className={`group grid gap-3 py-8 sm:grid-cols-[5rem_1fr] sm:gap-7 ${
                    index === 0 ? 'pt-0' : 'border-t border-border'
                  } ${index === entries.length - 1 ? 'pb-0' : ''}`}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt sm:pt-1.5">
                    {entry.year}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        {entry.arena}
                      </h3>
                      <span
                        aria-hidden
                        className="hidden h-px w-8 bg-accent/35 sm:inline-block"
                      />
                      <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-fg-dim sm:text-[10px] sm:tracking-[0.14em]">
                        {entry.role}
                      </p>
                    </div>
                    <p className="mt-3 max-w-3xl font-serif text-[23px] leading-[1.17] text-fg transition-colors group-hover:text-accent sm:text-[30px] sm:leading-[1.2]">
                      {entry.result}
                    </p>
                    <p className="mt-3 max-w-2xl font-serif text-[15px] leading-[1.55] text-fg-muted sm:leading-[1.6]">
                      {entry.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
