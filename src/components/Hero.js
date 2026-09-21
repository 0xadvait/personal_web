import AsciiGlobe from './AsciiGlobe';

const email = 'advait@opengradient.ai';

export default function Hero() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <h1 className="sr-only">Advait Jayant</h1>

      {/* The stage is the Earth. */}
      <section id="top" className="relative min-h-[52vh] flex-1 md:min-h-[440px]">
        <AsciiGlobe className="absolute inset-0 h-full w-full" />
      </section>

      <div className="relative mx-auto w-full max-w-[1000px] px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-[#f5f4f0]/10 py-5 text-[15px]">
          <p className="rise text-[#f5f4f0]/70">Chief Strategy Officer at OpenGradient, London.</p>
          <a
            href={`mailto:${email}`}
            className="rise text-[#f5f4f0]/70 underline decoration-[#f5f4f0]/25 underline-offset-[3px] transition-colors hover:text-[#f5f4f0] hover:decoration-[#f5f4f0]"
            style={{ animationDelay: '0.08s' }}
          >
            {email}
          </a>
        </div>
      </div>
    </main>
  );
}
