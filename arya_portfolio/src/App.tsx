import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Awards from './components/Awards';
import CertificatesSection from './components/CertificatesSection';
import Languages from './components/Languages';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Certifications />
      <CertificatesSection />
      <Skills />
      <Awards />
      <Languages />
      <Projects />
      <WhyHireMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;