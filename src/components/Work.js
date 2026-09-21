import Image from 'next/image';
import { Section, SectionHeading } from './ui';

const films = [
  { label: 'Film I', href: 'https://x.com/OpenGradient/status/2045849964539171274' },
  { label: 'Film II', href: 'https://x.com/OpenGradient/status/2053766717474492927' },
  { label: 'Film III', href: 'https://x.com/OpenGradient/status/2052411220532109321' },
];

export default function Work() {
  return (
    <Section id="work" tone="soft">
      <SectionHeading
        index="04"
        label="Selected work"
        title="Three launch films,"
        tail="written, directed, released."
      />

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[52ch]">
            <h3 className="text-[24px] font-normal leading-[1.18] tracking-[-0.02em] text-fg sm:text-[28px]">
              Open intelligence films
            </h3>
            <p className="mt-4 text-[16.5px] leading-[1.65] text-fg-muted">
              Producer, director, and writer on the three OpenGradient launch films. Part of the
              work that took the account past 50M+ views in a year.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {films.map((f) => (
                <a
                  key={f.href}
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.label} (opens in a new tab)`}
                  className="inline-flex items-center gap-1.5 rounded-[9px] border border-border bg-surface px-4 py-2.5 text-[14px] leading-none text-fg-muted transition-all hover:border-fg-faint hover:bg-white hover:text-fg"
                >
                  {f.label}
                  <span aria-hidden className="text-fg-faint">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
          <figure className="relative overflow-hidden rounded-[16px] border border-border bg-fg shadow-[0_2px_4px_rgba(26,24,21,0.04),0_28px_60px_-40px_rgba(26,24,21,0.55)]">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/ascii_bg.gif"
                alt=""
                fill
                unoptimized
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(150deg,rgba(12,11,10,0.4)_0%,rgba(12,11,10,0.05)_55%,rgba(12,11,10,0.4)_100%)]"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 bg-[#141311] px-5 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/55">
              <span>Write · Direct · Release</span>
              <span className="text-white/35">2026</span>
            </figcaption>
          </figure>
      </div>
    </Section>
  );
}
