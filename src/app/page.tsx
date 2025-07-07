
import Blog from '@/components/Blog';
import BookingSection from '@/components/BookingSection';
import CampsShowcase from '@/components/CampsShowcase';
import Contact from '@/components/Contact';
import DayExperience from '@/components/DayExperience';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}
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
        <section>
          <Blog />
        </section>
        <section className='w-full' id="contact">
          <Contact />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;