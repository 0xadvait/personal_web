'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (y = 18, delay = 0, duration = 0.9) =>
    shouldReduceMotion
      ? {
          initial: false,
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="dot-field" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex min-h-[calc(100svh-4rem)] items-center pb-10 pt-20 sm:pb-12 sm:pt-24 lg:pt-18">
          <div className="max-w-[820px] min-w-0">
            <motion.div
              {...fadeUp(10, 0, 0.75)}
              aria-label="Current context"
              className="mb-6 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-1 border-y border-border py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted sm:mb-7 sm:grid-cols-3 sm:text-[10.5px]"
            >
              <span className="text-accent">London</span>
              <span className="sm:text-center">AI + crypto</span>
              <span className="col-span-2 text-fg-dim sm:col-span-1 sm:text-right">
                <LondonTime />
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp()}
              className="font-serif text-[52px] leading-[0.98] text-fg text-balance xs:text-[62px] sm:text-[78px] md:text-[88px] lg:text-[96px] xl:text-[108px]"
            >
              Advait <span className="hero-name-break italic text-accent">Jayant</span>
            </motion.h1>

            <motion.div
              {...fadeUp(18, 0.18)}
              className="mt-7 max-w-2xl space-y-3 font-serif text-[17px] leading-[1.5] text-fg sm:mt-8 sm:text-[18px] md:text-[20px] lg:text-[20.5px] xl:text-[21px]"
            >
              <p>
                CSO at{' '}
                <a
                  href="https://opengradient.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="OpenGradient website (opens in a new tab)"
                  className="text-accent hover:underline underline-offset-[3px]"
                >
                  OpenGradient
                </a>
                . Previously founded SuperSight / Peri Labs.
              </p>
              <p>
                I write research and make films about AI infrastructure, compute markets, and
                crypto rails.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(12, 0.28, 0.8)}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.12em] sm:mt-10 sm:gap-x-7 sm:text-[12px] lg:mt-9"
            >
              <a href="#thesis" className="text-fg-muted hover:text-accent transition-colors inline-flex items-center gap-1.5 border-b border-transparent hover:border-accent">
                Research <span aria-hidden>↓</span>
              </a>
              <span aria-hidden className="hidden text-fg-faint sm:inline">·</span>
              <a href="#impact" className="text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent">Track record</a>
              <span aria-hidden className="hidden text-fg-faint sm:inline">·</span>
              <a href="#work" className="text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent">Work</a>
            </motion.div>
          </div>
        </div>

        <motion.div
          {...fadeUp(10, 0.55, 1.1)}
          aria-hidden
          className="diag pointer-events-none absolute right-0 top-1/2 z-0 hidden w-[300px] -translate-y-[62%] select-none xl:block"
        >
          <HeroFigure />
        </motion.div>
      </div>
    </section>
  );
}

function HeroFigure() {
  return (
    <svg viewBox="0 0 320 300" className="w-full opacity-90">
      <defs>
        <marker
          id="hero-arrow"
          markerWidth="7"
          markerHeight="7"
          refX="5"
          refY="3.5"
          orient="auto"
        >
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#2446c7" />
        </marker>
      </defs>

      {/* orbit guide */}
      <circle cx="160" cy="150" r="96" className="dashed diag-orbit" />

      {/* centre mark */}
      <line x1="154" y1="150" x2="166" y2="150" className="stroke-soft" />
      <line x1="160" y1="144" x2="160" y2="156" className="stroke-soft" />
      <text x="160" y="130" textAnchor="middle" className="lbl-soft">
        FIG. 01
      </text>

      {/* flow arcs, clockwise */}
      <path d="M192.8,59.8 A96,96 0 0 1 255.1,163.4" className="stroke" markerEnd="url(#hero-arrow)" />
      <path d="M219.1,225.7 A96,96 0 0 1 100.9,225.7" className="stroke" markerEnd="url(#hero-arrow)" />
      <path d="M64.9,163.4 A96,96 0 0 1 124.0,61.0" className="stroke" markerEnd="url(#hero-arrow)" />

      {/* nodes */}
      <g>
        <rect x="112" y="41" width="96" height="26" rx="1.5" className="stroke fill-paper" />
        <text x="160" y="58" textAnchor="middle" className="lbl">
          Research
        </text>
      </g>
      <g>
        <rect x="200" y="185" width="86" height="26" rx="1.5" className="stroke fill-paper" />
        <text x="243" y="202" textAnchor="middle" className="lbl">
          Product
        </text>
      </g>
      <g>
        <rect x="45" y="185" width="64" height="26" rx="1.5" className="stroke fill-paper" />
        <text x="77" y="202" textAnchor="middle" className="lbl">
          Film
        </text>
      </g>
    </svg>
  );
}

function LondonTime() {
  const [time, setTime] = useState('Local time');

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date());

      setTime(`${formatted} local`);
    };

    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
