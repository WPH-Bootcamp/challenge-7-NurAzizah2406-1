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
              className="group flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 transition-all duration-300 bg-white dark:bg-[#0b0f19] border border-transparent p-8 rounded-3xl"
            >
              <div className="space-y-4">
                {/* Icon Container - direct rendering matching Figma */}
                <div className="w-14 h-14 shrink-0">
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

                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white transition-colors pt-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
