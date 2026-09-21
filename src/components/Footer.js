import { socialLinks } from '@/lib/site';
import { Kicker } from './ui';

const siteLinks = [
  { label: 'Research', href: '/#thesis' },
  { label: 'Track record', href: '/#impact' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Work', href: '/#work' },
  { label: 'Speaking', href: '/#speaking' },
  { label: 'Papers', href: '/research' },
];

const elsewhere = [
  { label: 'GitHub', href: socialLinks.github },
  { label: 'X', href: socialLinks.x },
  { label: 'Google Scholar', href: socialLinks.scholar },
  { label: 'LinkedIn', href: socialLinks.linkedin },
  { label: 'SSRN', href: socialLinks.ssrn },
  { label: 'alphaXiv', href: socialLinks.alphaXiv },
];

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  const updated = now.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  return (
    <footer className="border-t border-border-soft bg-surface/55">
      <div className="mx-auto w-full max-w-[1060px] px-5 pb-10 pt-20 sm:px-8 sm:pb-12 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <div>
            <h2 className="text-[30px] font-normal leading-[1.08] tracking-[-0.025em] text-fg sm:text-[38px]">
              Research, product,{' '}
              <span className="tone-soft block">and film.</span>
            </h2>
            <p className="mt-5 max-w-[46ch] text-[16px] leading-[1.6] text-fg-muted">
              Advait Jayant. Chief Strategy Officer at OpenGradient, London.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-20">
            <div>
              <Kicker>Site</Kicker>
              <ul className="mt-5 space-y-2.5">
                {siteLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] text-fg-muted transition-colors hover:text-fg"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Kicker>Elsewhere</Kicker>
              <ul className="mt-5 space-y-2.5">
                {elsewhere.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${l.label} (opens in a new tab)`}
                      className="text-[15px] text-fg-muted transition-colors hover:text-fg"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border-soft pt-7 font-mono text-[11px] uppercase tracking-[0.12em] text-fg-dim sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Advait Jayant</span>
          <span>Last updated {updated}</span>
        </div>
      </div>
    </footer>
  );
}
