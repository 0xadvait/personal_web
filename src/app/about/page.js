import PageShell from '@/components/PageShell';
import About from '@/components/About';

export const metadata = {
  title: 'About',
  description:
    'Advait Jayant runs marketing and business development at OpenGradient. Founder of SuperSight / Peri Labs, London Business School alumnus, BITS Pilani computer science.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <PageShell current="/about" title="About">
      <About />
    </PageShell>
  );
}
