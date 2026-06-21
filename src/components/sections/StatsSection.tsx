import React from 'react';
import { stats } from '../../data/stats';

const StatsSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-secondary via-slate-900 to-secondary text-white overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-2 group">
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-blue-400 group-hover:scale-105 transition-transform duration-300 inline-block">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
