'use client';


import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

// Animation Variants
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

// Experience Component
const Experience = () => {
  return (
    <section id= "Experience" className="relative bg-white text-black overflow-hidden py-8 lg:py-16 border-t border-neutral-200">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Title */}
        <motion.h1
          variants={fadeIn(0)}
          initial="hidden"
          animate="visible"
          className="text-5xl lg:text-6xl font-thin tracking-tight text-center mb-12"
        >
          Experience
        </motion.h1>

        {/* Experience List */}
        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start gap-6"
            >
              {/* Year Section */}
              <div className="w-full lg:w-1/4 text-neutral-500 text-sm font-medium">
                <p>{experience.year}</p>
              </div>

              {/* Details Section */}
              <div className="w-full lg:w-3/4 space-y-2">
                <h6 className="text-xl font-semibold">
                  {experience.role} 
                  <span className="block lg:inline text-sm text-neutral-500 font-normal">
                    {" - "}{experience.company}
                  </span>
                </h6>
                <p className="text-neutral-600">{experience.description}</p>
                {experience.description2 && (
                  <p className="text-neutral-600">{experience.description2}</p>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

<section />

export default Experience;
