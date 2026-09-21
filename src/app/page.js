import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Research from '@/components/Research';
import Experience from '@/components/Experience';
import Films from '@/components/Films';
import Speaking from '@/components/Speaking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main id="main-content" className="mx-auto w-full max-w-[720px] px-5 sm:px-8">
        <Hero />
        <Research />
        <Experience />
        <Films />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
