'use client';

import { motion, useReducedMotion } from 'motion/react';

const focus = [
  ['01', 'Proofs for AI execution'],
  ['02', 'Portable memory for agents'],
  ['03', 'Settlement for agent actions'],
];

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
        <div className="min-h-[88svh] sm:min-h-[92svh] grid items-center gap-12 pt-28 pb-14 sm:pt-36 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div className="min-w-0">
            <motion.div
              {...fadeUp(10, 0, 0.75)}
              className="mb-7 inline-flex items-center gap-3 border-y border-border py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-fg-muted"
            >
              <span className="text-accent">Technical founder</span>
              <span aria-hidden className="h-px w-8 bg-accent/40" />
              <span>CSO at OpenGradient</span>
            </motion.div>

            <motion.h1
              {...fadeUp()}
              className="font-serif text-[56px] xs:text-[68px] sm:text-[88px] md:text-[104px] lg:text-[116px] leading-[0.98] text-fg text-balance"
            >
              Advait <span className="hero-name-break italic text-accent">Jayant</span>
            </motion.h1>

            <motion.div
              {...fadeUp(18, 0.18)}
              className="mt-8 sm:mt-10 max-w-2xl font-serif text-lg sm:text-xl md:text-[22px] leading-[1.55] text-fg space-y-3"
            >
              <p>
                I build verifiable AI infrastructure for agents that touch money, memory, and
                markets.
              </p>
              <p>
                At{' '}
                <a
                  href="https://opengradient.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="OpenGradient website (opens in a new tab)"
                  className="text-accent hover:underline underline-offset-[3px]"
                >
                  OpenGradient
                </a>
                , I lead product strategy, ecosystem growth, and customer engineering across a
                decentralized GPU + TEE inference network and MemSync, a portable memory layer for
                agents. I also write research and{' '}
                <a href="#work" className="text-accent hover:underline underline-offset-[3px]">
                  produce films
                </a>
                .
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(12, 0.34, 0.8)}
              className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.12em]"
            >
              <a href="#thesis" className="text-fg-muted hover:text-accent transition-colors inline-flex items-center gap-1.5 border-b border-transparent hover:border-accent">
                Read the thesis <span aria-hidden>↓</span>
              </a>
              <span aria-hidden className="text-fg-faint">·</span>
              <a href="#experience" className="text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent">Experience</a>
              <span aria-hidden className="text-fg-faint">·</span>
              <a href="#work" className="text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent">Work</a>
              <span aria-hidden className="text-fg-faint">·</span>
              <a href="#contact" className="text-fg-muted hover:text-accent transition-colors inline-flex items-center gap-1.5 border-b border-transparent hover:border-accent">
                Get in touch <span aria-hidden>→</span>
              </a>
            </motion.div>
          </div>

          <motion.aside
            {...fadeUp(14, 0.42, 0.8)}
            aria-label="Current focus and selected outcomes"
            className="border-y border-border py-6 sm:py-7 lg:mt-24"
          >
            <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent">
              Current focus
            </div>
            <ul className="mt-5 divide-y divide-border-soft">
              {focus.map(([num, label]) => (
                <li key={label} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent-alt">
                    {num}
                  </span>
                  <span className="font-serif text-[17px] leading-snug text-fg">{label}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-l border-accent/35 pl-4 font-serif text-[16px] leading-[1.55] text-fg-muted">
              The through-line: execution you can prove, memory users can carry, and settlement
              nobody can quietly rewrite.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
