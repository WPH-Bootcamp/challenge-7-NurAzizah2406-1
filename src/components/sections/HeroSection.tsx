import React from 'react';
import { companyInfo } from '../../data/company';
import Button from '../ui/Button';
import { ArrowRight } from '../ui/Icons';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-20 pb-16"
    >
      {/* Background radial glowing gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 md:space-y-8">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold tracking-wide uppercase">
              ✨ Leading the Digital Frontier
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight tracking-tight">
              Crafting Next-Gen <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {companyInfo.description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                className="w-full sm:w-auto group gap-2"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => scrollToSection('about')}
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Interactive CSS Illustration / Graphic */}
          <div className="lg:col-span-6 relative w-full max-w-md md:max-w-lg mx-auto lg:max-w-none flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-lg bg-slate-900/5 rounded-2xl p-2 shadow-2xl shadow-slate-200 border border-slate-200/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              {/* Decorative elements representing code and layouts */}
              <div className="absolute top-4 left-4 flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              
              {/* CSS Tech Graphics representing dashboard/wireframe */}
              <div className="w-[85%] h-[75%] bg-white rounded-xl shadow-lg border border-slate-100 p-4 space-y-4 relative overflow-hidden">
                {/* Dashboard top header */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="h-4 w-28 bg-slate-100 rounded-md" />
                  <div className="h-6 w-6 rounded-full bg-primary/20" />
                </div>

                {/* Dashboard grid layout */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 h-24 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-lg p-3 space-y-2 flex flex-col justify-between">
                    <div className="h-3 w-16 bg-primary/25 rounded-md" />
                    <div className="h-6 w-24 bg-primary/40 rounded-md" />
                  </div>
                  <div className="h-24 bg-slate-50 border border-slate-100 rounded-lg p-2 space-y-2 flex flex-col justify-between">
                    <div className="h-3 w-10 bg-slate-200 rounded-md" />
                    <div className="h-4 w-12 bg-slate-300 rounded-md" />
                  </div>
                </div>

                {/* Floating details cards */}
                <div className="space-y-2">
                  <div className="h-3 w-32 bg-slate-100 rounded-md" />
                  <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-100 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xs">✔</div>
                      <div className="h-3 w-20 bg-slate-200 rounded-md" />
                    </div>
                    <div className="h-3 w-8 bg-slate-300 rounded-md" />
                  </div>
                </div>

                {/* Absolute overlay items for depth */}
                <div className="absolute bottom-6 right-6 p-3 bg-slate-900 text-white rounded-xl shadow-xl space-y-1.5 translate-x-2 translate-y-2 scale-105 border border-slate-800">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Response Speed</div>
                  <div className="text-lg font-bold flex items-center gap-1.5">
                    0.24s <span className="text-xs text-emerald-400 font-medium">▲ 12%</span>
                  </div>
                </div>
              </div>

              {/* Backglow effect */}
              <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 bg-primary/20 rounded-full blur-[40px] -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
