'use client';

import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import Chat from "./Chat";

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

const Hero = () => {
  return (
    <section id = "hero" className="relative bg-white text-black overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between py-4 lg:py-8 gap-8 lg:gap-12">
        
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-2xl">
          <motion.h1
            variants={fadeIn(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl lg:text-7xl font-thin tracking-tight"
          >
            Hi there, I&apos;m Huy!
          </motion.h1>

          {/* <motion.span
            variants={fadeIn(0.3)}
            initial="hidden"
            animate="visible"
            className="text-2xl lg:text-3xl font-medium mt-2 lg:mt-4 block"
          >
            I like to build things.
          </motion.span> */}

          <motion.p
            variants={fadeIn(0.6)}
            initial="hidden"
            animate="visible"
            className="mt-3 lg:mt-4 text-lg lg:text-xl font-light text-neutral-600"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Chat Section */}
        <div className="w-full max-w-xl lg:max-w-2xl">
          <motion.div
            variants={slideIn('right', 0.8)}
            initial="hidden"
            animate="visible"
            className=" overflow-hidden"
          >
            <Chat />
          </motion.div>
        </div>
      </div>

      {/* Subtle Divider */}
      <div className="w-full h-1 bg-neutral-200 mt-6 lg:mt-8"></div>
    </section>
  );
};



export default Hero;
