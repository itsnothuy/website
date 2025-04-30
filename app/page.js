import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Blogs />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
