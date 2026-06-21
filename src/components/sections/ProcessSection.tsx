import React from 'react';
import { processSteps } from '../../data/process';

const ProcessSection = () => {
  return (
    <section id="about" className="py-24 bg-[#020617] text-white relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-primary/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Vertical Line (Visible on desktop) */}
          <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-[2px] bg-slate-800 lg:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-12 lg:space-y-4">
            {processSteps.map((step, idx) => {
              const isEven = step.id % 2 === 0;
              
              return (
                <div
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-start lg:items-center relative w-full ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12 flex justify-start lg:justify-end">
                    <div
                      className={`w-full max-w-md bg-[#0a0f1d] border border-slate-800/80 p-5 rounded-2xl shadow-xl transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 ${
                        isEven ? 'lg:text-left' : 'lg:text-right'
                      }`}
                    >
                      <h3 className="text-lg font-bold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Circle Number on Timeline */}
                  <div className="absolute left-3 lg:left-1/2 top-4 lg:top-1/2 w-10 h-10 rounded-full bg-primary text-white font-extrabold flex items-center justify-center -translate-x-0 lg:-translate-x-1/2 lg:-translate-y-1/2 glow-timeline-dot z-25 text-sm select-none">
                    {step.id}
                  </div>

                  {/* Empty spacer on desktop to push the layout */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
