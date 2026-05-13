import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const talks = [
  {
    title: '“From ‘Attention’ to Action: Architecting the Agentic Internet”',
    v: 'Kryptoplanet 2025',
    d: 'Fireside with Illia Polosukhin (NEAR · co-author, Attention Is All You Need)',
    href: 'https://www.youtube.com/watch?v=9OoB9aptaYM',
  },
  {
    title: '“Infrastructure for the Agentic World”',
    v: 'Kryptoplanet 2025',
    d: 'Why we can’t build the future on closed black boxes',
    href: 'https://www.youtube.com/watch?v=Qzq5wEZFPCk',
  },
  {
    title: '“The Network for Open Intelligence”',
    v: 'Conversation',
    d: 'With Matthew Wang — on the OpenGradient thesis',
    href: 'https://www.youtube.com/watch?v=wF1OfY2I4Ec',
  },
  {
    title: '“Building Intelligent Multi-Agent Coordination Networks”',
    v: 'Kryptoplanet 2025',
    d: 'Solo talk',
    href: 'https://www.youtube.com/watch?v=97jd4fm0AdQ',
  },
  {
    title: 'FHE for Consensus in AI Models',
    v: 'FHE Summit',
    d: 'Trustless consensus across model outputs',
    href: 'https://www.youtube.com/watch?v=4s_IhcMoOks',
  },
  {
    title: 'CEGE0115 — Portfolio Management',
    v: 'University College London',
    d: 'Lecturer',
  },
  {
    title: 'Digital Investing',
    v: 'London Business School',
    d: 'Guest lecture',
  },
];

const topics = [
  'Agentic internet',
  'Open intelligence',
  'Verifiable compute',
  'AI x crypto market structure',
];

export default function Speaking() {
  return (
    <section id="speaking" className="relative py-16 sm:py-24 md:py-32 lg:py-40 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="06"
          title="Speaking"
          lede="Selected rooms where I've explained the agentic internet, open intelligence, and verifiable compute."
        />

        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
          <Reveal>
            <aside className="border-y border-border py-5 lg:sticky lg:top-28">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Speaking lanes
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col">
                {topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-[2px] border border-border bg-surface px-2.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-fg-muted"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>

          <ul>
            {talks.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.03}>
                <li className="border-t border-border first:border-t-0">
                  {t.href ? (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.title} at ${t.v} (opens in a new tab)`}
                      className="group grid gap-2 py-5 transition-colors hover:bg-surface-soft/60 md:grid-cols-12 md:gap-10 sm:py-6 -mx-4 px-4 sm:-mx-6 sm:px-6"
                    >
                      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent md:col-span-3 md:pt-1.5">
                        {t.v}
                      </div>
                      <div className="md:col-span-9">
                        <div className="font-serif text-lg leading-snug text-fg transition-colors group-hover:text-accent sm:text-xl md:text-2xl">
                          {t.title}
                          <span aria-hidden className="ml-2 inline-block text-fg-faint transition-transform group-hover:translate-x-0.5">↗</span>
                        </div>
                        <div className="mt-1 font-serif italic text-[15px] leading-relaxed text-fg-muted">
                          {t.d}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="grid gap-2 py-5 md:grid-cols-12 md:gap-10 sm:py-6 -mx-4 px-4 sm:-mx-6 sm:px-6">
                      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent md:col-span-3 md:pt-1.5">
                        {t.v}
                      </div>
                      <div className="md:col-span-9">
                        <div className="font-serif text-lg leading-snug text-fg sm:text-xl md:text-2xl">
                          {t.title}
                        </div>
                        <div className="mt-1 font-serif italic text-[15px] leading-relaxed text-fg-muted">
                          {t.d}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
