import { Section, SectionHeading } from './ui';

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
    arena: 'Marketing',
    result: 'Crossed 50M+ views within a year of taking over marketing at OpenGradient.',
    role: 'Brand, films, launches',
  },
  {
    year: '2024',
    arena: 'Research',
    result: 'Published The State of Edge AI with 174K+ launch impressions and 6 citations.',
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
    <Section id="impact" tone="soft">
      <SectionHeading
        index="02"
        label="Track record"
        title="What actually shipped,"
        tail="with the numbers attached."
      />

      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {entries.map((entry) => (
          <article key={`${entry.year}-${entry.arena}`} className="max-w-[40ch]">
              <div className="kicker">
                {entry.year}
                <span className="mx-2 text-fg-faint" aria-hidden>
                  ·
                </span>
                {entry.arena}
              </div>
              <p className="mt-4 text-[19px] leading-[1.3] tracking-[-0.015em] text-fg sm:text-[20px]">
                {entry.result}
              </p>
              <p className="mt-3 text-[14.5px] leading-[1.5] text-fg-dim">{entry.role}</p>
            </article>
        ))}
      </div>
    </Section>
  );
}
