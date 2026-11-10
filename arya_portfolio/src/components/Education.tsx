import React from 'react';
import { Award, CalendarDays, GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'Artificial Intelligence and Machine Learning',
    institution: 'Vishwakarma Institute of Information Technology',
    location: 'Pune, India',
    duration: 'June 2024 – March 2027',
    result: 'CGPA 9.64 / 10.0',
    description: 'Undergraduate study focused on artificial intelligence and machine learning.'
  },
  {
    degree: 'Diploma in Computer Engineering',
    specialization: 'Maharashtra State Board of Technical Education',
    institution: 'Karmaveer Bhaurao Patil Polytechnic',
    location: 'Satara, India',
    duration: 'June 2022 – March 2024',
    result: '92.40% · Institute Rank 1',
    description: 'Graduated with Institute Rank 1; also achieved second rank in 10th and MSBTE examinations.'
  },
  {
    degree: 'Higher Secondary Certificate',
    specialization: 'Science',
    institution: 'Maharaja Sayajirao Vidyalaya Junior College',
    location: 'Satara, India',
    duration: 'June 2020 – March 2022',
    result: '85.17%',
    description: 'Completed higher secondary education with a focus on science.'
  },
  {
    degree: 'Secondary School Certificate',
    specialization: 'Secondary education',
    institution: 'Nirmala Convent High School',
    location: 'Satara, India',
    duration: 'June 2010 – March 2020',
    result: '92.60%',
    description: 'Completed secondary education with a strong academic record.'
  }
];

const Education: React.FC = () => (
  <section id="education" className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">Academic journey</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Education &amp; <span className="text-cyan-300">growth</span>
        </h2>
        <p className="mt-4 text-slate-400">From a strong computing foundation to AI and machine learning.</p>
      </div>

      <div className="relative">
        <div className="absolute bottom-8 left-4 top-8 w-px bg-gradient-to-b from-cyan-300 via-blue-500 to-slate-700 lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
        <div className="space-y-7 lg:space-y-12">
          {education.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <article
                key={item.degree}
                className="relative grid pl-11 lg:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] lg:gap-0 lg:pl-0"
              >
                <span
                  className="absolute left-[0.56rem] top-8 z-10 h-3 w-3 rounded-full border-[3px] border-cyan-300 bg-slate-950 shadow-[0_0_16px_rgba(103,232,249,0.65)] lg:left-1/2 lg:top-9 lg:-translate-x-1/2"
                  aria-hidden="true"
                />
                <div className={`w-full lg:col-span-1 ${isReversed ? 'lg:col-start-3' : 'lg:col-start-1'} lg:row-start-1`}>
                  <div className={`rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.07] sm:p-8 ${isReversed ? 'lg:ml-6' : 'lg:mr-6'}`}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                        <CalendarDays className="h-4 w-4" aria-hidden="true" />
                        {item.duration}
                      </span>
                      {index === 0 && (
                        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                          Currently studying
                        </span>
                      )}
                    </div>
                    <div className="mt-5 flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                        <GraduationCap className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                        <p className="mt-1 text-sm font-medium text-cyan-200">{item.specialization}</p>
                      </div>
                    </div>
                    <p className="mt-5 font-medium text-slate-200">{item.institution}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                      <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                        <MapPin className="h-4 w-4 text-slate-500" aria-hidden="true" />
                        {item.location}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-3 py-1.5 text-sm font-semibold text-cyan-200">
                        <Award className="h-4 w-4" aria-hidden="true" />
                        {item.result}
                      </span>
                    </div>
                  </div>
                </div>
                {isReversed && <div className="hidden lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:block" aria-hidden="true" />}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
