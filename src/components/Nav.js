'use client';

import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '#thesis', label: 'Research' },
  { href: '#impact', label: 'Track record' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#speaking', label: 'Speaking' },
  { href: '/research', label: 'Papers' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');
  const progressRef = useRef(null);
  const menuId = 'mobile-navigation';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (progressRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
        progressRef.current.style.transform = `scaleX(${p})`;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const ids = ['top', ...links.map((link) => link.href.slice(1)), 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const close = () => setOpen(false);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('hashchange', close);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('hashchange', close);
    };
  }, [open]);

  const linkClass = (href) => {
    const isActive = active === href.slice(1);
    return `font-mono text-[11px] uppercase tracking-[0.12em] transition-colors border-b ${
      isActive
        ? 'text-accent border-accent'
        : 'text-fg-muted border-transparent hover:text-accent hover:border-accent'
    }`;
  };

  const mobileLinkClass = (href) => {
    const isActive = active === href.slice(1);
    return `block py-3 font-mono text-xs uppercase tracking-[0.12em] transition-colors ${
      isActive ? 'text-accent' : 'text-fg-muted hover:text-accent'
    }`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <span
        ref={progressRef}
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 block h-[2px] origin-left scale-x-0 bg-accent"
      />
      <div
        className={`transition-all ${
          scrolled
            ? 'border-b border-border bg-bg/88 shadow-[0_1px_0_rgba(29,37,40,0.02)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-14 sm:h-16">
          <a
            href="#top"
            className="font-serif italic text-[15px] sm:text-base text-fg hover:text-accent transition-colors"
            aria-label="Advait Jayant home"
          >
            Advait Jayant
          </a>

          <nav className="hidden lg:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={active === l.href.slice(1) ? 'location' : undefined}
                    className={linkClass(l.href)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            aria-current={active === 'contact' ? 'location' : undefined}
            className={`hidden lg:inline-flex items-center gap-1.5 ${linkClass('#contact')}`}
          >
            Contact <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 -mr-2 items-center justify-center rounded-[3px] hover:bg-surface-soft transition-colors lg:hidden"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls={menuId}
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
          <nav
            id={menuId}
            className="border-t border-border bg-bg/98 shadow-[0_18px_44px_rgba(29,37,40,0.08)] backdrop-blur-md lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === l.href.slice(1) ? 'location' : undefined}
                    className={mobileLinkClass(l.href)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  aria-current={active === 'contact' ? 'location' : undefined}
                  className={mobileLinkClass('#contact')}
                >
                  Contact →
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
