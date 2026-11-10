import React from 'react';
import { ArrowUpRight, BarChart3, BookOpenCheck, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: BookOpenCheck,
    title: 'Research-grounded',
    description: 'I test ideas against evidence, measure model behavior, and document what works.'
  },
  {
    icon: Wrench,
    title: 'End-to-end builder',
    description: 'I connect models, APIs, data stores, and interfaces to deliver usable applications.'
  },
  {
    icon: BarChart3,
    title: 'Focused on outcomes',
    description: 'From retrieval benchmarks to workflow automation, I look for clear ways to evaluate impact.'
  }
];

const WhyHireMe: React.FC = () => (
  <section id="hire" className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">How I work</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
          Curious by nature. <span className="text-cyan-300">Practical by design.</span>
        </h2>
        <p className="text-lg text-slate-400">
          I bring research curiosity, hands-on engineering, and a steady focus on making technology useful.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {reasons.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <Icon className="h-7 w-7 text-cyan-300" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.06] p-8 sm:flex-row sm:items-center sm:p-10">
        <div>
          <h3 className="text-2xl font-bold text-white">Let’s build something thoughtful.</h3>
          <p className="mt-2 text-slate-400">Open to AI engineering internship opportunities and collaborations.</p>
        </div>
        <a
          href="mailto:aryaofficialaas14@gmail.com"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200"
        >
          Start a conversation
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default WhyHireMe;
