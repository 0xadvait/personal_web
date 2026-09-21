import PageShell from '@/components/PageShell';
import Experience from '@/components/Experience';
import Films from '@/components/Films';

export const metadata = {
  title: 'Experience',
  description:
    'Advait Jayant: Chief Strategy Officer at OpenGradient, founder and CEO of Peri Labs (SuperSight), technical author at Technics Publications, and the OpenGradient marketing and launch films.',
  alternates: { canonical: '/experience' },
};

export default function ExperiencePage() {
  return (
    <PageShell current="/experience" title="Experience">
      <Experience />
      <h2 className="kicker mt-14">Launch films</h2>
      <div className="mt-5">
        <Films />
      </div>
    </PageShell>
  );
}
