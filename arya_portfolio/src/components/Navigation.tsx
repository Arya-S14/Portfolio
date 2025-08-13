import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Awards' },
    { id: 'languages', label: 'Languages' },
    { id: 'projects', label: 'Projects' },
    { id: 'hire', label: 'Why Hire Me' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleDownloadResume = () => {
   
    const link = document.createElement('a');
    link.href = '/assets/ARYA_SABALE_VIIT.pdf';
    link.download = 'ARYA_SABALE_VIIT.pdf';
    link.click();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.slice(0, 8).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="hidden md:block">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 hover:shadow-lg font-medium"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/98 backdrop-blur-md border-b border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleDownloadResume}
              className="w-full flex items-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-md hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-medium mt-4"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;