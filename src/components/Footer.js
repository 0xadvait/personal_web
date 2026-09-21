import { socialLinks } from '@/lib/site';

const email = 'advait@opengradient.ai';

const channels = [
  { label: 'GitHub', href: socialLinks.github },
  { label: 'X', href: socialLinks.x },
  { label: 'LinkedIn', href: socialLinks.linkedin },
  { label: 'Google Scholar', href: socialLinks.scholar },
  { label: 'SSRN', href: socialLinks.ssrn },
];

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  const updated = now.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  return (
    <footer id="contact" className="mx-auto w-full max-w-[1000px] px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20">
      <div className="border-t border-border-soft pt-7">
        <p className="text-[15.5px] leading-[1.6] text-fg-muted">
          Email is easiest:{' '}
          <a href={`mailto:${email}`} className="link">
            {email}
          </a>
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[14.5px]">
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
        <div className="kicker mt-8 flex flex-wrap justify-between gap-x-6 gap-y-2">
          <span>&copy; {year} Advait Jayant</span>
          <span>Last updated {updated}</span>
        </div>
      </div>
    </footer>
  );
}
