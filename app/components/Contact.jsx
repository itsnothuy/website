'use client';

import { motion } from 'framer-motion';

// Animation Variants
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const Contact = () => {
  return (
    <motion.section
      variants={fadeIn(0)}
      initial="hidden"
      animate="visible"
      className="py-8 lg:py-16 px-6 lg:px-12 bg-white text-black border-t border-neutral-200"
    >
      <div className="container mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <h1 className="text-5xl font-thin tracking-tight">Get In Touch</h1>
          <p className="text-neutral-600 text-lg">
            Feel free to reach out if you have any questions, ideas, or just want to say hi!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#007bff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-neutral-500">Email</p>
                <a
                  href="mailto:me@samipdevkota.com"
                  className="text-blue-500 text-md font-medium hover:underline"
                >
                  huytrngqu@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Email"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Subject"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Message"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md p-3 font-medium text-sm transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
