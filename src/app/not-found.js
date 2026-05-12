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
    <main
      id="main-content"
      className="min-h-screen bg-bg text-fg flex items-center border-y border-border"
    >
      <section className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent flex items-center gap-3">
          <span>404</span>
          <span className="h-px w-10 bg-accent/40" />
          <span className="text-fg-dim">Not found</span>
        </div>
        <h1 className="mt-8 max-w-3xl font-serif text-5xl leading-[1.02] text-fg sm:text-6xl md:text-7xl">
          This page drifted off the graph.
        </h1>
        <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-fg-muted sm:text-xl">
          The link may be old, or the page may have moved. The homepage has the current writing,
          talks, and contact links.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-[44px] items-center gap-2 rounded-[3px] border border-accent bg-accent px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-accent-deep"
        >
          Return home <span aria-hidden>→</span>
        </Link>
      </section>
    </main>
  );
}
