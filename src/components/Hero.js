'use client';

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="dot-field" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-center pt-32 sm:pt-40 pb-20 sm:pb-28">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-pixel uppercase font-bold text-[40px] xs:text-[52px] leading-[0.95] sm:text-[80px] md:text-[104px] lg:text-[128px] text-accent break-words"
          >
            Advait Jayant
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 sm:mt-10 max-w-2xl font-serif text-lg sm:text-xl md:text-[22px] leading-[1.55] text-fg space-y-3"
          >
            <p>
              I spend most of my time thinking about how to make production AI verifiable —
              inference proofs, persistent agent memory, and the on-chain bits that hold it all
              together.
            </p>
            <p>
              I&apos;m currently Chief Strategy Officer @{' '}
              <a
                href="https://opengradient.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-[3px]"
              >
                OpenGradient
              </a>
              . Occasionally I write things down or{' '}
              <a href="#work" className="text-accent hover:underline underline-offset-[3px]">
                produce films
              </a>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.12em]"
          >
            <a href="#about" className="text-fg-muted hover:text-accent transition-colors inline-flex items-center gap-1.5 border-b border-transparent hover:border-accent">
              About <span aria-hidden>↓</span>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pb-10 font-mono text-[10.5px] uppercase tracking-[0.16em] text-fg-dim"
        >
          <span className="inline-flex items-center gap-2">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-success opacity-70 animate-ping" />
              <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            Available — London
          </span>
        </motion.div>
      </div>
    </section>
  );
}
