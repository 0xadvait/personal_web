'use client';

import { motion, useReducedMotion } from 'motion/react';

const signals = ['proofs for AI execution', 'portable memory', 'agent settlement'];

const pipeline = [
  { k: 'Request', v: 'intent + context' },
  { k: 'Memory', v: 'portable state' },
  { k: 'Execute', v: 'GPU + TEE' },
  { k: 'Prove', v: 'signed output' },
  { k: 'Settle', v: 'external record' },
];

const auditItems = [
  ['model', 'open model'],
  ['enclave', 'attested'],
  ['proof', 'ed25519'],
  ['state', 'committed'],
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
        <div className="grid min-h-[86svh] items-center gap-12 pb-6 pt-24 sm:min-h-[90svh] sm:pb-8 sm:pt-30 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.62fr)] lg:gap-16">
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
                I build infrastructure for AI agents that are about to touch money, memory,
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
                agents. I work on the parts that make this stack easier to buy, trust, and build
                on. I also write research and{' '}
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
              <a href="#impact" className="text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent">Track record</a>
              <span aria-hidden className="text-fg-faint">·</span>
              <a href="#work" className="text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent">Work</a>
            </motion.div>
          </div>

          <motion.aside
            {...fadeUp(14, 0.42, 0.8)}
            aria-label="Current focus"
            className="relative overflow-hidden rounded-[3px] border border-border bg-surface shadow-[0_24px_80px_rgba(29,37,40,0.08)] lg:mt-12"
          >
            <HeroSystemPanel />

            <div className="p-5 sm:p-6">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent">
                Current work
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {signals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-[2px] border border-border bg-bg px-2.5 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-fg-muted"
                  >
                    {signal}
                  </span>
                ))}
              </div>

              <p className="mt-5 border-l border-accent/35 pl-4 font-serif text-[15px] leading-[1.5] text-fg-muted">
                The work is direct: prove execution, let users carry memory, and settle actions
                where the operator cannot quietly rewrite them.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function HeroSystemPanel() {
  return (
    <div className="relative overflow-hidden border-b border-border bg-[linear-gradient(135deg,#ffffff_0%,#f7f7f2_46%,#edf3ff_100%)] p-5">
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(36,70,199,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,118,110,0.07)_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div
        aria-hidden
        className="absolute -right-12 -top-16 h-44 w-44 rounded-full border border-accent/20 bg-accent-soft/60"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 left-8 h-44 w-44 rounded-full border border-accent-alt/15 bg-surface/60"
      />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            Agent audit trail
          </div>
          <p className="mt-2 max-w-[18rem] font-serif text-[22px] leading-[1.08] text-fg">
            Accountable agents, not smarter chat windows.
          </p>
        </div>
        <span className="hidden rounded-[2px] border border-border bg-surface/90 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent sm:inline-flex">
          2026
        </span>
      </div>

      <div className="relative z-10 mt-5 grid gap-2">
        {pipeline.map((step, index) => (
          <div
            key={step.k}
            className="grid grid-cols-[2.1rem_minmax(0,1fr)_auto] items-center gap-3 rounded-[2px] border border-border bg-surface/82 px-3 py-2 shadow-[0_1px_0_rgba(29,37,40,0.03)]"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent-alt">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                {step.k}
              </div>
              <div className="mt-0.5 truncate font-serif text-[13px] leading-tight text-fg-muted">
                {step.v}
              </div>
            </div>
            <span
              aria-hidden
              className={`h-2 w-2 rounded-full ${index === 3 ? 'bg-accent' : 'bg-accent-alt/60'}`}
            />
          </div>
        ))}
      </div>

      <dl className="relative z-10 mt-4 grid grid-cols-2 gap-2">
        {auditItems.map(([k, v]) => (
          <div key={k} className="border-y border-border bg-bg/70 px-3 py-2">
            <dt className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-fg-dim">
              {k}
            </dt>
            <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-muted">
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
