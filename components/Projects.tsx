import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../constants';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-xl overflow-hidden group relative transform transition-transform duration-300"
    whileHover={{ y: -10 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative overflow-hidden">
      <img 
        src={project.imageUrl} 
        alt={project.name} 
        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    </div>
    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
      <motion.span 
        className="inline-block bg-green-700 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {project.category}
      </motion.span>
      <motion.h3 
        className="text-2xl font-bold mb-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {project.name}
      </motion.h3>
      <motion.p 
        className="text-sm text-gray-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {project.location} • {project.year}
      </motion.p>
      {/* Hidden details revealed on hover */}
      <motion.div 
        className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 pt-2"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, maxHeight: 160 }}
      >
        <p className="text-sm text-gray-300">
          <span className="font-semibold">Work:</span> {project.workDone}
        </p>
      </motion.div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filters = [
    ProjectCategory.ALL,
    ProjectCategory.RESIDENTIAL,
    ProjectCategory.COMMERCIAL,
    ProjectCategory.RENOVATING
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === ProjectCategory.ALL) {
      return PROJECTS;
    }
    return PROJECTS.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Portfolio</h2>
          <p className="text-lg text-gray-600">A selection of projects that showcase my skills and dedication.</p>
          <div className="w-24 h-1 bg-green-700 mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-green-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;