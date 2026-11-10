import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-white">
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Arya Sabale</p>
          <p className="mt-1 text-sm text-slate-400">AI / ML · Research · Software engineering</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/Arya-S14" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white">
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/aryasabale/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white">
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="mt-7 border-t border-white/10 pt-5 text-xs text-slate-500">
        © {new Date().getFullYear()} Arya Sabale
      </div>
    </div>
  </footer>
);

export default Footer;
