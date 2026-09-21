import Link from 'next/link';

export default function Nav() {
  return (
    <header>
      <div className="mx-auto flex h-16 w-full max-w-[720px] items-center justify-between gap-6 px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="font-serif text-[21px] leading-none text-fg transition-opacity hover:opacity-70 sm:text-[23px]"
          aria-label="Advait Jayant home"
        >
          Advait Jayant
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-5">
          <Link
            href="/research"
            className="text-[14.5px] leading-none text-fg-muted transition-colors hover:text-fg"
          >
            Research
          </Link>
          <a
            href="mailto:advait@opengradient.ai"
            className="inline-flex items-center rounded-[9px] bg-fg px-[15px] py-[9px] text-[14.5px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000]"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
