import React, { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { Star } from '../ui/Icons';
import Card from '../ui/Card';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Header Section */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Ulasan dari Mitra Kami
          </h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Feedback and reviews from corporate leaders who scaled their digital platforms using our workflow.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative min-h-[340px] flex items-center justify-center">
          <Card className="w-full bg-slate-50 border-slate-100 p-8 sm:p-12 shadow-lg shadow-slate-100/50 rounded-2xl flex flex-col items-center justify-between text-center max-w-3xl">
            
            {/* Quote icon SVG decorator */}
            <div className="text-primary/25 text-5xl font-serif leading-none h-4 select-none mb-6">
              “
            </div>

            {/* Message block */}
            <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed max-w-xl font-medium">
              {current.message}
            </p>

            <div className="mt-8 space-y-4 w-full flex flex-col items-center">
              {/* Rating Star layout */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < current.rating ? 'text-accent fill-accent' : 'text-slate-200'}
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 mt-2 text-left">
                <img
                  src={current.avatar}
                  alt={current.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-secondary">{current.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {current.position}, <span className="text-primary">{current.company}</span>
                  </p>
                </div>
              </div>
            </div>

          </Card>
        </div>

        {/* Controls Layout */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-primary transition-all shadow-sm active:scale-95 cursor-pointer"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          
          {/* Dot Indicators */}
          <div className="flex gap-2.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-6 bg-primary' : 'w-2.5 bg-slate-200'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-primary transition-all shadow-sm active:scale-95 cursor-pointer"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
