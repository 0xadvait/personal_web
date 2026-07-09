import Image from 'next/image';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const channels = [
  { k: 'Email', v: 'advait@opengradient.ai', href: 'mailto:advait@opengradient.ai' },
  { k: 'GitHub', v: 'github.com/0xadvait', href: 'https://github.com/0xadvait' },
  { k: 'LinkedIn', v: 'in/advait-jayant-21b465bb', href: 'https://www.linkedin.com/in/advait-jayant-21b465bb/' },
  { k: 'Google Scholar', v: 'Advait Jayant', href: 'https://scholar.google.com/citations?user=tGFdvmgAAAAJ&hl=en' },
  { k: 'Twitter / X', v: '@advait_jayant', href: 'https://x.com/advait_jayant' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-border bg-surface/35 py-14 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="06" title="Contact" />

        <Reveal delay={0.05}>
          <div className="overflow-hidden border-y border-border bg-bg/45 lg:grid lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_minmax(320px,430px)]">
            <div className="flex min-h-[260px] flex-col justify-end py-8 sm:py-10 lg:min-h-0 lg:py-12 lg:pr-12">
              <h2 className="font-serif text-5xl leading-[0.98] text-fg text-balance sm:text-6xl md:text-7xl lg:text-[96px]">
                Say{' '}
                <a
                  href="mailto:advait@opengradient.ai"
                  className="italic text-accent transition-colors hover:text-accent-deep"
                >
                  hi.
                </a>
              </h2>
              <p className="mt-5 max-w-xl font-serif text-lg italic leading-relaxed text-fg-muted sm:mt-7 sm:text-xl">
                A few lines is plenty.
              </p>
            </div>

            <aside
              aria-hidden="true"
              className="relative min-h-[220px] overflow-hidden border-t border-border bg-fg lg:min-h-full lg:border-l lg:border-t-0"
            >
              <Image
                src="/images/ascii_bg.gif"
                alt=""
                fill
                unoptimized
                sizes="(min-width: 1024px) 430px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-fg/5 via-transparent to-fg/28" />
            </aside>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <ul className="-mt-px">
            {channels.map((c) => (
              <li key={c.k} className="border-t border-border last:border-b">
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`${c.k}: ${c.v}${c.href.startsWith('http') ? ' (opens in a new tab)' : ''}`}
                  className="group flex items-center justify-between gap-4 py-5 sm:py-6 transition-colors hover:bg-surface-soft/60 -mx-4 px-4 sm:-mx-6 sm:px-6 min-h-[64px]"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-10 min-w-0 flex-1">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-accent shrink-0 sm:w-[150px]">
                      {c.k}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl text-fg [overflow-wrap:anywhere] group-hover:text-accent transition-colors">
                      {c.v}
                    </span>
                  </div>
                  <span aria-hidden className="shrink-0 text-fg-faint group-hover:text-accent group-hover:translate-x-0.5 transition-all text-xl">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
