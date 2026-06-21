import React from 'react';
import { services } from '../../data/services';
import Card from '../ui/Card';
import { Monitor, Smartphone, Palette, Server } from '../ui/Icons';

const ServicesSection = () => {
  const iconMap: Record<string, React.ReactNode> = {
    uiux: <Palette className="w-6 h-6 text-primary" />,
    web: <Monitor className="w-6 h-6 text-primary" />,
    mobile: <Smartphone className="w-6 h-6 text-primary" />,
    cloud: <Server className="w-6 h-6 text-primary" />,
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            High-Impact Services Tailored for Growth
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From design iteration to enterprise code deployments, we offer specialized digital services to accelerate your market presence and performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border-slate-100 bg-white"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <div className="group-hover:text-white group-hover:[&_svg]:text-white transition-colors">
                    {iconMap[service.icon] || <Monitor className="w-6 h-6 text-primary" />}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative CTA text */}
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-1 text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore service details <span>→</span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
