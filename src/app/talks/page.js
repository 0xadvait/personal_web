import PageShell from '@/components/PageShell';
import Speaking from '@/components/Speaking';

export const metadata = {
  title: 'Talks',
  description:
    'Talks and lectures by Advait Jayant: Kryptoplanet 2025, the FHE Summit, University College London, and London Business School.',
  alternates: { canonical: '/talks' },
};

export default function TalksPage() {
  return (
    <PageShell current="/talks" title="Talks">
      <Speaking />
    </PageShell>
  );
}
