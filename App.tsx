import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const App: React.FC = () => {
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      event.preventDefault();
      
      const elementToScrollTo = document.querySelector(href);

      if (elementToScrollTo) {
        elementToScrollTo.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    // Use event delegation on the document
    document.addEventListener('click', handleSmoothScroll);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <motion.div 
      className="bg-white text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppFloat />
      <Footer />
    </motion.div>
  );
};

export default App;