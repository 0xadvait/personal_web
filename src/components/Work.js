import Image from 'next/image';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const filmCampaign = {
  num: '01',
  label: 'Film campaign',
  title: 'Open intelligence films',
  desc: 'Producer, director, writer. Three OpenGradient launch films.',
  links: [
    { label: 'Film I', href: 'https://x.com/OpenGradient/status/2045849964539171274' },
    { label: 'Film II', href: 'https://x.com/OpenGradient/status/2053766717474492927' },
    { label: 'Film III', href: 'https://x.com/OpenGradient/status/2052411220532109321' },
  ],
};

export default function Work() {
  return (
    <section id="work" className="relative border-t border-border bg-surface/40 py-14 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          title="Selected work"
        />

        <div className="max-w-3xl">
          <Reveal>
            <FeaturedWork item={filmCampaign} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork({ item }) {
  const primaryHref = item.href ?? item.links?.[0]?.href;
  const primaryLabel = item.href ? item.title : `${item.title} — ${item.links?.[0]?.label}`;

  return (
    <div
      className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[3px] border border-border bg-surface transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_50px_rgba(29,37,40,0.06)] focus-within:border-accent"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100" />

      <CampaignVisual />

      <div className="relative flex flex-col p-6 sm:h-full sm:p-7 md:p-8">
        <div className="relative z-10 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent">
          <span>
            <span className="text-accent">{item.num}</span>
            <span className="text-fg-faint mx-2">·</span>
            <span>{item.label}</span>
          </span>
          {/* Stretched anchor — clicking anywhere on the card opens the primary link */}
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${primaryLabel} (opens in a new tab)`}
            className="text-fg-faint transition-colors before:absolute before:inset-0 before:z-0 before:content-[''] group-hover:text-accent focus-visible:outline-offset-4"
          >
            <span aria-hidden>↗</span>
          </a>
        </div>

        <h3 className="relative z-10 mt-4 font-serif text-2xl leading-[1.1] text-fg transition-colors group-hover:text-accent sm:mt-5 sm:text-[28px] md:text-[30px]">
          {item.title}
        </h3>
        <p className="relative z-10 mt-3 font-serif text-[14.5px] leading-[1.55] text-fg-muted sm:text-[15px]">
          {item.desc}
        </p>

        {item.links && (
          <div className="relative z-10 mt-6 flex flex-wrap gap-2 sm:mt-auto sm:pt-6">
            {item.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${l.label} for ${item.title} (opens in a new tab)`}
                className="group/pill inline-flex min-h-[36px] items-center gap-1.5 rounded-[3px] border border-border bg-bg px-3.5 py-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-fg-muted transition-colors hover:border-accent hover:text-accent"
              >
                {l.label}
                <span aria-hidden className="text-fg-faint transition-colors group-hover/pill:text-accent">
                  ↗
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CampaignVisual() {
  return (
    <div className="relative min-h-[235px] overflow-hidden border-b border-border bg-fg sm:min-h-[300px] lg:min-h-[380px]">
      <Image
        src="/images/ascii-animation.gif"
        alt=""
        fill
        unoptimized
        sizes="(min-width: 768px) 520px, 100vw"
        className="object-cover opacity-80"
      />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,13,15,0.92)_0%,rgba(7,13,15,0.58)_52%,rgba(7,13,15,0.2)_100%)]" />
      <div aria-hidden className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 flex h-full min-h-[235px] flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/68">
              Films
            </div>
          </div>
          <span className="h-px w-10 bg-white/25" />
        </div>

        <div className="mt-10 border-t border-white/20 pt-4">
          <div className="grid grid-cols-3 gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/62">
            <span>Write</span>
            <span>Direct</span>
            <span>Release</span>
          </div>
        </div>
      </div>
    </div>
  );
}
