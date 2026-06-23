import { portfolioItems } from '../../data/portfolio';
import Card from '../ui/Card';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#030712] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            From Vision to Launch! Projects We're Proud Of
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Take a closer look at our recent work powering startups, enterprises, and everything in between.
          </p>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="p-0 overflow-hidden border-gray-200 dark:border-slate-800/80 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full bg-white dark:bg-[#0a0f1d]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-150 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-850">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Area */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Category */}
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {item.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer CTA Link */}
                <div className="pt-4 border-t border-gray-100 dark:border-slate-905">
                  <a
                    href={item.link || '#'}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover group"
                  >
                    View Project
                    <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
