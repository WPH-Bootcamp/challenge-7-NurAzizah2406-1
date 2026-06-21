import React from 'react';
import { testimonials } from '../../data/testimonials';
import { Star } from '../ui/Icons';
import Card from '../ui/Card';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-[#030712] text-gray-900 dark:text-white relative transition-colors duration-300">
      {/* Background glowing decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-primary/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            What Partners Say About Working With Us
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* Testimonials Grid (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item) => {
            const isActive = item.id === 2; // Sarah Tan is the active/highlighted card in Figma screenshot

            return (
              <div key={item.id} className="relative h-full flex flex-col justify-between">
                {/* Quotation Mark Icon overlay on active card */}
                {isActive && (
                  <div className="absolute -top-6 left-6 text-primary text-7xl font-serif leading-none select-none z-20">
                    “
                  </div>
                )}

                <Card
                  className={`flex flex-col justify-between p-8 rounded-2xl h-full border transition-all duration-500 bg-white dark:bg-[#0a0f1d] ${
                    isActive
                      ? 'border-primary/60 shadow-[0_0_40px_-5px_rgba(255,107,74,0.15)] ring-1 ring-primary/45 relative'
                      : 'border-gray-200 dark:border-slate-900/60 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="space-y-6 flex-grow flex flex-col justify-between">
                    {/* Stars Block */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < item.rating ? 'text-accent fill-accent' : 'text-gray-200 dark:text-slate-800'}
                        />
                      ))}
                    </div>

                    {/* Message block */}
                    <p className="text-xs sm:text-sm text-gray-705 dark:text-slate-300 italic leading-relaxed font-medium">
                      “{item.message}”
                    </p>

                    {/* Author block */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-slate-900/80">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        loading="lazy"
                        className={`w-10 h-10 rounded-full object-cover border ${
                          isActive ? 'border-primary/50' : 'border-gray-250 dark:border-slate-800'
                        }`}
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 dark:text-white">
                          {item.name}
                        </h4>
                        <p className={`text-[11px] font-bold ${
                          isActive ? 'text-primary' : 'text-gray-500 dark:text-slate-400'
                        }`}>
                          {item.position} at {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center gap-2 pt-4">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-slate-800" />
          <span className="w-6 h-2.5 rounded-full bg-primary" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-slate-800" />
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
