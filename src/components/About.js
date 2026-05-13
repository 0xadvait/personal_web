import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const meta = [
  { k: 'Based', v: 'London' },
  { k: 'Now', v: 'CSO, OpenGradient' },
  { k: 'Before', v: 'Founder, SuperSight / Peri Labs' },
];

const outcomes = [
  { k: 'Revenue', v: '7 figures', d: 'new technical product' },
  { k: 'Reach', v: '50M+', d: 'technical film views' },
  { k: 'Launch', v: '1K+', d: 'Korea attendees in one week' },
];

const highlights = [
  { k: 'Product', v: 'zero to 7-figure revenue' },
  { k: 'Research', v: 'dated AI + crypto market reports' },
  { k: 'Market', v: '1,000+ launch attendees in one week' },
  { k: 'Media', v: '50M+ technical film views' },
];

export default function About() {
  return (
    <section id="about" className="section-band relative border-t border-border py-14 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          title="About"
          lede="I work on the awkward stretch between a good demo and something people will bet on."
        />

        <Reveal>
          <dl className="grid grid-cols-1 xs:grid-cols-3 gap-5 xs:gap-6 sm:gap-8 py-6 sm:py-8 border-y border-border">
            {meta.map((m) => (
              <div key={m.k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  {m.k}
                </dt>
                <dd className="mt-2 font-serif text-[15px] sm:text-base text-fg leading-snug">
                  {m.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-[minmax(0,680px)_280px] lg:items-start lg:gap-16">
          <div className="max-w-[680px]">
            <Reveal>
              <Block label="Now">
                <p>
                  I&apos;m Chief Strategy Officer at{' '}
                  <Link href="https://opengradient.ai">OpenGradient</Link>, backed by a16z crypto
                  and Coinbase Ventures.
                </p>
                <p>
                  My job sits across product, customers, partnerships, and the words around the
                  category. The broader pattern is the same as before: take something early and
                  technical, then make it feel real to the people who should care.
                </p>
                <dl className="grid gap-3 pt-1 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div key={item.k} className="border-y border-border px-0 py-3">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
                        {item.k}
                      </dt>
                      <dd className="mt-1 font-serif text-[15px] leading-snug text-fg-muted">
                        {item.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Block>
            </Reveal>

            <Reveal delay={0.05}>
              <Block label="Before">
                <p>
                  Before that, I founded <Link href="https://supersight.xyz/">SuperSight</Link>{' '}
                  (later{' '}
                  <Link href="https://perilabs.net/">Peri Labs</Link>), an Imperial College
                  AI research lab. The core product was an NL-to-SQL system that reached{' '}
                  <strong>200K+ users</strong> at 95% accuracy.
                </p>
                <p>
                  Raised $1.5M pre-seed at $30M from Animoca Brands, Blockchain Founders Fund, and
                  Vayner Fund. 30+ enterprise pilots. IP later acquired.
                </p>
              </Block>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="mb-2 mt-10 rounded-[2px] border-l-[3px] border-accent bg-accent-soft px-5 py-5 sm:mt-12 sm:px-7 sm:py-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent font-semibold mb-2.5">
                  Why
                </div>
                <p className="font-serif text-[17px] sm:text-[19px] leading-[1.55] text-fg">
                  I care about the moment before a market has clean language. The product is
                  starting to work, the money is paying attention, and someone still has to make
                  the whole thing make sense.
                </p>
                <p className="mt-3 font-serif italic text-[17px] sm:text-[19px] text-fg-muted">
                  That&apos;s the work.
                </p>
              </aside>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="hidden lg:block lg:sticky lg:top-28">
            <aside aria-label="Selected outcomes" className="border-y border-border py-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent font-semibold">
                Selected outcomes
              </div>
              <dl className="mt-5 divide-y divide-border-soft">
                {outcomes.map((item) => (
                  <div key={item.k} className="py-5 first:pt-0 last:pb-0">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
                      {item.k}
                    </dt>
                    <dd className="mt-2 font-serif text-4xl leading-none text-fg">{item.v}</dd>
                    <dd className="mt-2 font-serif text-[15px] leading-snug text-fg-muted">
                      {item.d}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Block({ label, children }) {
  return (
    <div className="mb-12 sm:mb-14">
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent mb-5 sm:mb-6 font-semibold">
        {label}
      </div>
      <div className="space-y-5 font-serif text-base sm:text-[17px] leading-[1.65] text-fg">
        {children}
      </div>
    </div>
  );
}

function Link({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline underline-offset-[3px]"
    >
      {children}
    </a>
  );
}
