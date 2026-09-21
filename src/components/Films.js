const films = [
  { label: 'Film I', href: 'https://x.com/OpenGradient/status/2045849964539171274' },
  { label: 'Film II', href: 'https://x.com/OpenGradient/status/2053766717474492927' },
  { label: 'Film III', href: 'https://x.com/OpenGradient/status/2052411220532109321' },
];

export default function Films() {
  return (
    <p className="text-[16px] leading-[1.65] text-fg-muted">
      Three OpenGradient launch films, written, directed, and produced as part of the marketing I
      ran:{' '}
      {films.map((f, i) => (
        <span key={f.href}>
          <a href={f.href} target="_blank" rel="noopener noreferrer" className="link whitespace-nowrap">
            {f.label}
          </a>
          {i < films.length - 2 ? ', ' : i === films.length - 2 ? ', and ' : '.'}
        </span>
      ))}
    </p>
  );
}
