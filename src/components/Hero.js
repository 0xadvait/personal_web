export default function Hero() {
  return (
    <section id="top" className="pt-14 sm:pt-20">
      <h1 className="rise text-[36px] font-normal leading-[1.06] tracking-[-0.03em] text-fg sm:text-[46px]">
        Research, product, and film{' '}
        <span className="tone-soft block">at the edge of AI and crypto.</span>
      </h1>

      <div
        className="rise mt-8 space-y-5 text-[17px] leading-[1.68] text-fg-muted"
        style={{ animationDelay: '0.08s' }}
      >
        <p>
          I am Advait Jayant, Chief Strategy Officer at{' '}
          <a href="https://opengradient.ai" target="_blank" rel="noopener noreferrer" className="link">
            OpenGradient
          </a>{' '}
          in London, where I lead product strategy, customer work, and partnerships. Before that I
          founded SuperSight, later Peri Labs. I write research on AI infrastructure, compute
          markets, and crypto rails, and make the films that go with it.
        </p>
        <p>
          I am an alumnus of London Business School, where I completed two master&rsquo;s degrees,
          an M.Res. in Business and Management Studies and a Master of Analytics and Management, and
          was enrolled in the PhD programme. I hold a Computer Science degree from BITS Pilani.
        </p>
      </div>
    </section>
  );
}
