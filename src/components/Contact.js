import Reveal from './Reveal';

const channels = [
  { k: 'Personal email', v: 'advaitjayant1703@gmail.com', href: 'mailto:advaitjayant1703@gmail.com' },
  { k: 'OpenGradient', v: 'advait@opengradient.ai', href: 'mailto:advait@opengradient.ai' },
  { k: 'GitHub', v: 'github.com/0xadvait', href: 'https://github.com/0xadvait' },
  { k: 'LinkedIn', v: 'in/advait-jayant-21b465bb', href: 'https://www.linkedin.com/in/advait-jayant-21b465bb/' },
  { k: 'Twitter / X', v: '@advait_jayant', href: 'https://x.com/advait_jayant' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 lg:py-44 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent flex items-center gap-3 mb-8 sm:mb-10">
            <span>05</span>
            <span className="h-px w-10 bg-accent/40" />
            <span className="text-fg-dim">Contact</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-pixel uppercase font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[104px] leading-[0.95] text-accent max-w-4xl text-balance">
            Let&apos;s talk.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 sm:mt-8 max-w-xl font-serif italic text-lg sm:text-xl leading-relaxed text-fg-muted">
            If you&apos;re building at the AI × crypto interface, drop me a line.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-12 sm:mt-16">
            {channels.map((c) => (
              <li key={c.k} className="border-t border-border last:border-b">
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 py-5 sm:py-6 transition-colors hover:bg-surface-soft/60 -mx-4 px-4 sm:-mx-6 sm:px-6 min-h-[64px]"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-10 min-w-0 flex-1">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-accent shrink-0 sm:w-[150px]">
                      {c.k}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl md:text-3xl text-fg truncate group-hover:text-accent transition-colors">
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
