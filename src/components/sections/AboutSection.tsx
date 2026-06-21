import React from 'react';
import { companyInfo } from '../../data/company';
import { Check } from '../ui/Icons';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AboutSection = () => {
  const leftRef = useScrollAnimation<HTMLDivElement>('animate-fade-left');
  const rightRef = useScrollAnimation<HTMLDivElement>('animate-fade-right');

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
    <section id="about" className="py-20 bg-gray-50 relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Visual Grid representing values */}
          <div ref={leftRef} className="lg:col-span-6 order-2 lg:order-1 opacity-0">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="p-6 bg-white border border-gray-100 rounded-xl space-y-3 hover:shadow-md hover:border-primary/20 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">💡</div>
                <h3 className="font-bold text-gray-900">Innovation</h3>
                <p className="text-xs text-gray-500">Always adopting modern technologies and design practices.</p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white border border-gray-100 rounded-xl space-y-3 translate-y-4 hover:shadow-md hover:border-primary/20 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center font-bold text-lg">💎</div>
                <h3 className="font-bold text-gray-900">Quality</h3>
                <p className="text-xs text-gray-500">Meticulous pixel-perfect UI execution and robust testing.</p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-white border border-gray-100 rounded-xl space-y-3 -translate-y-4 hover:shadow-md hover:border-primary/20 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center font-bold text-lg">🤝</div>
                <h3 className="font-bold text-gray-900">Trust</h3>
                <p className="text-xs text-gray-500">Reliable partners committed to your long-term success.</p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-white border border-gray-100 rounded-xl space-y-3 hover:shadow-md hover:border-primary/20 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center font-bold text-lg">⚡</div>
                <h3 className="font-bold text-gray-900">Speed</h3>
                <p className="text-xs text-gray-500">Fast, streamlined coding that hits delivery timelines.</p>
              </div>
            </div>
          </div>

          {/* Description Content */}
          <div ref={rightRef} className="lg:col-span-6 order-1 lg:order-2 space-y-6 opacity-0">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                About Our Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Empowering Businesses through Custom Tech Solutions
              </h2>
            </div>

            <p className="text-gray-500 leading-relaxed">
              Founded on the belief that digital solutions should be both powerful and delightful,{' '}
              <strong className="text-gray-800">{companyInfo.name}</strong> has helped hundreds of teams
              redefine their products. We combine standard development practices with custom designs to
              deliver measurable growth.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
              {points.map((point) => (
                <div key={point.title} className="flex gap-3">
                  <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Check size={12} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{point.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{point.desc}</p>
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
