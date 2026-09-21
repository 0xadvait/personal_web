import Image from 'next/image';
import { Kicker } from './ui';

const rise = (delay) => ({ animationDelay: `${delay}s` });

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto w-full max-w-[1060px] px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-16">
          <div className="min-w-0">
            <div className="rise" style={rise(0)}>
              <Kicker>London · AI infrastructure and market structure</Kicker>
            </div>

            <h1
              className="rise mt-7 max-w-[15ch] text-[40px] font-normal leading-[1.04] tracking-[-0.03em] text-fg text-balance sm:text-[54px] lg:text-[62px]"
              style={rise(0.07)}
            >
              Research, product, and film{' '}
              <span className="tone-soft">at the edge of AI and crypto.</span>
            </h1>

            <p
              className="rise mt-7 max-w-[54ch] text-[17px] leading-[1.62] text-fg-muted sm:text-[17.5px]"
              style={rise(0.14)}
            >
              I am Advait Jayant, Chief Strategy Officer at{' '}
              <a
                href="https://opengradient.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                OpenGradient
              </a>
              . Before that I founded SuperSight, later Peri Labs. I write research on AI
              infrastructure, compute markets, and crypto rails, and make the films that go with it.
            </p>

            <div className="rise mt-9 flex flex-wrap items-center gap-3" style={rise(0.21)}>
              <a
                href="#thesis"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-fg px-[18px] py-[11px] text-[14.5px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000]"
              >
                Read the research
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-border bg-surface px-[18px] py-[11px] text-[14.5px] leading-none text-fg transition-colors hover:border-fg-faint hover:bg-white"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="rise min-w-0" style={rise(0.28)}>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <figure className="relative overflow-hidden rounded-[16px] border border-border bg-fg shadow-[0_2px_4px_rgba(26,24,21,0.04),0_28px_60px_-40px_rgba(26,24,21,0.55)]">
      <div className="relative aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-[4/3]">
        <Image
          src="/images/ascii-animation.gif"
          alt=""
          fill
          unoptimized
          priority
          sizes="(min-width: 1024px) 460px, 100vw"
          className="object-cover opacity-[0.88]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(150deg,rgba(12,11,10,0.55)_0%,rgba(12,11,10,0.1)_55%,rgba(12,11,10,0.45)_100%)]"
        />
      </div>
      <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 bg-[#141311] px-5 py-3.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/55">
        <span>Open intelligence films</span>
        <span className="text-white/35">OpenGradient</span>
      </figcaption>
    </figure>
  );
}
