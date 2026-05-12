import Reveal from './Reveal';

export default function SectionHeader({ index, title, lede }) {
  return (
    <div className="mb-14 sm:mb-20 md:mb-24 max-w-3xl">
      <Reveal>
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent flex items-center gap-3">
          <span>{index}</span>
          <span className="h-px w-10 bg-accent/40" />
          <h2 className="text-fg-dim">{title}</h2>
        </div>
      </Reveal>
      {lede && (
        <Reveal delay={0.08}>
          <p className="mt-6 sm:mt-7 font-serif italic text-2xl sm:text-3xl md:text-[34px] leading-[1.25] text-fg text-balance">
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
