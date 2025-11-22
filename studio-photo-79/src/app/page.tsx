import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioGrid />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
