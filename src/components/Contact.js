import { socialLinks } from '@/lib/site';
import { Kicker } from './ui';

const email = 'advait@opengradient.ai';

const channels = [
  { label: 'GitHub', href: socialLinks.github },
  { label: 'LinkedIn', href: socialLinks.linkedin },
  { label: 'Google Scholar', href: socialLinks.scholar },
  { label: 'X', href: socialLinks.x },
  { label: 'SSRN', href: socialLinks.ssrn },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border-soft">
      <div className="mx-auto w-full max-w-[1060px] px-5 py-24 sm:px-8 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-[46ch] text-center">
            <Kicker>Contact</Kicker>
            <h2 className="mt-6 text-[34px] font-normal leading-[1.08] tracking-[-0.025em] text-fg sm:text-[44px] lg:text-[48px]">
              Say hi.{' '}
              <span className="tone-soft block sm:inline">A few lines is plenty.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[42ch] text-[16.5px] leading-[1.6] text-fg-muted">
              Email is easiest. Research, product, film, or anything adjacent.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-fg px-[20px] py-[13px] text-[15px] leading-none text-bg shadow-[0_1px_2px_rgba(26,24,21,0.16),0_10px_22px_-14px_rgba(26,24,21,0.7)] transition-colors hover:bg-[#000]"
              >
                {email}
              </a>
            </div>
            <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[14.5px]">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${c.label} (opens in a new tab)`}
                    className="text-fg-dim transition-colors hover:text-fg"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </section>
  );
}
