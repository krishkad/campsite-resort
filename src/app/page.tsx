
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CampsShowcase from '@/components/CampsShowcase';
import DayExperience from '@/components/DayExperience';
import Gallery from '@/components/Gallery';
import BookingSection from '@/components/BookingSection';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="overflow-hidden">
        <section id="hero">
          <Hero />
        </section>
        <section id="camps">
          <CampsShowcase />
        </section>
        <section id="experience">
          <DayExperience />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="booking">
          <BookingSection />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;