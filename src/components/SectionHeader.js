import Reveal from './Reveal';

export default function SectionHeader({ index, title, lede }) {
  return (
    <div className="mb-10 max-w-3xl sm:mb-14 md:mb-16">
      <Reveal>
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent flex items-center gap-3">
          <span>{index}</span>
          <span className="h-px w-10 bg-accent/40" />
          <h2 className="text-fg-dim">{title}</h2>
        </div>
      </Reveal>
      {lede && (
        <Reveal delay={0.08}>
          <p className="mt-5 font-serif italic text-[21px] leading-[1.25] text-fg text-balance sm:mt-6 sm:text-[26px] md:text-[29px] lg:text-[31px]">
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
