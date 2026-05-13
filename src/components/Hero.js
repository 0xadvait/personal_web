'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

const focus = [
  ['01', 'Proofs for AI execution'],
  ['02', 'Portable memory for agents'],
  ['03', 'Settlement for agent actions'],
];

const signals = ['AI infra', 'crypto rails', 'technical media'];

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
        <div className="grid min-h-[88svh] items-center gap-12 pb-14 pt-28 sm:min-h-[92svh] sm:pb-20 sm:pt-36 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.62fr)] lg:gap-16">
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
                I build the trust layer for AI agents that are about to touch money, memory,
                identity, and institutional workflows.
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
                , I lead product strategy, ecosystem growth, and customer engineering across the
                decentralized GPU + TEE inference network and MemSync, a portable memory layer for
                agents. The job is to make frontier infrastructure legible enough to buy, trust,
                and build on. I also write research and{' '}
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
                Read the operating thesis <span aria-hidden>↓</span>
              </a>
              <span aria-hidden className="text-fg-faint">·</span>
              <a href="#impact" className="text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent">See receipts</a>
              <span aria-hidden className="text-fg-faint">·</span>
              <a href="#work" className="text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent">Work</a>
            </motion.div>
          </div>

          <motion.aside
            {...fadeUp(14, 0.42, 0.8)}
            aria-label="Current focus"
            className="relative overflow-hidden rounded-[3px] border border-border bg-surface shadow-[0_24px_80px_rgba(29,37,40,0.08)] lg:mt-20"
          >
            <div className="relative h-48 overflow-hidden border-b border-border sm:h-56">
              <Image
                src="/images/ascii_bg.gif"
                alt=""
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 390px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/10 to-bg/80" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    Current operating zone
                  </div>
                  <p className="mt-2 max-w-[17rem] font-serif text-[22px] leading-[1.1] text-fg">
                    Accountable agents, not smarter chat windows.
                  </p>
                </div>
                <span className="hidden rounded-[2px] border border-border bg-surface/80 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent sm:inline-flex">
                  2026
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6">
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

              <div className="mt-6 flex flex-wrap gap-2">
                {signals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-[2px] border border-border bg-bg px-2.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-fg-muted"
                  >
                    {signal}
                  </span>
                ))}
              </div>

              <p className="mt-6 border-l border-accent/35 pl-4 font-serif text-[16px] leading-[1.55] text-fg-muted">
                The through-line: execution you can prove, memory users can carry, and settlement
                nobody can quietly rewrite.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
