import Link from 'next/link';

export const metadata = {
  title: 'Not found',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main id="main-content" className="flex min-h-screen items-center bg-bg text-fg">
      <section className="mx-auto w-full max-w-[720px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="kicker">404 &middot; Not found</div>
        <h1 className="mt-7 max-w-[18ch] text-[36px] font-normal leading-[1.06] tracking-[-0.03em] text-fg text-balance sm:text-[52px] lg:text-[58px]">
          This page drifted off the graph.
        </h1>
        <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.62] text-fg-muted">
          The link may be old, or the page may have moved. The homepage has the current writing,
          talks, and contact links.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-fg px-[18px] py-[11px] text-[14.5px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000]"
          >
            Return home
          </Link>
          <Link
            href="/research"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-border bg-surface px-[18px] py-[11px] text-[14.5px] leading-none text-fg transition-colors hover:border-fg-faint hover:bg-white"
          >
            Research
          </Link>
        </div>
      </section>
    </main>
  );
}
