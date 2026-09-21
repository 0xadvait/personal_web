import { socialLinks } from '@/lib/site';
import { Section } from './ui';

const email = 'advait@opengradient.ai';

const channels = [
  { label: 'GitHub', href: socialLinks.github },
  { label: 'X', href: socialLinks.x },
  { label: 'LinkedIn', href: socialLinks.linkedin },
  { label: 'Google Scholar', href: socialLinks.scholar },
  { label: 'SSRN', href: socialLinks.ssrn },
];

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="text-[16px] leading-[1.6] text-fg-muted">
        Email is easiest:{' '}
        <a href={`mailto:${email}`} className="link">
          {email}
        </a>
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
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
    </Section>
  );
}
