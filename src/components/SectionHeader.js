import Reveal from './Reveal';

export default function SectionHeader({ index, title, lede }) {
  return (
    <div className="relative mb-10 sm:mb-14 md:mb-16">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-8 right-0 hidden select-none font-serif italic text-[120px] leading-none text-fg/[0.055] md:block"
      >
        {index}
      </span>
      <Reveal>
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent flex items-center gap-3">
          <span>{index}</span>
          <span className="h-px w-10 bg-accent/40" />
          <h2 className="text-fg-dim">{title}</h2>
          <span aria-hidden className="hidden h-px flex-1 bg-border sm:block" />
        </div>
      </Reveal>
      {lede && (
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-3xl font-serif italic text-[21px] leading-[1.25] text-fg text-balance sm:mt-6 sm:text-[26px] md:text-[29px] lg:text-[31px]">
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
