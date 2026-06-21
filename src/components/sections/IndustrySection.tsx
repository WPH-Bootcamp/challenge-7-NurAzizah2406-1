import React, { useState } from 'react';
import { industryTabs } from '../../data/industries';

const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState('fintech');

  const activeData = industryTabs.find((tab) => tab.id === activeTab) || industryTabs[0];

  return (
    <section className="py-24 bg-secondary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Built for Your Industry
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We've helped companies across industries launch smarter, faster, and more securely.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vertical tabs buttons */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 border-b lg:border-b-0 lg:border-l border-slate-800 scrollbar-none">
            {industryTabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-4 text-left font-bold text-sm tracking-wide rounded-xl lg:rounded-none lg:rounded-r-xl transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white lg:border-l-4 lg:border-primary lg:-ml-[4px]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/30'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab active content (Image & description) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#0a0f1d] border border-slate-800/80 p-8 rounded-3xl relative overflow-hidden shadow-xl">
            {/* Background Glow */}
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Left inside block: Glowing Gold Credit card mockup */}
            <div className="relative aspect-[1.58] w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl flex items-center justify-center">
              <img
                src={activeData.image}
                alt={activeData.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-80"
              />
              {/* Gold Credit Card Glowing Overlay Effect */}
              {activeTab === 'fintech' && (
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-primary/20 pointer-events-none mix-blend-color-dodge" />
              )}
            </div>

            {/* Right inside block: Copywriting description */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-light text-primary text-[10px] font-bold tracking-wide uppercase">
                {activeData.label} Vertical
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">
                {activeData.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {activeData.description}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IndustrySection;
