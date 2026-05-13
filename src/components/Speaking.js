import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const talks = [
  {
    title: 'From “Attention” to Action',
    v: 'Kryptoplanet 2025',
    d: 'Fireside with Illia Polosukhin through the NEAR incubator, on what comes after chat.',
    href: 'https://www.youtube.com/watch?v=9OoB9aptaYM',
    featured: true,
  },
  {
    title: 'Infrastructure for the Agentic World',
    v: 'Kryptoplanet 2025',
    d: 'Why agent infrastructure needs open execution, not another closed box.',
    href: 'https://www.youtube.com/watch?v=Qzq5wEZFPCk',
  },
  {
    title: 'The Network for Open Intelligence',
    v: 'Conversation',
    d: 'With Matthew Wang, on open intelligence and model networks.',
    href: 'https://www.youtube.com/watch?v=wF1OfY2I4Ec',
  },
  {
    title: 'Multi-Agent Coordination Networks',
    v: 'Kryptoplanet 2025',
    d: 'Solo talk on coordination, model networks, and open intelligence.',
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
  'AI infrastructure',
  'Crypto market structure',
  'Agent economies',
  'Technical storytelling',
];

export default function Speaking() {
  const featuredTalk = talks.find((talk) => talk.featured) ?? talks[0];
  const listTalks = talks.filter((talk) => talk !== featuredTalk);

  return (
    <section id="speaking" className="relative border-t border-border py-14 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="06"
          title="Speaking"
          lede="I talk when the idea is still being formed, not after everyone has agreed on the words."
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
          <Reveal>
            <a
              href={featuredTalk.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${featuredTalk.title} at ${featuredTalk.v} (opens in a new tab)`}
              className="group block h-full rounded-[3px] border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_50px_rgba(29,37,40,0.06)] sm:p-7 md:p-8"
            >
              <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                <span>Featured talk</span>
                <span aria-hidden className="text-fg-faint transition-colors group-hover:text-accent">
                  ↗
                </span>
              </div>
              <h3 className="mt-7 max-w-md font-serif text-[32px] leading-[1.06] text-fg transition-colors group-hover:text-accent sm:text-[42px]">
                {featuredTalk.title}
              </h3>
              <p className="mt-4 max-w-md font-serif text-[16px] leading-[1.55] text-fg-muted">
                {featuredTalk.d}
              </p>
              <div className="mt-8 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-muted">
                {featuredTalk.v}
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.04}>
            <aside className="border-y border-border py-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Usually about
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-[2px] border border-border bg-surface px-2.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-fg-muted"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-xl font-serif text-[17px] leading-[1.55] text-fg-muted">
                The useful talks are the ones where the idea gets clearer in public.
              </p>
            </aside>
          </Reveal>
        </div>

        <ul className="mt-8 border-t border-border sm:mt-10">
          {listTalks.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.03}>
              <li className="border-b border-border">
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
                        <span aria-hidden className="ml-2 inline-block text-fg-faint transition-transform group-hover:translate-x-0.5">
                          ↗
                        </span>
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
    </section>
  );
}
