import React from 'react';
import { ArrowUpRight, Briefcase } from 'lucide-react';

const Experience: React.FC = () => (
  <section id="experience" className="py-24 bg-slate-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 mb-3">Professional experience</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-950">Where I’ve contributed</h2>
      </div>

      <article className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
          <div className="flex gap-4">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center">
              <Briefcase className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-cyan-800 mb-1">Internship</p>
              <h3 className="text-2xl font-bold text-slate-950">Android Developer Intern</h3>
              <p className="text-slate-600 mt-1">Navyug Infotech Pvt. Ltd.</p>
            </div>
          </div>
          <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">Java · XML · Android</span>
        </div>
        <ul className="mt-7 space-y-3 text-slate-600">
          <li className="flex gap-3">
            <ArrowUpRight className="w-5 h-5 shrink-0 text-cyan-700 mt-0.5" aria-hidden="true" />
            Developed three Android applications, implementing application logic and user interfaces within project timelines.
          </li>
          <li className="flex gap-3">
            <ArrowUpRight className="w-5 h-5 shrink-0 text-cyan-700 mt-0.5" aria-hidden="true" />
            Debugged, tested, and optimized the applications to improve stability and loading performance.
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Experience;
