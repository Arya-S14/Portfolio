import React from 'react';
import { Award, Crown, UsersRound } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    label: 'Research',
    title: 'Published research and open dataset',
    detail: 'Contributed to IEEE and Scientific Data publications, including the RoseVisuals dataset.'
  },
  {
    icon: Crown,
    label: 'Competition',
    title: 'State-level paper presentation · First place',
    detail: 'Recognized for a technical paper presentation on the future scope of artificial intelligence.'
  },
  {
    icon: Award,
    label: 'Academics',
    title: 'Institute Rank 1 · Diploma in Computer Engineering',
    detail: 'Completed the diploma with 92.40% at Karmaveer Bhaurao Patil Polytechnic.'
  },
  {
    icon: UsersRound,
    label: 'Leadership',
    title: 'Student body leader and event organizer',
    detail: 'Served as Head of Student Body and organized 10+ technical and non-technical events.'
  }
];

const Awards: React.FC = () => (
  <section id="awards" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 mb-3">Recognition</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-950">
          Highlights beyond <span className="text-cyan-700">the code.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {achievements.map(({ icon: Icon, label, title, detail }) => (
          <article key={title} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-800">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-800">{label}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
