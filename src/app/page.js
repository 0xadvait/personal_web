import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import StackDiagram from '@/components/StackDiagram';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import Speaking from '@/components/Speaking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
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
