import { Kicker } from './ui';

export default function About() {
  return (
    <section id="about" aria-label="About" className="border-t border-border-soft">
      <div className="mx-auto w-full max-w-[1060px] px-5 py-[72px] sm:px-8 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
            <Kicker className="lg:pt-2">About</Kicker>
            <div className="max-w-[68ch] space-y-5 text-[17px] leading-[1.68] text-fg-muted sm:text-[17.5px]">
              <p>
                I am Chief Strategy Officer at{' '}
                <a href="https://opengradient.ai" target="_blank" rel="noopener noreferrer" className="link">
                  OpenGradient
                </a>
                , where I lead product strategy, customer work, and partnerships. The company raised
                a{' '}
                <a
                  href="https://www.finsmes.com/2026/04/opengradient-raises-9-5m-in-total-funding.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  $9.5M seed led by a16z crypto
                </a>
                . I am based in London.
              </p>
              <p>
                Before that I founded SuperSight, later{' '}
                <a href="https://perilabs.net/" target="_blank" rel="noopener noreferrer" className="link">
                  Peri Labs
                </a>
                . We{' '}
                <a
                  href="https://www.finsmes.com/2023/07/supersight-raises-1m-in-pre-seed-funding.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  raised $1.5M pre-seed at $30M
                </a>{' '}
                from Animoca Brands, Blockchain Founders Fund, and Vayner Fund, went through the NEAR
                Incubator into the{' '}
                <a
                  href="https://x.com/delphi_labs/status/1884256227355492775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Delphi Labs AI Accelerator
                </a>{' '}
                and UT Austin&rsquo;s incubator, and reached 200K+ users and 30+ enterprise pilots.
                The IP was acquired.
              </p>
              <p>
                I wrote two solo SSRN papers in 2023, on{' '}
                <a href="/research/the-economics-of-wash-trading" className="link">
                  NFT wash trading
                </a>{' '}
                and the{' '}
                <a href="/research/beyond-ipos" className="link">
                  private-to-public-to-private cycle
                </a>
                , and before that 50+ technical pieces on AI for Technics Publications, featured in
                O&rsquo;Reilly Safari Books Online. I am an alumnus of London Business School, where I
                completed two master&rsquo;s degrees, an M.Res. in Business and Management Studies and
                a Master of Analytics and Management, and was enrolled in the PhD programme. I hold a
                Computer Science degree from BITS Pilani.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
