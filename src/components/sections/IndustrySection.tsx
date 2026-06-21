import React, { useState } from 'react';
import { industryTabs } from '../../data/industries';

// Inline SVG illustrations for each industry (no external image dependency)
const IndustryIllustrations: Record<string, React.ReactNode> = {
  fintech: (
    <svg viewBox="0 0 320 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0a0f1d"/>
      {/* Background glow */}
      <ellipse cx="160" cy="100" rx="120" ry="70" fill="#FF6B4A" opacity="0.05"/>
      {/* Credit card */}
      <rect x="60" y="50" width="200" height="120" rx="12" fill="#1a2035" stroke="#FF6B4A" strokeWidth="1.5"/>
      <rect x="60" y="80" width="200" height="28" fill="#FF6B4A" opacity="0.2"/>
      {/* Chip */}
      <rect x="80" y="92" width="36" height="28" rx="4" fill="#f59e0b" opacity="0.8"/>
      <line x1="80" y1="102" x2="116" y2="102" stroke="#92400e" strokeWidth="1" opacity="0.6"/>
      <line x1="80" y1="110" x2="116" y2="110" stroke="#92400e" strokeWidth="1" opacity="0.6"/>
      <line x1="98" y1="92" x2="98" y2="120" stroke="#92400e" strokeWidth="1" opacity="0.6"/>
      {/* Card number dots */}
      <circle cx="90" cy="140" r="3" fill="#FF6B4A" opacity="0.6"/>
      <circle cx="100" cy="140" r="3" fill="#FF6B4A" opacity="0.6"/>
      <circle cx="110" cy="140" r="3" fill="#FF6B4A" opacity="0.6"/>
      <circle cx="120" cy="140" r="3" fill="#FF6B4A" opacity="0.6"/>
      <circle cx="140" cy="140" r="3" fill="#FF6B4A" opacity="0.6"/>
      <circle cx="150" cy="140" r="3" fill="#FF6B4A" opacity="0.6"/>
      <circle cx="160" cy="140" r="3" fill="#FF6B4A" opacity="0.6"/>
      <circle cx="170" cy="140" r="3" fill="#FF6B4A" opacity="0.6"/>
      {/* Card name */}
      <rect x="80" y="155" width="80" height="6" rx="2" fill="#FF6B4A" opacity="0.4"/>
      {/* Glow logo top right */}
      <circle cx="230" cy="100" r="16" fill="none" stroke="#FF6B4A" strokeWidth="2" opacity="0.6"/>
      <circle cx="244" cy="100" r="16" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.6"/>
    </svg>
  ),
  ecommerce: (
    <svg viewBox="0 0 320 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0a0f1d"/>
      <ellipse cx="160" cy="100" rx="120" ry="70" fill="#FF6B4A" opacity="0.05"/>
      {/* Shopping bag */}
      <path d="M100 80 L100 155 L220 155 L220 80 Z" fill="#1a2035" stroke="#FF6B4A" strokeWidth="1.5"/>
      <path d="M130 80 C130 60 190 60 190 80" stroke="#FF6B4A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Products inside */}
      <rect x="115" y="100" width="35" height="35" rx="6" fill="#FF6B4A" opacity="0.3"/>
      <rect x="170" y="100" width="35" height="35" rx="6" fill="#f59e0b" opacity="0.3"/>
      <rect x="115" y="100" width="35" height="35" rx="6" stroke="#FF6B4A" strokeWidth="1" opacity="0.6"/>
      <rect x="170" y="100" width="35" height="35" rx="6" stroke="#f59e0b" strokeWidth="1" opacity="0.6"/>
      {/* Stars */}
      <text x="258" y="55" fill="#f59e0b" fontSize="14" opacity="0.8">★</text>
      <text x="270" y="55" fill="#f59e0b" fontSize="14" opacity="0.8">★</text>
      <text x="282" y="55" fill="#f59e0b" fontSize="14" opacity="0.4">★</text>
    </svg>
  ),
  healthcare: (
    <svg viewBox="0 0 320 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#0a0f1d"/>
      <ellipse cx="160" cy="100" rx="120" ry="70" fill="#10b981" opacity="0.05"/>
      {/* Cross symbol */}
      <rect x="135" y="55" width="50" height="90" rx="8" fill="#1a2035" stroke="#10b981" strokeWidth="1.5"/>
      <rect x="110" y="80" width="100" height="40" rx="8" fill="#1a2035" stroke="#10b981" strokeWidth="1.5"/>
      <rect x="148" y="68" width="24" height="64" rx="4" fill="#10b981" opacity="0.3"/>
      <rect x="120" y="92" width="80" height="16" rx="4" fill="#10b981" opacity="0.3"/>
      {/* Pulse line */}
      <polyline points="60,130 85,130 95,110 105,150 115,100 125,130 260,130" stroke="#FF6B4A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
    </svg>
  ),
};

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

            {/* Left: Industry Illustration */}
            <div className="relative aspect-[1.58] w-full rounded-2xl overflow-hidden border border-slate-700/60 bg-[#080d19] shadow-2xl">
              {IndustryIllustrations[activeData.id] || (
                <div className="w-full h-full flex items-center justify-center text-slate-600">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
              )}
              {/* Overlay glow on fintech */}
              {activeTab === 'fintech' && (
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-primary/20 pointer-events-none" />
              )}
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
