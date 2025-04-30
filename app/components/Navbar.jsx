import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-6 lg:px-12 bg-white sticky top-0 z-50 shadow-none">
      {/* Logo Section */}
      <Link href="/">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
          <Image
            src="/assets/huy.jpeg" // Ensure the image is in public/assets
            alt="Huy's Profile Picture"
            width={80}
            height={80}
            priority
            className="object-cover w-full h-full"
          />
        </div>
      </Link>

      {/* Social Links */}
      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://github.com/itsnothuy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/huy-tran-8a9214234"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/tnqh_1505"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
