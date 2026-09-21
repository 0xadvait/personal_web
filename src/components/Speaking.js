import { Section } from './ui';

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
    <Section id="talks" label="Talks">
      <ul className="space-y-6">
        {talks.map((t) => (
          <li key={t.title}>
            <h3 className="text-[17px] font-normal leading-[1.35] tracking-[-0.01em] text-fg">
              {t.href ? (
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.title} at ${t.v} (opens in a new tab)`}
                  className="link"
                >
                  {t.title}
                </a>
              ) : (
                t.title
              )}
            </h3>
            <p className="mt-1.5 text-[15px] leading-[1.6] text-fg-muted">
              {t.v}. {t.d}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
