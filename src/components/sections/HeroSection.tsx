import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Brand logos inline SVGs for professional crisp rendering
  const brands = [
    { name: 'Upwork', svg: (
      <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity" viewBox="0 0 120 40" fill="currentColor">
        <text x="5" y="28" fontSize="24" fontWeight="bold" fontFamily="sans-serif">upwork</text>
      </svg>
    )},
    { name: 'Zoom', svg: (
      <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity" viewBox="0 0 120 40" fill="currentColor">
        <text x="5" y="28" fontSize="24" fontWeight="bold" fontStyle="italic" fontFamily="sans-serif">zoom</text>
      </svg>
    )},
    { name: 'Postman', svg: (
      <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity" viewBox="0 0 120 40" fill="currentColor">
        <text x="5" y="28" fontSize="22" fontWeight="bold" letterSpacing="1" fontFamily="sans-serif">POSTMAN</text>
      </svg>
    )},
    { name: 'Databricks', svg: (
      <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity" viewBox="0 0 120 40" fill="currentColor">
        <text x="5" y="28" fontSize="22" fontWeight="bold" fontFamily="sans-serif">databricks</text>
      </svg>
    )},
    { name: 'Airbnb', svg: (
      <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity" viewBox="0 0 120 40" fill="currentColor">
        <text x="5" y="28" fontSize="24" fontWeight="bold" fontFamily="sans-serif">airbnb</text>
      </svg>
    )},
    { name: 'Dropbox', svg: (
      <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity" viewBox="0 0 120 40" fill="currentColor">
        <text x="5" y="28" fontSize="24" fontWeight="bold" fontFamily="sans-serif">Dropbox</text>
      </svg>
    )},
    { name: 'PayPal', svg: (
      <svg className="h-6 opacity-40 hover:opacity-100 transition-opacity" viewBox="0 0 120 40" fill="currentColor">
        <text x="5" y="28" fontSize="24" fontWeight="bold" fontStyle="italic" fontFamily="sans-serif">PayPal</text>
      </svg>
    )},
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-secondary pt-32 pb-20 overflow-hidden"
    >
      {/* Background glowing rings/gradients */}
      <div className="absolute top-1/4 left-1/10 w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/10 right-1/10 w-[40vw] h-[40vw] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Your Tech Partner for <br />
              <span className="text-primary glow-primary">Smarter Growth</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We deliver tailored IT solutions to help you scale with speed and confidence.
            </p>
            
            <div className="pt-2">
              <Button
                variant="primary"
                className="w-full sm:w-auto rounded-full px-8 py-3.5 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30"
                onClick={scrollToContact}
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Right Visual 3D Phone Rendering */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Main Wrapper */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/3] flex items-center justify-center">
              
              {/* Outer Glow behind the phone */}
              <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-primary/10 to-orange-500/10 blur-[80px] -z-10" />

              {/* Floating Cloud */}
              <div className="absolute top-2 right-12 w-20 h-20 text-primary animate-bounce duration-[4000ms] pointer-events-none drop-shadow-[0_0_15px_rgba(255,107,74,0.4)]">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M18 10C17.4 6 13.9 3 10 3C6.7 3 3.9 5.2 3.1 8.2C1.3 8.9 0 10.7 0 12.8C0 15.7 2.3 18 5.2 18H17.8C21.2 18 24 15.2 24 11.8C24 8.9 21.4 10.2 18 10Z" fill="currentColor" fillOpacity="0.8" />
                </svg>
              </div>

              {/* Floating Code tag */}
              <div className="absolute top-1/3 right-4 w-12 h-12 text-primary/80 animate-pulse pointer-events-none drop-shadow-[0_0_10px_rgba(255,107,74,0.3)]">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M8 6L2 12L8 18M16 6L22 12L16 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Floating Gear */}
              <div className="absolute bottom-12 left-10 w-16 h-16 text-primary/70 animate-spin duration-[15000ms] pointer-events-none drop-shadow-[0_0_12px_rgba(255,107,74,0.3)]">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.15a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>

              {/* 3D Smartphone Canvas Isometric layout */}
              <div className="relative w-[70%] aspect-[9/16] bg-slate-900 rounded-[36px] p-3.5 shadow-2xl border-4 border-slate-800 transform rotate-x-[20deg] rotate-y-[-20deg] rotate-z-[10deg] hover:rotate-x-[15deg] hover:rotate-y-[-15deg] transition-transform duration-700">
                {/* Phone screen inner content */}
                <div className="w-full h-full bg-[#0a0f1d] rounded-[28px] p-4 relative overflow-hidden flex flex-col justify-between border border-slate-800">
                  {/* Speaker and Camera notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full" />
                  
                  {/* Top Bar inside mockup */}
                  <div className="flex justify-between items-center mt-3">
                    <div className="w-8 h-2.5 bg-slate-800 rounded" />
                    <div className="w-5 h-2.5 bg-slate-800 rounded" />
                  </div>

                  {/* Wireframe Cards inside smartphone */}
                  <div className="flex-grow flex flex-col justify-center space-y-3.5">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                      <div className="w-1/2 h-3 bg-primary/20 rounded" />
                      <div className="w-full h-2.5 bg-slate-800 rounded" />
                      <div className="w-3/4 h-2.5 bg-slate-800 rounded" />
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                      <div className="w-1/3 h-3 bg-slate-800 rounded" />
                      <div className="w-full h-2.5 bg-slate-800/40 rounded" />
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                      <div className="w-2/3 h-3 bg-slate-800 rounded" />
                      <div className="w-full h-2.5 bg-slate-800/40 rounded" />
                    </div>
                  </div>

                  {/* Phone Bottom indicator */}
                  <div className="w-16 h-1 bg-slate-800 rounded-full mx-auto" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Muted Grayscale Brands logos bar */}
        <div className="mt-24 pt-8 border-t border-slate-900/80">
          <div className="text-center space-y-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Trusted by Global Innovators & Leading Brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-slate-500">
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center">
                  {brand.svg}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
