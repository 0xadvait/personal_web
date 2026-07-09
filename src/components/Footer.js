import { socialLinks } from '@/lib/site';

const footerSocials = [
  { label: 'GitHub', href: socialLinks.github },
  { label: 'X', href: socialLinks.x },
  { label: 'Scholar', href: socialLinks.scholar },
  { label: 'LinkedIn', href: socialLinks.linkedin },
  { label: 'SSRN', href: socialLinks.ssrn },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface-soft/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 py-10 sm:py-12 md:flex-row md:items-baseline md:justify-between">
          <div>
            <a
              href="#top"
              className="font-serif italic text-xl text-fg transition-colors hover:text-accent"
            >
              Advait Jayant
            </a>
            <p className="mt-1.5 font-serif text-[14px] italic text-fg-muted">
              Research, product, and film.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em]">
            {footerSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} (opens in a new tab)`}
                className="text-fg-muted transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border-soft py-6 font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-dim sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2">
            © {year} Advait Jayant
            <span aria-hidden className="inline-block h-[7px] w-[7px] bg-accent" />
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#top" className="transition-colors hover:text-accent">
              Top
            </a>
            <a href="/research" className="transition-colors hover:text-accent">
              Research
            </a>
            <span>London</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
