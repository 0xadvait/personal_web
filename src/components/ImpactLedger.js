import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const entries = [
  {
    year: '2026',
    arena: 'Product',
    result: 'Helped turn a new AI infrastructure product from zero into 7-figure revenue.',
    role: 'Product strategy, customer engineering, enterprise motion',
    detail: 'The work spans product, customer motion, ecosystem, and technical narrative.',
  },
  {
    year: '2026',
    arena: 'Market entry',
    result: 'Built a Korea market entry week with 1,000+ attendees.',
    role: 'Regional launch, community design, ecosystem ties',
    detail: 'Builder community, local events, and Korean press coverage.',
  },
  {
    year: '2025',
    arena: 'Distribution',
    result: 'Produced a film-led AI infrastructure campaign that passed 50M+ views.',
    role: 'Producer, director, writer',
    detail: 'A hard technical category became something people could watch and pass around.',
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
  'Turn new research into a market story that lands.',
  'Turn technical product into customer traction.',
  'Make early markets easier to understand.',
  'Move between engineering, capital, ecosystem, and media.',
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
          lede="I'm useful when the tech is real, the market is early, and the story is still messy."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <Reveal className="hidden lg:block">
            <aside className="lg:sticky lg:top-28">
              <div className="border-y border-border py-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  Where I&apos;m useful
                </div>
                <p className="mt-5 font-serif text-[21px] leading-[1.4] text-fg sm:text-[27px]">
                  I like the messy middle: the product works, the market is not fully there yet,
                  and someone has to make the whole thing feel real.
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
