import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const talks = [
  { title: '“From ‘Attention’ to Action: Architecting the Agentic Internet”', v: 'Kryptoplanet 2025', d: 'Fireside with Illia Polosukhin (NEAR · co-author, Attention Is All You Need)' },
  { title: '“Infrastructure for the Agentic World”', v: 'Kryptoplanet 2025', d: 'Why we can’t build the future on closed black boxes' },
  { title: '“Building Intelligent Multi-Agent Coordination Networks”', v: 'Kryptoplanet 2025', d: 'Solo talk' },
  { title: 'FHE for Consensus in AI Models', v: 'FHE Summit', d: 'Trustless consensus across model outputs' },
  { title: 'CEGE0115 — Portfolio Management', v: 'University College London', d: 'Lecturer' },
  { title: 'Digital Investing', v: 'London Business School', d: 'Guest lecture' },
];

export default function Speaking() {
  return (
    <section id="speaking" className="relative py-16 sm:py-24 md:py-32 lg:py-40 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="04" title="Speaking" lede="Selected stages." />

        <ul>
          {talks.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.03}>
              <li className="border-t border-border first:border-t-0 py-5 sm:py-6 grid gap-2 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent md:pt-1.5">
                  {t.v}
                </div>
                <div className="md:col-span-9">
                  <div className="font-serif text-lg sm:text-xl md:text-2xl tracking-[-0.005em] text-fg leading-snug">
                    {t.title}
                  </div>
                  <div className="mt-1 font-serif italic text-[15px] text-fg-muted leading-relaxed">
                    {t.d}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
