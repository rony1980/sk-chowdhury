import Biography from '@/components/Biography';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Testimonial from '@/components/Testimonial';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto">
      <header className="px-4 md:px-8">
        <Navbar />
        <Hero />
      </header>
      <main className="px-4 md:px-8">
        <Biography />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
