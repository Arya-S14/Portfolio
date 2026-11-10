import React from 'react';
import { ArrowUpRight, BadgeCheck } from 'lucide-react';

const certifications = [
  {
    title: 'IBM Machine Learning Professional Certificate',
    issuer: 'IBM · Coursera',
    date: '27 May 2026',
    image: '/certificates/ibm-machine-learning.png',
    verification: 'https://coursera.org/verify/professional-cert/8U06RT1NFHPI',
    description: 'Six courses spanning exploratory data analysis, supervised and unsupervised learning, deep learning, reinforcement learning, and a machine-learning capstone.'
  },
  {
    title: 'Generative AI Fundamentals Specialization',
    issuer: 'IBM · Coursera',
    date: '30 March 2026',
    image: '/certificates/ibm-generative-ai.png',
    verification: 'https://coursera.org/verify/specialization/BJXTRNE9FS9A',
    description: 'Five courses covering generative AI, prompt engineering, foundation models, ethical considerations, and business applications.'
  },
  {
    title: 'AI Workflows & Automation Workshop',
    issuer: 'NxtWave · CCBP 4.0 Academy',
    date: '22 January 2026',
    image: '/certificates/nxtwave-ai-workflows.jpg',
    verification: 'https://cdn1.ccbp.in/misc/workshop-acad-make-workshop-completion/F1AFARXHQO.png',
    description: 'Project completion workshop on Make.com, AI agents, MCP servers, APIs, and end-to-end automation.'
  },
  {
    title: 'Introduction to Databases',
    issuer: 'NxtWave · CCBP 4.0 Academy',
    date: '14 December 2025',
    image: '/certificates/nxtwave-databases.jpg',
    verification: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=GISZGAHJJJ',
    description: 'Course certificate covering SQL and database fundamentals.'
  },
  {
    title: 'MCP Project · MCP Mega Workshop',
    issuer: 'NxtWave · CCBP 4.0 Academy',
    date: '24 August 2025',
    image: '/certificates/nxtwave-mcp-project.jpg',
    verification: 'https://cdn1.ccbp.in/misc/workshop-acad-mcp-mega-workshop-completion/0D0M4P9EYM.png',
    description: 'Hands-on project exploring the Model Context Protocol with Cursor IDE, Pipedream, MCP servers, and prompt-driven AI workflows.'
  },
  {
    title: 'Build Your Own Responsive Website',
    issuer: 'NxtWave · CCBP 4.0 Academy',
    date: '29 July 2025',
    image: '/certificates/nxtwave-responsive-website.jpg',
    verification: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=OKMAYBZYVE',
    description: 'Course completion in responsive web development using Bootstrap and Flexbox.'
  },
  {
    title: 'Build Your Own Static Website',
    issuer: 'NxtWave · CCBP 4.0 Academy',
    date: '1 July 2025',
    image: '/certificates/nxtwave-static-website.jpg',
    verification: 'https://certificates.ccbp.in/academy/static-website?id=HVGZZJQAZJ',
    description: 'Course completion covering HTML, CSS, and Bootstrap.'
  }
];

const Certifications: React.FC = () => (
  <section id="certifications" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 mb-3">Credentials</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mb-5">
          Learning, with <span className="text-cyan-700">proof.</span>
        </h2>
        <p className="text-lg text-slate-600">
          Certificates from IBM, Coursera, and NxtWave. Select a certificate to view its image,
          or open the original public verification record.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <article key={cert.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <a href={cert.image} target="_blank" rel="noreferrer" aria-label={`View ${cert.title} certificate image`} className="block overflow-hidden bg-slate-100">
              <img
                src={cert.image}
                alt={`${cert.title} certificate issued to Arya Sabale`}
                loading="lazy"
                className="h-56 w-full object-contain p-3 transition-transform duration-300 hover:scale-[1.02]"
              />
            </a>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-cyan-800">{cert.issuer}</p>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-slate-950">{cert.title}</h3>
                </div>
                <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm text-slate-500">{cert.date}</p>
              <p className="mt-4 min-h-16 text-sm leading-relaxed text-slate-600">{cert.description}</p>
              <a
                href={cert.verification}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950"
              >
                View original credential
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-slate-500">
        <a
          href="https://drive.google.com/drive/folders/1-qahe7RtFb08NJvP-hX1l-utjOl7HX6G?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-cyan-800 underline underline-offset-4 hover:text-cyan-950"
        >
          Open the shared certificate archive
        </a>
        {' '}for the original certificate files.
      </p>
    </div>
  </section>
);

export default Certifications;
