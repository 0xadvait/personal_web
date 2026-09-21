import AsciiGlobe from './AsciiGlobe';

const email = 'advait@opengradient.ai';

const stats = [
  { value: '50M+', label: 'views, year one of OpenGradient marketing' },
  { value: '7 figures', label: 'revenue from zero, via customers and partnerships' },
  { value: '500K', label: 'views on The State of Edge AI' },
];

export default function Hero() {
  const year = new Date().getFullYear();
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      {/* The stage: the globe fills it, the headline sits on the left. */}
      <section id="top" className="relative flex flex-1 flex-col md:block">
        {/* Globe host: a block above the headline on phones, the whole stage on desktop. */}
        <div className="relative h-[44vh] min-h-[280px] md:absolute md:inset-0 md:h-auto md:min-h-0">
          <AsciiGlobe className="absolute inset-0 h-full w-full" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden md:block md:bg-[linear-gradient(90deg,#0f0e0d_24%,rgba(15,14,13,0.6)_38%,rgba(15,14,13,0)_50%)]"
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-[1000px] items-center px-5 pb-14 pt-4 sm:px-8 md:min-h-[440px] md:py-16">
          <div className="rise pointer-events-none max-w-[460px]">
            <h1 className="text-[38px] font-normal leading-[1.04] tracking-[-0.03em] text-[#f5f4f0] sm:text-[50px] lg:text-[56px]">
              Marketing, BD,
              <br />
              and research{' '}
              <span className="block text-[#f5f4f0]/45">
                at the edge of AI
                <br />
                and crypto.
              </span>
            </h1>
            <p className="mt-7 text-[16px] leading-[1.55] text-[#f5f4f0]/65 sm:text-[17px]">
              Advait Jayant. Chief Strategy Officer at OpenGradient, London.
            </p>
          </div>
        </div>
      </section>

      {/* The instrument strip: three numbers, then the email. */}
      <div className="relative mx-auto w-full max-w-[1000px] px-5 sm:px-8">
        <dl
          className="rise grid gap-7 border-t border-[#f5f4f0]/10 pt-7 sm:grid-cols-3 sm:gap-8"
          style={{ animationDelay: '0.1s' }}
        >
          {stats.map((st) => (
            <div key={st.value}>
              <dt className="text-[30px] font-normal leading-none tracking-[-0.02em] text-[#f5f4f0] sm:text-[34px]">
                {st.value}
              </dt>
              <dd className="kicker mt-3 max-w-[40ch] leading-[1.5] text-[#f5f4f0]/45">{st.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-[#f5f4f0]/10 py-5 text-[14px]">
          <a
            href={`mailto:${email}`}
            className="text-[#f5f4f0]/70 underline decoration-[#f5f4f0]/25 underline-offset-[3px] transition-colors hover:text-[#f5f4f0] hover:decoration-[#f5f4f0]"
          >
            {email}
          </a>
          <span className="kicker text-[#f5f4f0]/35">&copy; {year} Advait Jayant</span>
        </div>
      </div>
    </main>
  );
}
