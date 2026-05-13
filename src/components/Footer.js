export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10 sm:py-12 bg-surface-soft/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between font-mono text-[11px] text-fg-dim uppercase tracking-[0.12em]">
        <span>© {year} Advait Jayant</span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href="#top" className="hover:text-accent transition-colors">
            Top
          </a>
          <a href="https://www.advait.tech" className="hover:text-accent transition-colors">
            advait.tech
          </a>
          <span>London</span>
        </div>
      </div>
    </footer>
  );
}
