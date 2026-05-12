'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#speaking', label: 'Speaking' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all ${
          scrolled
            ? 'border-b border-border bg-bg/85 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-14 sm:h-16">
          <a
            href="#top"
            className="font-serif italic text-[15px] sm:text-base text-fg hover:text-accent transition-colors"
            aria-label="Home"
          >
            Advait Jayant
          </a>

          <ul className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex font-mono text-[11px] uppercase tracking-[0.12em] text-fg hover:text-accent transition-colors items-center gap-1.5 border-b border-transparent hover:border-accent"
          >
            Contact <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 -mr-2 items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 right-0 top-0 h-px bg-fg transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`absolute left-0 right-0 top-[6px] h-px bg-fg transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 right-0 top-[12px] h-px bg-fg transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border bg-bg">
            <ul className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-mono text-xs uppercase tracking-[0.12em] text-fg-muted hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-xs uppercase tracking-[0.12em] text-accent"
                >
                  Contact →
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
