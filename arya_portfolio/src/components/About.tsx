import React from 'react';
import { BookOpen, BrainCircuit, Database, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: BrainCircuit,
    title: 'Applied AI & machine learning',
    description: 'Building practical solutions with ML, deep learning, NLP, and generative AI.'
  },
  {
    icon: Database,
    title: 'Retrieval systems',
    description: 'Working with embeddings, hybrid search, FAISS, BM25, and RAG evaluation.'
  },
  {
    icon: BookOpen,
    title: 'Research mindset',
    description: 'Contributing to peer-reviewed research and open datasets in computer vision.'
  },
  {
    icon: Sparkles,
    title: 'Product-focused engineering',
    description: 'Connecting AI capabilities to reliable APIs, workflows, and useful applications.'
  }
];

const About: React.FC = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 mb-3">A little about me</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mb-6">
          I turn curious questions into <span className="text-cyan-700">working software.</span>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          I’m Arya, a Computer Science and Engineering student specializing in AI &amp; ML at
          Vishwakarma Institute of Information Technology, Pune. I enjoy taking ideas from
          research and experimentation through to useful products—especially in AI, information
          retrieval, and automation.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mt-4">
          Alongside my coursework, I’ve built AI agents and retrieval pipelines, completed an
          Android development internship, and contributed to published research and an open
          image dataset. I’m currently exploring AI engineering internship opportunities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {highlights.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="w-11 h-11 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
