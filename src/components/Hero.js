import AsciiGlobe from './AsciiGlobe';

const proof = [
  {
    lead: 'Marketing',
    text: '50M+ views within a year of taking over marketing at OpenGradient, including three launch films I wrote and directed, and a Korea launch week with 1,000+ attendees.',
  },
  {
    lead: 'BD',
    text: 'Customer work and partnerships that helped take OpenGradient from zero to 7-figure revenue. Before that, built Peri Labs to 200K+ users and 30+ enterprise pilots.',
  },
  {
    lead: 'Research',
    text: 'Two solo SSRN papers, cited in the Journal of Banking & Finance, the European Journal of Finance, and an NBER working paper. The State of Edge AI report passed 500K views.',
  },
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-[1000px] px-5 sm:px-8">
      <div className="rise relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[18px] bg-[#141311] p-7 sm:min-h-[540px] sm:p-12 lg:min-h-[600px]">
        <AsciiGlobe className="absolute inset-0 h-full w-full" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,#141311_18%,rgba(20,19,17,0.55)_60%,rgba(20,19,17,0.15)_100%)] md:bg-[linear-gradient(90deg,#141311_18%,rgba(20,19,17,0.72)_42%,rgba(20,19,17,0)_68%)]"
        />
        <div className="pointer-events-none relative max-w-[420px]">
          <h1 className="text-[34px] font-normal leading-[1.06] tracking-[-0.03em] text-[#f5f4f0] sm:text-[44px] lg:text-[48px]">
            Marketing, BD, and research{' '}
            <span className="block text-[#f5f4f0]/50">at the edge of AI and crypto.</span>
          </h1>
          <p className="mt-6 text-[16px] leading-[1.55] text-[#f5f4f0]/70 sm:text-[17px]">
            Advait Jayant. Chief Strategy Officer at OpenGradient, London.
          </p>
        </div>
      </div>

      <div className="rise mt-10 grid gap-7 sm:grid-cols-3 sm:gap-8" style={{ animationDelay: '0.1s' }}>
        {proof.map((p) => (
          <p key={p.lead} className="text-[15px] leading-[1.6] text-fg-muted">
            <span className="font-medium text-fg">{p.lead}.</span> {p.text}
          </p>
        ))}
      </div>
    </section>
  );
}
