import { services } from '../../data/services';
import Card from '../ui/Card';

// Import service icon PNG assets
import webIcon from '../../assets/icons/WebDevelopment.png';
import mobileIcon from '../../assets/icons/AppDevelopment.png';
import uiuxIcon from '../../assets/icons/UXDesign.png';
import cloudIcon from '../../assets/icons/Cloud Solutions.png';
import softwareIcon from '../../assets/icons/SoftwareDevelopment.png';
import infrastructureIcon from '../../assets/icons/ITInfrastructure.png';
import cybersecurityIcon from '../../assets/icons/CybersecurityServices.png';
import qaIcon from '../../assets/icons/QASolutions.png';
import supportIcon from '../../assets/icons/Consulting&Support.png';
import chevronRight from '../../assets/icons/chevron-right.png';

const iconMap: Record<string, string> = {
  web: webIcon,
  mobile: mobileIcon,
  uiux: uiuxIcon,
  cloud: cloudIcon,
  software: softwareIcon,
  infrastructure: infrastructureIcon,
  cybersecurity: cybersecurityIcon,
  qa: qaIcon,
  support: supportIcon,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-[#030712] relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group flex flex-col justify-between hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 bg-white dark:bg-[#0a0f1d] border-gray-100 dark:border-slate-800/80 p-8"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-slate-900 flex items-center justify-center border border-orange-100 dark:border-slate-850 group-hover:border-primary/30 transition-colors duration-300 p-3">
                  {iconMap[service.icon] ? (
                    <img
                      src={iconMap[service.icon]}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                    </svg>
                  )}
                </div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA with chevron icon */}
              <div className="pt-5 mt-5 border-t border-gray-100 dark:border-slate-900 flex items-center gap-1.5 text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-5px] group-hover:translate-x-0">
                Learn more
                <img src={chevronRight} alt="→" className="w-3 h-3 object-contain opacity-70" />
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
