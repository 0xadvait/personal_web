import { Section } from './ui';

const films = [
  { label: 'Film I', href: 'https://x.com/OpenGradient/status/2045849964539171274' },
  { label: 'Film II', href: 'https://x.com/OpenGradient/status/2053766717474492927' },
  { label: 'Film III', href: 'https://x.com/OpenGradient/status/2052411220532109321' },
];

export default function Films() {
  return (
    <Section id="films" label="Films">
      <p className="text-[15.5px] leading-[1.62] text-fg-muted">
        Producer, director, and writer on the three OpenGradient launch films:{' '}
        {films.map((f, i) => (
          <span key={f.href}>
            <a href={f.href} target="_blank" rel="noopener noreferrer" className="link whitespace-nowrap">
              {f.label}
            </a>
            {i < films.length - 2 ? ', ' : i === films.length - 2 ? ', and ' : '.'}
          </span>
        ))}
      </p>
    </Section>
  );
}
