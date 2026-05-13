import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const meta = [
  { k: 'Based', v: 'London' },
  { k: 'Now', v: 'CSO, OpenGradient' },
  { k: 'Before', v: 'Founder, SuperSight / Peri Labs' },
];

export default function About() {
  return (
    <section id="about" className="section-band relative border-t border-border py-14 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          title="About"
          lede="Short version: London, OpenGradient now, SuperSight / Peri Labs before."
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

        <div className="mt-12 max-w-[760px] sm:mt-16">
          <div>
            <Reveal>
              <Block label="Now">
                <p>
                  I&apos;m Chief Strategy Officer at{' '}
                  <Link href="https://opengradient.ai">OpenGradient</Link>, backed by a16z crypto
                  and Coinbase Ventures.
                </p>
                <p>
                  I work on product, customers, and partnerships for model networks and agent
                  workflows.
                </p>
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
          </div>
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
