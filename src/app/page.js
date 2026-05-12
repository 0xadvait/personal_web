import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProofStrip from '@/components/ProofStrip';
import Thesis from '@/components/Thesis';
import About from '@/components/About';
import StackDiagram from '@/components/StackDiagram';
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
        <ProofStrip />
        <Thesis />
        <About />
        <StackDiagram />
        <Experience />
        <Work />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
