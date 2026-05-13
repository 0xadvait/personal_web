import Image from 'next/image';
import Reveal from './Reveal';

const channels = [
  { k: 'Email', v: 'advait@opengradient.ai', href: 'mailto:advait@opengradient.ai' },
  { k: 'GitHub', v: 'github.com/0xadvait', href: 'https://github.com/0xadvait' },
  { k: 'LinkedIn', v: 'in/advait-jayant-21b465bb', href: 'https://www.linkedin.com/in/advait-jayant-21b465bb/' },
  { k: 'Google Scholar', v: 'Advait Jayant', href: 'https://scholar.google.com/citations?user=jG6k8swAAAAJ&hl=en' },
  { k: 'Twitter / X', v: '@advait_jayant', href: 'https://x.com/advait_jayant' },
];

const collaboration = [
  {
    k: 'Build',
    v: 'Verifiable AI infra, agent memory, decentralized compute, product strategy.',
  },
  {
    k: 'Think',
    v: 'Research, market maps, crypto rails, AI x capital formation.',
  },
  {
    k: 'Tell',
    v: 'Technical narratives, launch films, talks, and explaining new categories.',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-border bg-surface/35 py-14 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent flex items-center gap-3 mb-8 sm:mb-10">
            <span>07</span>
            <span className="h-px w-10 bg-accent/40" />
            <span className="text-fg-dim">Contact</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_360px] lg:items-end lg:gap-16">
            <div>
              <h2 className="font-serif text-5xl leading-[0.98] text-fg text-balance sm:text-6xl md:text-7xl lg:text-[104px]">
                Let&apos;s <span className="italic text-accent">talk.</span>
              </h2>
              <p className="mt-6 max-w-xl font-serif text-lg italic leading-relaxed text-fg-muted sm:mt-8 sm:text-xl">
                If you&apos;re building verifiable AI infrastructure, agent memory, crypto rails,
                or anything where trust boundaries matter, drop me a line.
              </p>
            </div>

            <aside
              aria-label="Contact note"
              className="overflow-hidden rounded-[3px] border border-border bg-fg shadow-[0_22px_70px_rgba(29,37,40,0.08)]"
            >
              <div className="relative h-48 overflow-hidden sm:h-56 lg:h-60">
                <Image
                  src="/images/ascii_bg.gif"
                  alt=""
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-fg/5 via-transparent to-fg/30" />
              </div>
              <div className="border-t border-white/10 p-5 sm:p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                  Usually async first
                </div>
                <p className="mt-3 max-w-[18rem] font-serif text-[21px] leading-[1.18] text-white sm:text-[24px]">
                  Send the sharp version of the problem. I&apos;ll read it properly.
                </p>
              </div>
            </aside>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {collaboration.map((item) => (
              <div key={item.k} className="border border-border bg-bg px-5 py-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  {item.k}
                </div>
                <p className="mt-3 font-serif text-[15px] leading-[1.5] text-fg-muted">
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <ul className="mt-12 sm:mt-16">
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
