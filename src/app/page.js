import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StructuredData from '@/components/StructuredData';

export const viewport = { themeColor: '#0f0e0d' };

export default function Home() {
  return (
    <div className="flex min-h-[100svh] flex-col bg-[#0f0e0d] text-[#f5f4f0]">
      <StructuredData />
      <Nav current="/" tone="dark" />
      <Hero />
    </div>
  );
}
