import { Section, SectionHeading } from './ui';

const talks = [
  {
    title: 'From “Attention” to Action',
    v: 'Kryptoplanet 2025',
    d: 'Fireside with Illia Polosukhin through the NEAR incubator, on what comes after chat.',
    href: 'https://www.youtube.com/watch?v=9OoB9aptaYM',
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
    d: 'Trustless consensus across model outputs.',
    href: 'https://www.youtube.com/watch?v=4s_IhcMoOks',
  },
  {
    title: 'CEGE0115: Portfolio Management',
    v: 'University College London',
    d: 'Lecturer.',
  },
  {
    title: 'Digital Investing',
    v: 'London Business School',
    d: 'Guest lecture.',
  },
];

export default function Speaking() {
  return (
    <Section id="speaking">
      <SectionHeading
        index="05"
        label="Speaking"
        title="Talks and fireside chats,"
        tail="plus two university lectures."
      />

      <ul className="border-t border-border">
        {talks.map((t) => (
          <li key={t.title} className="grid gap-2 border-b border-border py-7 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-12">
              <div className="kicker md:pt-2">{t.v}</div>
              <div className="min-w-0">
                <h3 className="text-[18.5px] font-normal leading-[1.32] tracking-[-0.012em] text-fg sm:text-[20px]">
                  {t.href ? (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.title} at ${t.v} (opens in a new tab)`}
                      className="link"
                    >
                      {t.title}
                      <span aria-hidden className="ml-1.5 text-fg-faint">
                        ↗
                      </span>
                    </a>
                  ) : (
                    t.title
                  )}
                </h3>
                <p className="mt-2 max-w-[72ch] text-[15.5px] leading-[1.6] text-fg-muted">{t.d}</p>
              </div>
            </li>
        ))}
      </ul>
    </Section>
  );
}
