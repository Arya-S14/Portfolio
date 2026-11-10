import React from 'react';
import { ArrowUpRight, BarChart3, Bot, BrainCircuit, Github, Mic2, Sprout } from 'lucide-react';

const projects = [
  {
    title: 'NxtBiz',
    category: 'AI business operations',
    description: 'An eight-agent orchestration platform that classifies customer emails and automates CRM updates, meeting scheduling, invoice drafts, and support tickets. Backend workflows span 15+ modules with role-based access and execution traceability.',
    technologies: ['AI agents', 'React', 'Node.js', 'Express', 'MongoDB', 'BullMQ', 'Redis', 'Socket.IO', 'JWT'],
    icon: Bot,
    color: 'from-cyan-500 to-blue-700',
    links: [
      { label: 'GitHub', href: 'https://github.com/Arya-S14/NxtBiz-' },
      { label: 'Live demo', href: 'https://nxtbiz-i1b0aunxn-arya-sabales-projects.vercel.app/' }
    ]
  },
  {
    title: 'AgentFlow-AI',
    category: 'AI workflow automation',
    description: 'Turns natural-language prompts into executable visual workflows using multi-agent orchestration, integrations, and background jobs.',
    technologies: ['AI agents', 'Workflow automation', 'Integrations', 'Background jobs'],
    icon: BrainCircuit,
    color: 'from-violet-500 to-indigo-700',
    links: [
      { label: 'GitHub', href: 'https://github.com/Arya-S14/Agentflow-AI' },
      { label: 'Live demo', href: 'https://agentflow-fr1x7s29r-arya-sabales-projects.vercel.app/' }
    ]
  },
  {
    title: 'RAG Legal Assistant',
    category: 'AI research project',
    description: 'A hybrid retrieval-augmented assistant for Indian Penal Code information. Evaluated 36 configurations across 300 queries and 10,800 evaluation calls, reaching 73.7% Top-5 retrieval accuracy.',
    technologies: ['Python', 'MPNet', 'BM25', 'FAISS', 'LLaMA 3', 'FastAPI'],
    icon: BrainCircuit,
    color: 'from-emerald-500 to-teal-700',
    links: [{ label: 'GitHub profile', href: 'https://github.com/Arya-S14' }]
  },
  {
    title: 'Resume Checker Bot',
    category: 'Generative AI agent',
    description: 'An automated resume-review agent using GPT-4-mini to produce structured feedback and ratings, connected to Google Docs and Gmail APIs to reduce manual work and reporting 95% user satisfaction.',
    technologies: ['GPT-4-mini', 'Prompt engineering', 'Make.com', 'Google APIs'],
    icon: Bot,
    color: 'from-orange-500 to-rose-700',
    links: [{ label: 'Live demo', href: 'https://web.telegram.org/a/#8136569853' }]
  },
  {
    title: 'NOVA Voice Assistant',
    category: 'Voice AI',
    description: 'A voice-controlled assistant where a local LLM reasons over a spoken command and triggers a real action, built with Groq, LLaMA 3, and Web Speech API.',
    technologies: ['Groq', 'LLaMA 3', 'Web Speech API'],
    icon: Mic2,
    color: 'from-sky-500 to-cyan-700',
    links: [{ label: 'GitHub', href: 'https://github.com/Arya-S14/Nova--Voice-Assistant-' }]
  },
  {
    title: 'Telco Churn Prediction',
    category: 'Machine learning',
    description: 'An end-to-end churn prediction project using the IBM Telco dataset with logistic regression, random forest, and gradient boosting.',
    technologies: ['Python', 'Scikit-learn', 'Classification', 'IBM Telco dataset'],
    icon: BarChart3,
    color: 'from-fuchsia-500 to-purple-700',
    links: [{ label: 'GitHub', href: 'https://github.com/Arya-S14/Telco-Churn-Prediction-IBM-Dataset' }]
  },
  {
    title: 'Rose Petal Health Classifier',
    category: 'Computer vision',
    description: 'A machine-learning model for sorting rose petals by health condition into fresh, dry, and diseased categories.',
    technologies: ['Deep learning', 'Image classification', 'Teachable Machine'],
    icon: Sprout,
    color: 'from-lime-500 to-green-700',
    links: [{ label: 'GitHub', href: 'https://github.com/Arya-S14/RosePetalHealthClassification-Deep-Learning-Model' }]
  },
  {
    title: 'Power BI Analytics Dashboard',
    category: 'Data analytics',
    description: 'An interactive analytics dashboard built with DAX and Power Query to explore and communicate data insights.',
    technologies: ['Power BI', 'DAX', 'Power Query', 'Data visualization'],
    icon: BarChart3,
    color: 'from-amber-500 to-orange-700',
    links: [{ label: 'GitHub', href: 'https://github.com/Arya-S14/Data-Analytics-Dashboard-Using-Power-BI' }]
  }
];

const Projects: React.FC = () => (
  <section id="projects" className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">Selected work</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
          Built to solve <span className="text-cyan-300">real problems.</span>
        </h2>
        <p className="text-lg text-slate-400">
          A mix of AI products, research projects, and data applications. Explore the code or
          try a live project where available.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article key={project.title} className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.07]">
              <div className={`flex h-36 items-end justify-between bg-gradient-to-br ${project.color} p-6`}>
                <span className="rounded-full bg-black/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {project.category}
                </span>
                <Icon className="h-10 w-10 text-white/85" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-4 pt-6">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-100"
                    >
                      {link.label === 'GitHub' || link.label === 'GitHub profile'
                        ? <Github className="h-4 w-4" aria-hidden="true" />
                        : <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
