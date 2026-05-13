'use client';

import { motion, useReducedMotion } from 'motion/react';

const signals = ['proofs for AI execution', 'portable memory', 'agent settlement'];

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
        <div className="grid items-center gap-9 pb-8 pt-20 sm:gap-10 sm:pb-10 sm:pt-24 md:pt-26 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.62fr)] lg:gap-12 lg:pt-18 xl:gap-16">
          <div className="min-w-0">
            <motion.div
              {...fadeUp(10, 0, 0.75)}
              className="mb-6 inline-flex items-center gap-3 border-y border-border py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted sm:mb-7 sm:text-[10.5px]"
            >
              <span className="text-accent">Technical founder</span>
              <span aria-hidden className="h-px w-8 bg-accent/40" />
              <span>CSO at OpenGradient</span>
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
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.12em] sm:mt-10 sm:gap-x-7 sm:text-[12px] lg:mt-9"
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
            className="relative w-full max-w-[520px] justify-self-center overflow-hidden rounded-[3px] border border-border bg-surface shadow-[0_24px_80px_rgba(29,37,40,0.08)] lg:mt-6 lg:max-w-none"
          >
            <HeroSystemPanel />

            <div className="p-4 sm:p-5">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-accent">
                Current work
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {signals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-[2px] border border-border bg-bg px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.13em] text-fg-muted"
                  >
                    {signal}
                  </span>
                ))}
              </div>

              <p className="mt-4 border-l border-accent/35 pl-4 font-serif text-[14px] leading-[1.45] text-fg-muted">
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
    <div className="relative overflow-hidden border-b border-border bg-[linear-gradient(135deg,#ffffff_0%,#f7f7f2_46%,#edf3ff_100%)] p-4 sm:p-5">
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
            Agent run
          </div>
          <p className="mt-2 max-w-[18rem] font-serif text-[20px] leading-[1.08] text-fg sm:text-[22px]">
            Agents that can be checked after they act.
          </p>
        </div>
        <span className="hidden rounded-[2px] border border-border bg-surface/90 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent sm:inline-flex">
          2026
        </span>
      </div>

      <div className="relative z-10 mt-4 overflow-hidden border border-border bg-surface/75 p-3 shadow-[0_1px_0_rgba(29,37,40,0.03)] sm:p-4">
        <svg
          aria-hidden
          viewBox="0 0 380 220"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="agent-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#2446c7" stopOpacity="0.78" />
              <stop offset="100%" stopColor="#0f766e" stopOpacity="0.58" />
            </linearGradient>
          </defs>
          <path
            d="M 96 63 H 148"
            fill="none"
            stroke="url(#agent-line)"
            strokeWidth="1.4"
          />
          <path
            d="M 96 157 H 148"
            fill="none"
            stroke="url(#agent-line)"
            strokeWidth="1.4"
          />
          <path
            d="M 232 63 H 284"
            fill="none"
            stroke="url(#agent-line)"
            strokeWidth="1.4"
          />
          <path
            d="M 232 157 H 284"
            fill="none"
            stroke="url(#agent-line)"
            strokeWidth="1.4"
          />
          <path d="M 190 86 V 134" fill="none" stroke="#c6d4f5" strokeWidth="1" />
        </svg>

        <div className="relative z-10 grid min-h-[178px] grid-cols-[0.84fr_1.02fr_0.84fr] items-center gap-1.5 sm:min-h-[190px] sm:gap-2">
          <div className="grid gap-3 sm:gap-4">
            <FlowNode k="Input" v="intent + context" />
            <FlowNode k="Memory" v="portable state" />
          </div>

          <div className="flex justify-center">
            <div className="relative flex h-24 w-full max-w-24 flex-col items-center justify-center border border-accent/35 bg-accent-soft/85 text-center shadow-[0_10px_30px_rgba(36,70,199,0.08)] sm:h-28 sm:max-w-28">
              <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-accent sm:text-[9px] sm:tracking-[0.16em]">
                Verified run
              </div>
              <div className="mt-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-accent/45 bg-surface sm:h-10 sm:w-10">
                <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M 5 12.5 L 10 17 L 19 7"
                    fill="none"
                    stroke="#2446c7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.4"
                  />
                </svg>
              </div>
              <div className="mt-2.5 font-serif text-[12px] leading-tight text-fg-muted sm:text-[13px]">
                TEE + model
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4">
            <FlowNode k="Output" v="signed result" align="right" />
            <FlowNode k="Settle" v="external record" align="right" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowNode({ k, v, align = 'left' }) {
  const textAlign = align === 'right' ? 'items-end text-right' : 'items-start text-left';

  return (
    <div
      className={`flex min-h-[52px] min-w-0 flex-col justify-center border-y border-border bg-surface/95 px-2.5 py-2 sm:px-3 ${textAlign}`}
    >
      <div className="font-mono text-[8px] uppercase tracking-[0.12em] text-accent sm:text-[9px] sm:tracking-[0.16em]">
        {k}
      </div>
      <div className="mt-1 font-serif text-[12px] leading-tight text-fg-muted sm:text-[13px]">
        {v}
      </div>
    </div>
  );
}
