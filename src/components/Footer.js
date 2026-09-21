import Link from 'next/link';
import { socialLinks } from '@/lib/site';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Google Scholar', href: socialLinks.scholar, external: true },
  { label: 'SSRN', href: socialLinks.ssrn, external: true },
];

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  const updated = now.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  return (
    <footer className="mx-auto w-full max-w-[720px] px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-24">
      <div className="border-t border-border-soft pt-6">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[14.5px]">
          {links.map((l) => (
            <li key={l.label}>
              {l.external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-dim transition-colors hover:text-fg"
                >
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className="text-fg-dim transition-colors hover:text-fg">
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="kicker mt-6 flex flex-wrap justify-between gap-x-6 gap-y-2">
          <span>&copy; {year} Advait Jayant</span>
          <span>Last updated {updated}</span>
        </div>
      </div>
    </footer>
  );
}
