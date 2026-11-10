import React, { useState } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Database,
  Layers3,
  Search,
  Workflow
} from 'lucide-react';

const skillGroups = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Code2,
    description: 'Core programming languages and problem-solving foundations for building and shipping software.',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'Object-oriented programming', 'Data structures and algorithms']
  },
  {
    id: 'ai',
    title: 'AI & machine learning',
    icon: BrainCircuit,
    description: 'From supervised learning to generative models: designing, integrating, and evaluating AI-powered applications.',
    skills: ['Machine learning', 'Deep learning', 'Natural language processing', 'Generative AI', 'Large language models', 'AI agents', 'Prompt engineering', 'LangChain']
  },
  {
    id: 'retrieval',
    title: 'Search & RAG',
    icon: Search,
    description: 'Building and benchmarking retrieval pipelines that connect source documents with language models.',
    skills: ['Retrieval-augmented generation', 'Embeddings', 'Document chunking', 'Semantic search', 'FAISS', 'BM25', 'MPNet', 'Dense retrieval', 'Sparse retrieval', 'Hybrid retrieval']
  },
  {
    id: 'frameworks',
    title: 'Frameworks & libraries',
    icon: Layers3,
    description: 'Development tools and ML libraries used across projects, prototypes, and research.',
    skills: ['TensorFlow', 'Scikit-learn', 'Hugging Face', 'FastAPI', 'React', 'Node.js', 'Express.js', 'Android · Java / XML']
  },
  {
    id: 'data',
    title: 'APIs, data & cloud',
    icon: Database,
    description: 'Connecting applications to APIs, persistent data stores, and cloud infrastructure.',
    skills: ['REST APIs', 'MongoDB', 'MySQL', 'Redis', 'AWS S3', 'AWS EC2', 'Google Docs API', 'Gmail API', 'Firebase', 'Socket.IO', 'BullMQ']
  },
  {
    id: 'engineering',
    title: 'Engineering workflow',
    icon: Workflow,
    description: 'Practical habits for building reliable applications, automations, and maintainable project code.',
    skills: ['Git', 'GitHub', 'Debugging', 'Testing', 'Performance evaluation', 'API integration', 'Workflow automation', 'JWT authentication', 'Role-based access control', 'Make.com']
  },
  {
    id: 'web',
    title: 'Web & product',
    icon: Braces,
    description: 'Frontend and product skills for turning concepts into clear, accessible, responsive experiences.',
    skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'Responsive design', 'UI implementation', 'Flexbox']
  },
  {
    id: 'cloud-platforms',
    title: 'AI platforms',
    icon: Cloud,
    description: 'Experience connecting model APIs and modern AI services with end-to-end applications.',
    skills: ['OpenAI API', 'GPT-4-mini', 'LLaMA 3', 'Mistral 7B', 'Groq', 'Pipedream', 'Cursor IDE', 'Hugging Face']
  }
];

const skillNotes: Record<string, string> = {
  'Retrieval-augmented generation': 'Applied to a legal-assistant project; the resume reports 73.7% Top-5 retrieval accuracy across 300 queries.',
  FAISS: 'Used for vector search in hybrid retrieval experiments.',
  BM25: 'Used for sparse document retrieval and hybrid-search evaluation.',
  MPNet: 'Used to generate semantic embeddings for information retrieval.',
  'Document chunking': 'Used to prepare source documents for indexing and retrieval.',
  'AI agents': 'Built an eight-agent business-operations workflow and separate AI automation projects.',
  'Make.com': 'Used to connect a resume-review AI agent with Google Docs and Gmail APIs.',
  'Google Docs API': 'Integrated with a resume-review workflow for document processing.',
  'Gmail API': 'Integrated to automate user responses from an AI workflow.',
  FastAPI: 'Used to expose retrieval and AI functionality through backend APIs.',
  'AWS S3': 'Included in the cloud and infrastructure toolkit.',
  'AWS EC2': 'Included in the cloud and infrastructure toolkit.',
  'Socket.IO': 'Used in the NxtBiz real-time application stack.',
  BullMQ: 'Used to coordinate background jobs in NxtBiz.',
  'Role-based access control': 'Implemented in AI business-platform backend workflows.',
  'Performance evaluation': 'Included benchmark analysis across retrieval configurations and queries.',
  'Large language models': 'Hands-on projects integrate GPT-4-mini, LLaMA 3, and Mistral 7B.'
};

const Skills: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].id);
  const [activeSkill, setActiveSkill] = useState(skillGroups[0].skills[0]);
  const selectedGroup = skillGroups.find((group) => group.id === activeGroup) ?? skillGroups[0];
  const focusedSkill = selectedGroup.skills.includes(activeSkill) ? activeSkill : selectedGroup.skills[0];
  const GroupIcon = selectedGroup.icon;

  const selectGroup = (groupId: string) => {
    const group = skillGroups.find((item) => item.id === groupId);
    if (!group) return;
    setActiveGroup(group.id);
    setActiveSkill(group.skills[0]);
  };

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">An interactive toolkit</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Skills for turning <span className="text-cyan-300">AI into applications.</span>
          </h2>
          <p className="text-lg text-slate-400">
            Explore the technologies and methods listed on my resume. Pick a focus area, then
            select a skill to see how it connects to my project work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {skillGroups.map((group) => {
              const Icon = group.icon;
              const isSelected = group.id === activeGroup;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  id={`skills-tab-${group.id}`}
                  aria-selected={isSelected}
                  aria-controls="skills-panel"
                  onClick={() => selectGroup(group.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition lg:w-full ${
                    isSelected
                      ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-100'
                      : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium">{group.title}</span>
                  <span className="ml-auto hidden rounded-full bg-white/10 px-2 py-0.5 text-xs lg:inline">
                    {group.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="skills-panel"
            role="tabpanel"
            aria-labelledby={`skills-tab-${selectedGroup.id}`}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                <GroupIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-cyan-300">{selectedGroup.skills.length} resume skills</p>
                <h3 className="mt-1 text-2xl font-bold text-white">{selectedGroup.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{selectedGroup.description}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {selectedGroup.skills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  aria-pressed={focusedSkill === skill}
                  onClick={() => setActiveSkill(skill)}
                  className={`rounded-lg border px-3.5 py-2.5 text-sm transition ${
                    focusedSkill === skill
                      ? 'border-cyan-300/50 bg-cyan-300/15 font-semibold text-cyan-100 shadow-[0_0_20px_rgba(103,232,249,0.08)]'
                      : 'border-white/10 bg-slate-900/80 text-slate-300 hover:border-cyan-200/30 hover:text-white'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-cyan-200/10 bg-cyan-300/[0.045] p-5" aria-live="polite">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Skill spotlight</p>
              <h4 className="mt-2 text-lg font-semibold text-white">{focusedSkill}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {skillNotes[focusedSkill] ?? `${focusedSkill} is part of my working toolkit in ${selectedGroup.title.toLowerCase()}.`}
              </p>
              <a
                href="#projects"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-200 hover:text-white"
              >
                See related project work
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Skills and tooling reflect the experience described in the current resume and portfolio projects.
        </p>
      </div>
    </section>
  );
};

export default Skills;
