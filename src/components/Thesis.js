import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const pillars = [
  {
    k: 'Trust layer',
    v: 'Make the run checkable.',
    d: 'If an agent trades, updates memory, or changes access, you should know which model ran, where it ran, and what came back.',
    proof: 'TEE attestation, signed outputs, execution trails',
  },
  {
    k: 'Memory layer',
    v: 'Let context move with the user.',
    d: "Good agents don't get to forget everything every session, and users shouldn't be stuck in one assistant just to keep their state.",
    proof: 'portable context across models and products',
  },
  {
    k: 'Settlement layer',
    v: 'Put real actions on neutral rails.',
    d: "When agents touch money, reputation, or access, the record can't depend on the app operator staying honest.",
    proof: 'external commitments for actions that need accountability',
  },
];

const beforeAfter = [
  ['Today', 'black-box chat', 'trust me'],
  ['Next', 'agent workflows', 'verify it'],
];

const researchNotes = [
  {
    title: 'The State of Edge AI',
    year: '2024',
    href: 'https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf',
    line: 'Not every model call belongs in a cloud API.',
    notes: [
      'Latency changes which AI products feel usable.',
      'Private context should stay close to the user when it can.',
      'Bandwidth, hardware, and deployment constraints matter as much as model quality.',
    ],
  },
  {
    title: 'The AiFi Thesis',
    year: '2025',
    href: 'https://peri-labs.github.io/docs/assets/files/The_AiFi_Thesis.pdf',
    line: 'AI resources are starting to look like markets.',
    notes: [
      'Compute, data, models, and agents need clear ways to price, access, and redeem them.',
      'Tokenization only matters when it maps to custody, usage rights, or cash flows.',
      'Agent economies need proofs before they deserve autonomy.',
    ],
  },
];

export default function Thesis() {
  return (
    <section id="thesis" className="relative border-t border-border py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          title="Thesis"
          lede="AI agents are moving from chat into real work. The infrastructure around them is still too trust-me."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
          <Reveal>
            <div className="border-y border-border py-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Operating belief
              </div>
              <p className="mt-5 font-serif text-[22px] leading-[1.35] text-fg sm:text-[28px]">
                The winners won&apos;t be agents that sound smarter. They&apos;ll be systems you
                can check after they do the work.
              </p>
              <p className="mt-5 font-serif text-base leading-[1.65] text-fg-muted sm:text-[17px]">
                That means execution you can verify, memory users can carry, and economic rails
                that leave a record.
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

        <Reveal delay={0.08}>
          <div className="mt-12 border-y border-border py-6 sm:mt-16 sm:py-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  Research notes
                </div>
                <p className="mt-4 max-w-xl font-serif text-[21px] leading-[1.35] text-fg sm:text-[27px]">
                  The fun stuff has been figuring out what happens when AI leaves the demo and
                  starts needing markets, privacy, latency, and proof.
                </p>
              </div>

              <div className="divide-y divide-border-soft border-t border-border lg:border-t-0">
                {researchNotes.map((note) => (
                  <a
                    key={note.title}
                    href={note.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${note.title} PDF (opens in a new tab)`}
                    className="group block py-6 transition-colors hover:bg-surface-soft/50 sm:px-3"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                        {note.year}
                      </div>
                      <span
                        aria-hidden
                        className="text-fg-faint transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                      >
                        ↗
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-[25px] leading-[1.15] text-fg transition-colors group-hover:text-accent sm:text-[31px]">
                      {note.title}
                    </h3>
                    <p className="mt-2 font-serif text-[16px] leading-[1.5] text-fg-muted sm:text-[17px]">
                      {note.line}
                    </p>
                    <ul className="mt-4 grid gap-2">
                      {note.notes.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[1.5rem_1fr] gap-2 font-serif text-[14.5px] leading-[1.5] text-fg-muted sm:text-[15px]"
                        >
                          <span aria-hidden className="font-mono text-[10px] text-accent-alt">
                            /
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
