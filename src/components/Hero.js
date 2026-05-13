'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const signals = ['research', 'product', 'films'];

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
              aria-label="Current context"
              className="mb-6 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-1 border-y border-border py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted sm:mb-7 sm:grid-cols-3 sm:text-[10.5px]"
            >
              <span className="text-accent">London</span>
              <span className="sm:text-center">Research + product</span>
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
                I work on early technical ideas until they become products, markets, and stories
                people want to pass around.
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
                , that means product direction, customer work, and stories around model networks
                and agent workflows. I also{' '}
                <a
                  href="https://peri-labs.github.io/docs/assets/files/The_State_of_Edge_AI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="The State of Edge AI report (opens in a new tab)"
                  className="text-accent hover:underline underline-offset-[3px]"
                >
                  write research
                </a>{' '}
                and{' '}
                <a href="#work" className="text-accent hover:underline underline-offset-[3px]">
                  produce films
                </a>
                .
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(12, 0.28, 0.8)}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.12em] sm:mt-10 sm:gap-x-7 sm:text-[12px] lg:mt-9"
            >
              <a href="#thesis" className="text-fg-muted hover:text-accent transition-colors inline-flex items-center gap-1.5 border-b border-transparent hover:border-accent">
                Thesis <span aria-hidden>↓</span>
              </a>
              <span aria-hidden className="hidden text-fg-faint sm:inline">·</span>
              <a href="#impact" className="text-fg-muted hover:text-accent transition-colors border-b border-transparent hover:border-accent">Track record</a>
              <span aria-hidden className="hidden text-fg-faint sm:inline">·</span>
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
                Current lanes
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
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function LondonTime() {
  const [time, setTime] = useState('London time');

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date());

      setTime(`${formatted} London`);
    };

    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

function HeroSystemPanel() {
  const lanes = [
    ['01', 'Research', 'spot the thing before it has a clean name'],
    ['02', 'Product', 'turn the thesis into something customers use'],
    ['03', 'Film', 'make the idea feel real'],
  ];

  return (
    <div className="relative overflow-hidden border-b border-border bg-surface p-5 sm:p-6">
      <div aria-hidden className="absolute inset-y-0 right-0 w-28 bg-[linear-gradient(90deg,transparent_0%,rgba(36,70,199,0.08)_100%)]" />
      <div aria-hidden className="absolute right-6 top-6 h-20 w-20 rounded-full border border-accent/10 bg-accent-soft/40" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            Right now
          </div>
          <p className="mt-2 max-w-[20rem] font-serif text-[21px] leading-[1.1] text-fg sm:text-[24px]">
            Find the weird early signal. Build around it. Make people care.
          </p>
        </div>
        <span className="hidden rounded-[2px] border border-border bg-surface/90 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent sm:inline-flex">
          2026
        </span>
      </div>

      <div className="relative z-10 mt-6 divide-y divide-border-soft border-y border-border">
        {lanes.map(([step, title, copy]) => (
          <div key={title} className="grid gap-3 py-4 sm:grid-cols-[3rem_1fr] sm:gap-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-alt sm:pt-1">
              {step}
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                {title}
              </div>
              <p className="mt-1 font-serif text-[17px] leading-[1.35] text-fg-muted sm:text-[19px]">
                {copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
