import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const entries = [
  {
    year: '2026',
    arena: 'Product',
    result: 'Helped take an AI infra product from zero to 7-figure revenue.',
    role: 'Early customers, enterprise sales',
  },
  {
    year: '2026',
    arena: 'Market entry',
    result: 'Ran a Korea launch week with 1,000+ attendees.',
    role: 'Local partners, community, events',
  },
  {
    year: '2025',
    arena: 'Film',
    result: 'Produced three OpenGradient films that passed 50M+ views.',
    role: 'Producer, director, writer',
  },
  {
    year: '2024',
    arena: 'Research',
    result: 'Published The State of Edge AI with 174K+ launch impressions and academic citations.',
    role: 'First author, market synthesis, technical writing',
  },
  {
    year: '2022',
    arena: 'Company',
    result: 'Built SuperSight / Peri Labs to 200K+ users and 30+ enterprise pilots.',
    role: 'Founder, product, NL-to-SQL',
  },
];

export default function ImpactLedger() {
  return (
    <section
      id="impact"
      className="relative border-t border-border bg-surface/35 py-14 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          title="Track record"
        />

        <div className="max-w-5xl">
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
