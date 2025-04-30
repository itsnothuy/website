"use client";

import { BLOGS } from "../constants";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Blogs = () => {
  return (
    <section className="border-b border-neutral-900 py-12">
      {/* Section Title */}
      <motion.h1
        variants={fadeIn(0)}
        initial="hidden"
        animate="visible"
        className="text-center text-4xl font-bold mb-8"
      >
        Recent Blogs
      </motion.h1>

      {/* Blog List */}
      <div className="container mx-auto px-6 lg:px-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOGS.map((blog, index) => (
          <motion.div
            key={index}
            variants={fadeIn(index * 0.2)}
            initial="hidden"
            animate="visible"
            className="p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <Link href={blog.link} className="text-blue-600 hover:underline">
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/Blogs" className="text-blue-600 items-center hover:underline">
            More Blogs →
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
