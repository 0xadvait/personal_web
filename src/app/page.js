import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Thesis from '@/components/Thesis';
import ImpactLedger from '@/components/ImpactLedger';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import Speaking from '@/components/Speaking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main id="main-content" className="relative">
        <Hero />
        <Thesis />
        <ImpactLedger />
        <Experience />
        <Work />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
