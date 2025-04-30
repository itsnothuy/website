'use client';

import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react";
import { SiMedium } from "react-icons/si";


// Animation Variants
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const slideIn = (direction = 'left', delay = 0) => ({
  hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay },
  },
});

// Projects Component
const Projects = () => {
  return (
    <section className="relative bg-white text-black overflow-hidden py-8 lg:py-16 border-t border-neutral-200">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Title */}
        <motion.h1
          variants={fadeIn(0)}
          initial="hidden"
          animate="visible"
          className="text-5xl lg:text-6xl font-thin tracking-tight text-center mb-12"
        >
          Projects
        </motion.h1>

        {/* Projects List */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start gap-8"
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/3">
                <Image
                  src={project.image}
                  width={400}
                  height={250}
                  alt={project.title || 'Project Image'}
                  className="rounded-lg object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-2/3 space-y-2">
                <h6 className="text-2xl font-semibold">{project.title}</h6>
                <p className="text-neutral-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Social Links */}
                <div className="flex items-center gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-500"
                    >
                      <Github className="w-6 h-6 text-gray-800" />
                    </a>
                  )}
                  {project.medium && (
                    <a
                      href={project.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-500"
                    >
                      <SiMedium className="w-6 h-6 text-gray-800" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
