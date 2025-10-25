import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  // We duplicate the images to create a seamless looping effect
  const imagesRow1 = [...GALLERY_IMAGES.slice(0, 4), ...GALLERY_IMAGES.slice(0, 4)];
  const imagesRow2 = [...GALLERY_IMAGES.slice(4, 8), ...GALLERY_IMAGES.slice(4, 8)];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Glimpses of My Work
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          A collection of moments and details from various projects, showcasing dedication to quality and craftsmanship.
        </motion.p>
      </div>

      <div className="w-full overflow-hidden space-y-4">
        {/* Row 1: Scrolling right */}
        <div className="scroller group">
          <motion.div 
            className="scroller-inner group-hover:pause"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {imagesRow1.map((src, index) => (
              <motion.img
                key={`r1-${index}`}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="h-64 w-auto rounded-lg shadow-md mx-2 flex-shrink-0"
                whileHover={{ scale: 1.1, zIndex: 10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scrolling left */}
        <div className="scroller group">
          <motion.div 
            className="scroller-inner group-hover:pause"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {imagesRow2.map((src, index) => (
              <motion.img
                key={`r2-${index}`}
                src={src}
                alt={`Gallery image ${index + 5}`}
                className="h-64 w-auto rounded-lg shadow-md mx-2 flex-shrink-0"
                whileHover={{ scale: 1.1, zIndex: 10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .scroller {
          -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
          mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
        }
        .scroller-inner {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
        }
        
        .group:hover .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Gallery;