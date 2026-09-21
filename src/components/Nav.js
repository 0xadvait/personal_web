'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#thesis', label: 'Research' },
  { href: '#impact', label: 'Track record' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#speaking', label: 'Speaking' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');
  const menuId = 'mobile-navigation';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['top', ...links.map((link) => link.href.slice(1)), 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
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

  const linkClass = (href) =>
    `text-[14.5px] leading-none transition-colors ${
      active === href.slice(1) ? 'text-fg' : 'text-fg-muted hover:text-fg'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'border-b border-border-soft bg-bg/85 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1060px] items-center justify-between gap-6 px-5 sm:h-[74px] sm:px-8">
          <a
            href="#top"
            className="font-serif text-[21px] leading-none text-fg transition-opacity hover:opacity-70 sm:text-[23px]"
            aria-label="Advait Jayant home"
          >
            Advait Jayant
          </a>

          <nav className="hidden lg:block" aria-label="Primary navigation">
            <ul className="flex items-center">
              {links.map((l, i) => (
                <li key={l.href} className="flex items-center">
                  {i > 0 ? (
                    <span aria-hidden className="mx-3.5 h-3 w-px bg-border" />
                  ) : null}
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

          <div className="hidden items-center gap-6 lg:flex">
            <a href="/research" className="text-[14.5px] leading-none text-fg-muted transition-colors hover:text-fg">
              Papers
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-[9px] bg-fg px-[15px] py-[9px] text-[14.5px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000]"
            >
              Get in touch
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-[9px] transition-colors hover:bg-surface-soft lg:hidden"
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

        {open ? (
          <nav
            id={menuId}
            className="border-t border-border-soft bg-bg shadow-[0_18px_40px_-24px_rgba(26,24,21,0.35)] lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="mx-auto flex max-w-[1060px] flex-col gap-1 px-5 py-4">
              {[...links, { href: '/research', label: 'Papers' }, { href: '#contact', label: 'Get in touch' }].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[16px] text-fg-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
