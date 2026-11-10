import React from 'react';
import { ArrowUpRight, BookOpenCheck, Database, ExternalLink } from 'lucide-react';

const researchItems = [
  {
    icon: BookOpenCheck,
    type: 'Scientific Data · Nature Portfolio',
    title: 'RoseVisuals: A Multi-Class Dutch Rose Petal Images Dataset for Automated Health and Pigmentation Classification via Deep Learning',
    detail: 'Data Descriptor · Sci Data 13, 1209 (2026) · First author of 10',
    summary: 'An open dataset of 1,995 labelled rose-petal images across eight colour classes, with fresh, dry, and diseased samples. The linked validation repository contains duplicate-image detection and metadata-extraction scripts.',
    links: [
      { label: 'Read the paper', href: 'https://www.nature.com/articles/s41597-026-07630-4' },
      { label: 'Dataset · Mendeley Data v4', href: 'https://data.mendeley.com/datasets/f44jwtbfjg/4' },
      { label: 'Validation code', href: 'https://github.com/Arya-S14/RoseVisuals-Validation-Doc' }
    ]
  },
  {
    icon: BookOpenCheck,
    type: 'IEEE conference paper',
    title: 'RP-OCNN: A Hybrid Squeeze-Excitation Residual Network for Fine-Grained Rose Petal Condition Classification',
    detail: 'IEEE Xplore · DOI 10.1109/ICSFT66733.2026.11507816',
    summary: 'Research on fine-grained classification of rose-petal condition using a hybrid squeeze-excitation residual network.',
    links: [
      { label: 'View on IEEE Xplore', href: 'https://ieeexplore.ieee.org/document/11507816' },
      { label: 'DOI', href: 'https://doi.org/10.1109/ICSFT66733.2026.11507816' }
    ]
  },
  {
    icon: Database,
    type: 'Open research dataset',
    title: 'RoseVisuals dataset · version 4',
    detail: 'Mendeley Data · published 15 January 2026 · CC BY 4.0',
    summary: 'The dataset includes 1,995 images: 828 fresh, 902 dry, and 265 diseased rose petals. The article points to version 5 of the record.',
    links: [
      { label: 'Open dataset', href: 'https://data.mendeley.com/datasets/f44jwtbfjg/4' },
      { label: 'Dataset DOI', href: 'https://doi.org/10.17632/f44jwtbfjg.4' }
    ]
  }
];

const Research: React.FC = () => (
  <section id="research" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 mb-3">Research &amp; publications</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mb-5">
          Research with a path to <span className="text-cyan-700">real-world use.</span>
        </h2>
        <p className="text-lg text-slate-600">
          Work spanning computer vision, dataset curation, and validation—with papers and data
          available through their original publishers.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {researchItems.map(({ icon: Icon, type, title, detail, summary, links }) => (
          <article key={title} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="w-11 h-11 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-800 mb-2">{type}</p>
            <h3 className="text-lg font-bold text-slate-950 leading-snug">{title}</h3>
            <p className="text-sm font-medium text-slate-500 mt-3">{detail}</p>
            <p className="text-sm text-slate-600 leading-relaxed mt-4 mb-6">{summary}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-cyan-600 hover:text-cyan-800 transition-colors"
                >
                  {link.label}
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
      <a
        href="https://doi.org/10.1038/s41597-026-07630-4"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 mt-8 text-sm text-slate-500 hover:text-cyan-800"
      >
        Article DOI: 10.1038/s41597-026-07630-4
        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
      </a>
    </div>
  </section>
);

export default Research;
