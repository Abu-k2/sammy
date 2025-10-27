import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    image: "/images/hero1-optimized.jpg",
    headline: "Innovative Building Solutions",
    subtext: "Crafting the Future of Construction and Design"
  },
  {
    image: "/images/hero2-optimized.jpg",
    headline: "Excellence in Structural Engineering",
    subtext: "Strength, Safety, and Precision in Every Project"
  },
  {
    image: "/images/hero3-optimized.jpg",
    headline: "From Concept to Completion",
    subtext: "Your Vision, Expertly Built"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Carousel */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
      ))}
      
      {/* Brighter Overlay - reduced opacity for a brighter look */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-white container mx-auto px-4 sm:px-6 text-center sm:text-left w-full">
        <div className="max-w-3xl mx-auto sm:mx-0">
          <motion.h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sammy Builder and Designer
          </motion.h1>
          <motion.p 
            className="text-base xs:text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Civil Engineer | Building and Structural Works, Nairobi.
          </motion.p>
          <motion.div 
            className="flex flex-col xs:flex-row sm:flex-row gap-3 xs:gap-4 sm:gap-4 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="#projects" 
              className="bg-green-600 text-white font-semibold py-3 xs:py-4 px-6 xs:px-8 rounded-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white font-semibold py-3 xs:py-4 px-6 xs:px-8 rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2 xs:space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/70 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;