import React from 'react';

const languages = ['English', 'Marathi', 'Hindi'];

const Languages: React.FC = () => (
  <section id="languages" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 mb-2">Communication</p>
        <h2 className="text-2xl font-bold text-slate-950">Languages</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {languages.map((language) => (
          <span key={language} className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 font-medium text-slate-700">
            {language}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Languages;
