import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const roles = ['AI / ML Engineer', 'Applied AI Developer', 'Researcher & Builder'];

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = roles[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === title) {
      timeout = setTimeout(() => setIsDeleting(true), 1400);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((index) => (index + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((text) => title.slice(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 45 : 85);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isDeleting]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(15,23,42,0.1),#020617_70%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to AI engineering internship opportunities
          </p>
          <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl">
            Arya <span className="text-cyan-300">Sabale</span>
          </h1>
          <p className="mt-4 min-h-9 text-xl text-slate-300 sm:text-2xl">
            {displayText}<span className="animate-blink text-cyan-300" aria-hidden="true">|</span>
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Computer Science and Engineering (AI &amp; ML) student at VIIT Pune, building
            AI-powered applications, retrieval systems, and tools grounded in research.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">CGPA 9.64 / 10</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">IEEE-published researcher</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Pune, India</span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/ARYA_SABALE_VIIT.pdf"
              download="Arya_Sabale_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-200"
            >
              Explore my work
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a href="https://github.com/Arya-S14" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-slate-400 hover:text-white">
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/aryasabale/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-slate-400 hover:text-white">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="mailto:aryaofficialaas14@gmail.com" aria-label="Email Arya" className="text-slate-400 hover:text-white">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-950/30">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-800">
              <img
                src="/arya-professional-photo.png"
                alt="Arya Sabale"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-2 pb-2 pt-5">
              <div>
                <p className="font-semibold text-white">AI, research &amp; engineering</p>
                <p className="mt-1 text-sm text-slate-400">Learning by building and measuring.</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
