import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const meta = [
  { k: 'Based', v: 'London' },
  { k: 'Status', v: 'UK Global Talent' },
  { k: 'Education', v: 'LBS · BITS Pilani' },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 lg:py-40 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          title="About"
          lede="Most production AI asks you to trust the operator. I'm building the alternative."
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

        <div className="mt-16 sm:mt-20 md:mt-24 max-w-[680px]">
          <Reveal>
            <Block label="Now">
              <p>
                I&apos;m Chief Strategy Officer at{' '}
                <Link href="https://opengradient.ai">OpenGradient</Link> — the Network for Open
                Intelligence, backed by a16z crypto and Coinbase Ventures. We host, execute, and
                verify AI models on a decentralized GPU + TEE coprocessor.
              </p>
              <p>
                I lead product strategy, ecosystem growth, and customer engineering across the
                network and <strong>MemSync</strong>, our portable memory layer for AI agents. A few
                recent shipments:
              </p>
              <ul className="space-y-3 pl-0 list-none pt-1">
                <Bullet>
                  Took a new AI infrastructure product from <strong>zero to seven figures</strong>{' '}
                  in revenue.
                </Bullet>
                <Bullet>
                  Secured token listings across <strong>Coinbase, Binance, OKX</strong> and other
                  tier-one exchanges.
                </Bullet>
                <Bullet>
                  Scaled the network to{' '}
                  <strong>4,500+ models, 2M+ inferences, and 500K+ verifiable proofs</strong>.
                </Bullet>
                <Bullet>
                  Grew the <Link href="https://x.com/opengradient">OpenGradient X account</Link>{' '}
                  past <strong>50M+ views</strong>; produced, directed, and wrote OpenGradient&apos;s{' '}
                  <Link href="https://x.com/OpenGradient/status/2045849964539171274">films</Link>.
                </Bullet>
                <Bullet>
                  Launched OpenGradient into the Korean market — hosted events for{' '}
                  <strong>1,000+ people in a week</strong>, integrated with the local builder
                  community, and earned coverage in Korean press.
                </Bullet>
              </ul>
            </Block>
          </Reveal>

          <Reveal delay={0.05}>
            <Block label="Before">
              <p>
                I founded <Link href="https://supersight.xyz/">SuperSight</Link> (later{' '}
                <Link href="https://perilabs.net/">Peri Labs</Link>), an Imperial College–anchored
                AI research lab. I built the LLM-powered NL-to-SQL system end-to-end — schema
                grounding, retrieval, evaluation — to{' '}
                <strong>200K+ users at 95% accuracy</strong>.
              </p>
              <p>
                Raised $1.5M pre-seed at $30M from Animoca Brands, Blockchain Founders Fund, and
                Vayner Fund. Advised by Illia Polosukhin (NEAR · co-author of{' '}
                <em>Attention Is All You Need</em>), Sriram Vishwanath (UT Austin), Bowen Li
                (OpenAI), and Paul Taylor (BlackRock). IP later acquired.
              </p>
            </Block>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="mt-12 sm:mt-14 mb-2 rounded-[2px] border-l-[3px] border-accent bg-accent-soft py-5 sm:py-6 px-5 sm:px-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent font-semibold mb-2.5">
                Why
              </div>
              <p className="font-serif text-[17px] sm:text-[19px] leading-[1.55] text-fg">
                Production AI is going to need three things it doesn&apos;t have yet: a way to
                prove an inference happened the way it claims, a way to persist context across
                models and sessions, and a way to settle high-stakes agent actions where the
                operator can&apos;t cheat.
              </p>
              <p className="mt-3 font-serif italic text-[17px] sm:text-[19px] text-fg-muted">
                That&apos;s the work.
              </p>
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

function Bullet({ children }) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-x-4 items-baseline">
      <span aria-hidden className="text-accent select-none">→</span>
      <span>{children}</span>
    </li>
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
