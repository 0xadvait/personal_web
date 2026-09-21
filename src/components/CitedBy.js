
const venues = [
  {
    label: 'Journal of Banking & Finance',
    href: 'https://www.sciencedirect.com/science/article/abs/pii/S0378426625001499',
  },
  {
    label: 'European Journal of Finance',
    href: 'https://doi.org/10.1080/1351847X.2026.2624485',
  },
  { label: 'NBER', href: 'https://www.nber.org/papers/w34837' },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=tGFdvmgAAAAJ&hl=en',
  },
];

export default function CitedBy() {
  return (
    <section aria-label="Where the research is cited" className="border-t border-border-soft">
      <div className="mx-auto w-full max-w-[1060px] px-5 py-14 sm:px-8 sm:py-16">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {venues.map((v) => (
              <li key={v.label}>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full min-h-[76px] items-center justify-center rounded-[13px] border border-border bg-surface px-4 py-5 text-center text-[14px] leading-[1.35] text-fg-muted transition-all hover:border-fg-faint hover:bg-white hover:text-fg"
                >
                  {v.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-center text-[14.5px] leading-[1.6] text-fg-dim">
            <span className="text-fg-muted">The Economics of Wash Trading</span> is cited in
            peer-reviewed finance journals and an NBER working paper.
          </p>
      </div>
    </section>
  );
}
