import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const pillars = [
  {
    k: 'Trust surface',
    v: 'Inference should carry receipts.',
    d: 'When an agent makes a claim, executes a trade, or touches user state, the system should be able to prove what model ran, where it ran, and what it returned.',
  },
  {
    k: 'Memory layer',
    v: 'Context should outlive the chat window.',
    d: 'Useful agents need portable memory across models, sessions, and interfaces without trapping users inside one closed assistant.',
  },
  {
    k: 'Settlement layer',
    v: 'High-stakes actions need neutral rails.',
    d: 'The moment agents move money, reputation, or access, settlement has to be inspectable, programmable, and hard for the operator to quietly rewrite.',
  },
];

export default function Thesis() {
  return (
    <section id="thesis" className="relative border-t border-border py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          title="Thesis"
          lede="AI agents are becoming operators. The infrastructure around them still behaves like a black box."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal>
            <div className="border-y border-border py-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Operating belief
              </div>
              <p className="mt-5 font-serif text-[22px] leading-[1.35] text-fg sm:text-[28px]">
                The next useful AI systems will not win by sounding smarter. They will win by being
                accountable enough to run workflows people actually care about.
              </p>
              <p className="mt-5 font-serif text-base leading-[1.65] text-fg-muted sm:text-[17px]">
                That means verifiable execution, memory that users can carry, and economic rails
                that make agent actions legible after the fact.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ol className="divide-y divide-border">
              {pillars.map((pillar, index) => (
                <li key={pillar.k} className="grid gap-4 py-6 first:pt-0 last:pb-0 sm:grid-cols-[4rem_1fr]">
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-alt">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      {pillar.k}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl leading-snug text-fg">
                      {pillar.v}
                    </h3>
                    <p className="mt-3 max-w-2xl font-serif text-[15px] leading-[1.6] text-fg-muted">
                      {pillar.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
