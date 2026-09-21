import Link from 'next/link';

const tabs = [
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/experience', label: 'Experience' },
  { href: '/talks', label: 'Talks' },
];

export default function Nav({ current = '/' }) {
  return (
    <header>
      <div className="mx-auto flex w-full max-w-[1000px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-5 sm:h-20 sm:py-0 sm:px-8">
        <Link
          href="/"
          className="text-[17px] font-medium leading-none tracking-[-0.01em] text-fg transition-opacity hover:opacity-70"
          aria-label="Advait Jayant home"
        >
          Advait Jayant
        </Link>

        <a
          href="mailto:advait@opengradient.ai"
          className="order-2 inline-flex items-center rounded-[9px] bg-fg px-[15px] py-[9px] text-[14.5px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000] sm:order-3"
        >
          Get in touch
        </a>

        <nav
          aria-label="Primary navigation"
          className="order-3 flex w-full items-center gap-5 sm:order-2 sm:ml-auto sm:mr-1 sm:w-auto"
        >
          {tabs.map((t) => {
            const active = current === t.href || (t.href !== '/' && current.startsWith(`${t.href}/`));
            return (
              <Link
                key={t.href}
                href={t.href}
                aria-current={active ? 'page' : undefined}
                className={`text-[14.5px] leading-none transition-colors ${
                  active ? 'text-fg' : 'text-fg-muted hover:text-fg'
                }`}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
