import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const pillars = [
  {
    k: 'Trust layer',
    v: 'Inference should be checkable.',
    d: 'When an agent makes a claim, executes a trade, or touches user state, the system should be able to prove what model ran, where it ran, and what it returned.',
    proof: 'TEE attestation, signed outputs, verifiable execution trails',
  },
  {
    k: 'Memory layer',
    v: 'Context should outlive the chat window.',
    d: 'Useful agents need portable memory across models, sessions, and interfaces without trapping users inside one closed assistant.',
    proof: 'MemSync-style context that can move across models and products',
  },
  {
    k: 'Settlement layer',
    v: 'High-stakes actions need neutral rails.',
    d: 'The moment agents move money, reputation, or access, settlement has to be inspectable, programmable, and hard for the operator to quietly rewrite.',
    proof: 'On-chain commitments for actions that need external accountability',
  },
];

const beforeAfter = [
  ['Today', 'black-box assistants', 'trust me'],
  ['Next', 'accountable operators', 'verify this'],
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

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
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
                that make agent actions auditable later.
              </p>

              <dl className="mt-8 divide-y divide-border-soft border-y border-border">
                {beforeAfter.map(([label, system, promise]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[4.5rem_1fr] gap-4 py-4 sm:grid-cols-[5.5rem_1fr_6rem]"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt">
                      {label}
                    </dt>
                    <dd className="font-serif text-[16px] leading-snug text-fg">{system}</dd>
                    <dd className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted sm:text-right">
                      {promise}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal>
            <ol className="grid gap-4">
              {pillars.map((pillar, index) => (
                <li
                  key={pillar.k}
                  className="group grid gap-5 rounded-[3px] border border-border bg-surface px-5 py-5 transition-all hover:border-accent hover:shadow-[0_18px_50px_rgba(29,37,40,0.06)] sm:grid-cols-[4rem_1fr] sm:px-6 sm:py-6"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-alt sm:pt-1">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      {pillar.k}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl leading-snug text-fg transition-colors group-hover:text-accent">
                      {pillar.v}
                    </h3>
                    <p className="mt-3 max-w-2xl font-serif text-[15px] leading-[1.6] text-fg-muted">
                      {pillar.d}
                    </p>
                    <div className="mt-5 border-l border-accent/35 pl-4 font-serif text-[14px] leading-[1.45] text-fg-dim">
                      {pillar.proof}
                    </div>
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
