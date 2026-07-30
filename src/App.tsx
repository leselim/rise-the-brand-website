import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyChoose } from './components/WhyChoose';
import { Products } from './components/Products';
import { FeaturedProduct } from './components/FeaturedProduct';
import { PromiseSection } from './components/Promise';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] font-sans antialiased selection:bg-[#824DC1] selection:text-white">
      {/* Fixed Sticky Glass Navbar */}
      <Navbar />

      {/* 10 Numbered Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <WhyChoose />
        <Products />
        <FeaturedProduct />
        <PromiseSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
