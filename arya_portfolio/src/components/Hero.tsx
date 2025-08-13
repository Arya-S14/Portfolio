import React, { useEffect, useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/ARYA_SABALE_VIIT.pdf';
    link.download = 'ARYA_SABALE_VIIT.pdf';
    link.click();
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      
      

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dhnu8milu/image/upload/v1754972946/ARYA_PROFILE1_hejnxx.jpg"
                  alt="Profile"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 animate-pulse"></div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           Arya Sabale
          </span>
        </h1>

        {/* Animated Title */}
        <div className="h-12 sm:h-16 mb-8">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="animate-blink text-cyan-400">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
          Saltator @VIIT | Computer Science and Engineering (Artificial Intelligence and Machine Learning) Undergraduate | Fellow at Nxtwave's CCBP 4.0 Academy | Completed Hand-on Projects       </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-500">
          <button
            onClick={handleDownloadResume}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transform"
          >
            <span className="flex items-center">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </span>
          </button>

          <button
            onClick={scrollToAbout}
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;