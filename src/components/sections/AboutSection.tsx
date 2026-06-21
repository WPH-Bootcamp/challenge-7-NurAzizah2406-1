import React from 'react';
import { companyInfo } from '../../data/company';
import { Check } from '../ui/Icons';

const AboutSection = () => {
  const points = [
    {
      title: 'Strategic Thinkers',
      desc: 'We analyze your business objectives to design custom web architectures that deliver immediate value.',
    },
    {
      title: 'High Performance',
      desc: 'Every line of code is optimized for response speeds, search engine visibility (SEO), and conversion.',
    },
    {
      title: 'TypeScript Type-Safety',
      desc: 'Robust type architectures prevent runtime exceptions and make scalability a breeze.',
    },
    {
      title: 'Transparent Collaboration',
      desc: 'Continuous integration, git management, and regular checkins keep you fully aligned with our work.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Grid representing values */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">💡</div>
                <h3 className="font-bold text-secondary">Innovation</h3>
                <p className="text-xs text-slate-500">Always adopting modern technologies and design practices.</p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-3 translate-y-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-lg">💎</div>
                <h3 className="font-bold text-secondary">Quality</h3>
                <p className="text-xs text-slate-500">Meticulous pixel-perfect UI execution and robust testing.</p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-3 -translate-y-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-lg">🤝</div>
                <h3 className="font-bold text-secondary">Trust</h3>
                <p className="text-xs text-slate-500">Reliable partners committed to your long-term success.</p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold text-lg">⚡</div>
                <h3 className="font-bold text-secondary">Speed</h3>
                <p className="text-xs text-slate-500">Fast, streamlined coding that hits delivery timelines.</p>
              </div>
            </div>
          </div>

          {/* Description Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                About Our Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight">
                Empowering Businesses through Custom Tech Solutions
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              Founded on the belief that digital solutions should be both powerful and delightful, <strong>{companyInfo.name}</strong> has helped hundreds of teams redefine their products. We combine standard development practices with custom designs to deliver measurable growth.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
              {points.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Check size={12} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-secondary">{point.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
