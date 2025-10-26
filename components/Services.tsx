import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_LIST } from '../constants';

const Services: React.FC = () => {
  return (
    <section 
      id="services" 
      className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-406b9b212a0d?q=80&w=1920&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="relative container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES_LIST.map((service, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col text-left p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3 
                className="text-xl font-bold text-white mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-gray-200 text-sm leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;