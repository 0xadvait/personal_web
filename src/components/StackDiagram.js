import Reveal from './Reveal';

const phases = [
  {
    step: '01',
    k: 'Read',
    v: 'Notice what feels broken before the market has a clean name for it.',
    meta: ['research', 'market maps'],
  },
  {
    step: '02',
    k: 'Build',
    v: 'Turn the thesis into product work, customer conversations, and a wedge that is real.',
    meta: ['product', 'customers'],
  },
  {
    step: '03',
    k: 'Tell',
    v: 'Give the idea words, visuals, and evidence people can pass around.',
    meta: ['writing', 'film', 'talks'],
  },
];

const guarantees = [
  ['research', 'early'],
  ['product', 'usable'],
  ['capital', 'clear'],
  ['media', 'shareable'],
  ['market', 'legible'],
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

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-14">
          <Reveal>
            <div className="border-y border-border py-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                What changes
              </div>
              <p className="mt-5 max-w-xl font-serif text-[22px] leading-[1.35] text-fg sm:text-[28px]">
                The best opportunities look weird before they look obvious.
              </p>
              <p className="mt-5 max-w-xl font-serif text-[15.5px] leading-[1.65] text-fg-muted sm:text-[17px]">
                I try to catch the pattern early, help turn it into a product people can use, and
                make the story clear enough that the right audience can repeat it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden border border-border bg-surface shadow-[0_18px_60px_rgba(29,37,40,0.05)]">
              <div
                aria-hidden
                className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(36,70,199,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,118,110,0.06)_1px,transparent_1px)] [background-size:28px_28px]"
              />
              <div className="relative z-10 flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  Category loop
                </div>
                <div className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-fg-dim sm:block">
                  Research / product / story
                </div>
              </div>

              <div className="relative z-10 px-5 py-2 sm:px-6">
                {phases.map((phase) => (
                  <article
                    key={phase.k}
                    className="grid gap-3 border-t border-border-soft py-5 first:border-t-0 sm:grid-cols-[3.25rem_1fr] sm:gap-5"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt sm:pt-1">
                      {phase.step}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-serif text-[24px] leading-none text-fg sm:text-[30px]">
                          {phase.k}
                        </h3>
                        <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-fg-dim">
                          {phase.meta.join(' / ')}
                        </div>
                      </div>
                      <p className="mt-2 max-w-xl font-serif text-[15px] leading-[1.55] text-fg-muted sm:text-base">
                        {phase.v}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <dl className="relative z-10 grid grid-cols-5 border-t border-border bg-bg/70">
                {guarantees.map(([k, v]) => (
                  <div key={k} className="border-r border-border px-2 py-3 last:border-r-0 sm:px-4">
                    <dt className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-fg-dim">
                      {k}
                    </dt>
                    <dd className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-fg-muted sm:text-[10px] sm:tracking-[0.12em]">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
