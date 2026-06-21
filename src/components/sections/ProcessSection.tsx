import React from 'react';
import { processSteps } from '../../data/process';

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-white relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Our Process
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* Zigzag Timeline Layout — matches Figma exactly */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-5 bottom-5 w-[2px] bg-gray-200 -translate-x-1/2 pointer-events-none hidden lg:block" />

          <div className="space-y-0">
            {processSteps.map((step) => {
              const isEven = step.id % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row items-center lg:items-center py-4 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-full lg:w-[45%] ${
                      isEven ? 'lg:pl-10 lg:text-left' : 'lg:pr-10 lg:text-right'
                    }`}
                  >
                    <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex items-center justify-between gap-4">
                      <div className={`${isEven ? 'order-1' : 'order-1'}`}>
                        <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{step.description}</p>
                      </div>
                      {/* Chevron icon */}
                      <div className="shrink-0 text-gray-400">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Circle Number on Center Line */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white font-extrabold items-center justify-center z-10 text-sm shadow-lg shadow-primary/30 glow-timeline-dot select-none">
                    {step.id}
                  </div>

                  {/* Mobile: Number badge */}
                  <div className="flex lg:hidden items-center gap-3 mt-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-md">
                      {step.id}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-[45%]" />
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
