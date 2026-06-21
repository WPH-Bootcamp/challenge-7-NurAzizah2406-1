import { useState } from 'react';
import { industryTabs } from '../../data/industries';

const IndustrySection = () => {
  const [activeTab, setActiveTab] = useState('fintech');

  const activeData = industryTabs.find((tab) => tab.id === activeTab) || industryTabs[0];

  return (
    <section id="industry" className="py-24 bg-secondary text-white relative">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Vertical tab buttons with border-left accent */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 gap-0 border-l border-slate-800/60 scrollbar-none">
            {industryTabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={isActive}
                  role="tab"
                  className={`px-5 py-4 text-left font-semibold text-sm tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer border-l-2 -ml-[2px] ${
                    isActive
                      ? 'border-primary text-primary bg-primary/5'
                      : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900/20'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab content */}
          <div
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#0a0f1d] border border-slate-800/80 p-8 rounded-3xl relative overflow-hidden shadow-xl transition-all duration-300"
          >
            {/* Background Glow */}
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

            {/* Left: Industry Image */}
            <div className="relative aspect-[1.58] w-full rounded-2xl overflow-hidden border border-slate-700/60 bg-[#080d19] shadow-2xl">
              <img
                key={activeData.id}
                src={activeData.image}
                alt={activeData.label}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#080d19]/40 via-transparent to-primary/10 pointer-events-none" />
            </div>

            {/* Right: Description */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold tracking-wide uppercase">
                {activeData.label}
              </div>
              <h3 className="text-xl font-bold text-white leading-tight">
                {activeData.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
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
