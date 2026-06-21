import React, { useState } from 'react';
import { portfolioItems } from '../../data/portfolio';
import Card from '../ui/Card';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Design', 'Web', 'Mobile'];

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Our Latest Digital Endeavors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Discover how we apply strategic engineering and user-centered design to solve complex business goals.
          </p>
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="p-0 overflow-hidden border-slate-100/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full bg-white"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category Pill Overlaid */}
                <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide bg-white/90 text-slate-800 backdrop-blur-sm rounded-md shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Text Area */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-4 mt-2 border-t border-slate-50">
                  <a
                    href={item.link || '#'}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover group-hover:underline"
                  >
                    View Project Details
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
