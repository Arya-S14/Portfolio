import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aryaofficialaas14@gmail.com',
    href: 'mailto:aryaofficialaas14@gmail.com'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Arya-S14',
    href: 'https://github.com/Arya-S14'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aryasabale',
    href: 'https://www.linkedin.com/in/aryasabale/'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 72180 80027',
    href: 'tel:+917218080027'
  }
];

const Contact: React.FC = () => (
  <section id="contact" className="py-24 bg-slate-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 mb-3">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-950">
            Have an interesting <span className="text-cyan-700">problem?</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            I’m open to AI engineering internship opportunities, research conversations, and
            collaborations. Reach out through email or connect with me below.
          </p>
        </div>

        <div className="mt-9 grid sm:grid-cols-2 gap-3">
          {links.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label === 'GitHub' || label === 'LinkedIn' ? '_blank' : undefined}
              rel={label === 'GitHub' || label === 'LinkedIn' ? 'noreferrer' : undefined}
              className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-cyan-500 hover:bg-cyan-50/50"
            >
              <span className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-cyan-800" aria-hidden="true" />
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">{label}</span>
                  <span className="mt-1 block font-medium text-slate-900">{value}</span>
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-cyan-800" aria-hidden="true" />
            </a>
          ))}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
            <MapPin className="h-5 w-5 text-cyan-800" aria-hidden="true" />
            <span>
              <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">Based in</span>
              <span className="mt-1 block font-medium text-slate-900">Pune, Maharashtra, India</span>
            </span>
          </div>
        </div>

        <a
          href="/ARYA_SABALE_VIIT.pdf"
          download="Arya_Sabale_Resume.pdf"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-cyan-800"
        >
          Download the latest resume
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
