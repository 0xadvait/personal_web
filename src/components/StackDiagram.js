import Reveal from './Reveal';

const phases = [
  {
    step: '01',
    k: 'Research',
    v: 'Spot the thing before everyone knows what to call it.',
  },
  {
    step: '02',
    k: 'Product',
    v: 'Turn the thesis into something customers use.',
  },
  {
    step: '03',
    k: 'Film',
    v: 'Make the idea feel real.',
  },
];

export default function StackDiagram() {
  return (
    <section
      aria-labelledby="stack-heading"
      className="relative border-t border-border py-14 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-accent sm:mb-10">
            <span>Fig_001</span>
            <span className="h-px w-10 bg-accent/40" />
            <h2 id="stack-heading" className="text-fg-dim">
              How I work
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-14">
          <Reveal>
            <div className="border-y border-border py-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                The loop
              </div>
              <p className="mt-5 max-w-xl font-serif text-[22px] leading-[1.35] text-fg sm:text-[28px]">
                Find the weird early signal. Build around it. Make people care.
              </p>
              <p className="mt-5 max-w-xl font-serif text-[15.5px] leading-[1.65] text-fg-muted sm:text-[17px]">
                The pattern keeps showing up: notice the market early, help make the product real,
                then make the idea easier to care about.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border border-border bg-surface shadow-[0_18px_60px_rgba(29,37,40,0.04)]">
              <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    Same loop
                  </div>
                  <p className="mt-1 font-serif text-[18px] leading-snug text-fg sm:text-[21px]">
                    Research, product, film.
                  </p>
                </div>
                <span className="hidden rounded-[2px] border border-border bg-bg px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-fg-muted sm:inline-flex">
                  03 steps
                </span>
              </div>

              <div className="divide-y divide-border-soft px-5 sm:px-6">
                {phases.map((phase) => (
                  <article
                    key={phase.k}
                    className="grid gap-3 py-5 sm:grid-cols-[3.25rem_1fr] sm:gap-5"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt sm:pt-1">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        {phase.k}
                      </h3>
                      <p className="mt-2 max-w-xl font-serif text-[15px] leading-[1.55] text-fg-muted sm:text-base">
                        {phase.v}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
