import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav current="/" />
      <main id="main-content">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
