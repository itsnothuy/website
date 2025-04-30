'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { rawBlogs } from './data';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export default function Blogs() {
  return (
    <>
        <Navbar />
        <section className="py-12 pb-80">
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
            {rawBlogs.map((blog, index) => (
            <motion.div
                key={blog.id}
                variants={fadeIn(index * 0.2)}
                initial="hidden"
                animate="visible"
                className="p-4 border rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
                <h3 className="text-xl font-semibold mb-2 break-words">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{new Date(blog.createdAt).toLocaleDateString()}</p>
                <div
                className="text-gray-700 mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
                />
                <Link href={`/Blogs/${blog.id}`} className="text-blue-600 hover:underline">
                Read More →
                </Link>
            </motion.div>
            ))}
        </div>
        </section>
        <Footer />
    </>
  );
}
