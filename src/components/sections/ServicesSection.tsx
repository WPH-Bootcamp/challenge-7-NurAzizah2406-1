import React from 'react';
import { services } from '../../data/services';
import Card from '../ui/Card';
import { Monitor } from '../ui/Icons';

const ServicesSection = () => {
  // Custom theme SVGs corresponding to the 9 services of the Figma design
  const iconMap: Record<string, React.ReactNode> = {
    web: (
      <svg className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,107,74,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    mobile: (
      <svg className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,107,74,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    uiux: (
      <svg className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,107,74,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 8V16M8 12H16" />
      </svg>
    ),
    cloud: (
      <svg className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,107,74,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    software: (
      <svg className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,107,74,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    infrastructure: (
      <svg className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,107,74,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    cybersecurity: (
      <svg className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,107,74,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    qa: (
      <svg className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,107,74,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    support: (
      <svg className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,107,74,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  };

  return (
    <section id="services" className="py-24 bg-secondary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* Services Grid (3-column layout on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group flex flex-col justify-between hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-300 bg-[#0a0f1d] border-slate-800/80 p-8"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-850 group-hover:border-primary/30 transition-colors duration-300">
                  {iconMap[service.icon] || <Monitor className="w-8 h-8 text-primary" />}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative CTA text */}
              <div className="pt-6 mt-6 border-t border-slate-900 flex items-center gap-1.5 text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-5px] group-hover:translate-x-0">
                Learn more <span>→</span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
