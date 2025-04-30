import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Footer Text */}
        <div className="text-center md:text-left">
          <p className="text-gray-600 text-sm md:text-base">
            © 2024 <span className="font-semibold">Huy Tran</span>. All Rights Reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-gray-600 text-xl">
          <a
            href="https://github.com/samipdevkota10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/samip-devkota/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/samip002/?igsh=MWptOHozNG55OG5rMQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-blue-500 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Quick Links */}
        <ul className="flex gap-4 text-gray-600 text-sm md:text-base mt-4 md:mt-0">
          <li>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
          </li>
          <li>
            <a href="#experiences" className="hover:text-blue-500 transition">Experiences</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
