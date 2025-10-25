import React from 'react';
import { motion } from 'framer-motion';

// Icons for the stats section
const ExperienceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ProjectsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const QualityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Content */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-8 border-green-200 rounded-lg transform -rotate-3 z-0"></div>
            <motion.img 
              src="/images/about.jpg" 
              alt="Sammy, the Civil Engineer on a construction site"
              className="relative rounded-lg shadow-2xl w-full max-w-sm h-auto object-cover object-top z-10"
              style={{aspectRatio: '4 / 5'}}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <div className="w-24 h-1 bg-green-700 mb-6"></div>
            <motion.h3 
              className="text-xl md:text-2xl font-semibold text-gray-700 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              My Mission: Building the Future, Responsibly.
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I am a Civil Engineer based in Nairobi with 3 years of experience in building construction and structural design. My focus is on delivering quality, safe, and cost-effective structures that stand the test of time for both residential and commercial clients.
            </motion.p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
              >
                <ExperienceIcon />
                <div>
                  <p className="text-xl font-bold text-gray-800">3+ Years</p>
                  <p className="text-sm text-gray-500">Experience</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
              >
                <ProjectsIcon />
                <div>
                  <p className="text-xl font-bold text-gray-800">20+</p>
                  <p className="text-sm text-gray-500">Projects</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
              >
                <QualityIcon />
                <div>
                  <p className="text-xl font-bold text-gray-800">Quality</p>
                  <p className="text-sm text-gray-500">Guaranteed</p>
                </div>
              </motion.div>
            </div>

            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              My passion lies in turning complex challenges into tangible, lasting solutions. I'm committed to innovation and excellence in every project, ensuring client satisfaction from concept to completion.
            </motion.p>
            <motion.a 
              href="#projects" 
              className="bg-green-700 text-white font-semibold py-3 px-8 rounded-md hover:bg-green-800 transition-all duration-300 inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;