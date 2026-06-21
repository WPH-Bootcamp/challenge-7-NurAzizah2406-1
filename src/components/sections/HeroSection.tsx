import Button from '../ui/Button';

const HeroSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Brand logo names — rendered as styled text to avoid external image deps
  const brandNames = [
    { name: 'upwork', style: 'italic' as const },
    { name: 'zoom', style: 'normal' as const },
    { name: 'POSTMAN', style: 'normal' as const },
    { name: 'databricks', style: 'normal' as const },
    { name: 'airbnb', style: 'normal' as const },
    { name: 'Dropbox', style: 'normal' as const },
    { name: 'PayPal', style: 'italic' as const },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-white dark:bg-[#030712] pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 via-white to-slate-50 dark:from-orange-950/20 dark:via-[#030712] dark:to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-5 text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
              Your Tech Partner for <br />
              <span className="text-primary">Smarter Growth</span>
            </h1>

            <p className="text-base text-gray-500 dark:text-slate-400 leading-relaxed max-w-md">
              We deliver tailored IT solutions to help you scale with speed and confidence.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                className="rounded-full px-8 py-3.5 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40"
                onClick={scrollToContact}
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Right: 3D Phone Visual */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg">
              <div className="relative">
                {/* Phone body */}
                <div className="relative mx-auto w-64 lg:w-72">
                  {/* Phone frame */}
                  <div className="relative bg-gradient-to-b from-gray-100 to-white rounded-[40px] p-3 shadow-2xl border border-gray-200">
                    {/* Screen */}
                    <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-white rounded-[32px] overflow-hidden aspect-[9/19] relative flex flex-col">
                      {/* Notch */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-white/60 rounded-full z-10" />

                      {/* Screen content */}
                      <div className="flex-1 p-4 pt-10 space-y-2">
                        <div className="bg-gradient-to-r from-primary/80 to-orange-400/80 rounded-2xl p-4 shadow-lg">
                          <div className="w-2/3 h-2 bg-white/60 rounded mb-2" />
                          <div className="w-full h-1.5 bg-white/40 rounded mb-1" />
                          <div className="w-4/5 h-1.5 bg-white/40 rounded" />
                        </div>
                        <div className="bg-white/80 rounded-2xl p-3 shadow border border-orange-100">
                          <div className="w-1/2 h-2 bg-primary/30 rounded mb-2" />
                          <div className="w-full h-1.5 bg-gray-200 rounded" />
                        </div>
                        <div className="bg-white/80 rounded-2xl p-3 shadow border border-orange-100">
                          <div className="w-2/3 h-2 bg-gray-300 rounded mb-2" />
                          <div className="w-full h-1.5 bg-gray-200 rounded" />
                        </div>
                      </div>

                      {/* Home bar */}
                      <div className="flex justify-center pb-2">
                        <div className="w-16 h-1 bg-gray-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Phone shadow */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-gray-900/10 rounded-full blur-xl" />
                </div>

                {/* Floating 3D elements */}
                {/* Gear icon */}
                <div className="absolute -bottom-4 -left-8 lg:-left-12 w-20 h-20 lg:w-24 lg:h-24 text-primary drop-shadow-2xl animate-[spin_20s_linear_infinite]">
                  <svg viewBox="0 0 60 60" fill="currentColor" className="w-full h-full">
                    <circle cx="30" cy="30" r="12" fill="#FF8C42" opacity="0.9"/>
                    <circle cx="30" cy="30" r="8" fill="#FF6B4A"/>
                    <rect x="28" y="0" width="4" height="14" rx="2" fill="#FF8C42"/>
                    <rect x="28" y="46" width="4" height="14" rx="2" fill="#FF8C42"/>
                    <rect x="0" y="28" width="14" height="4" rx="2" fill="#FF8C42"/>
                    <rect x="46" y="28" width="14" height="4" rx="2" fill="#FF8C42"/>
                  </svg>
                </div>

                {/* Cloud icon */}
                <div className="absolute -top-6 right-0 lg:-right-8 w-20 h-16 lg:w-24 lg:h-20 text-primary drop-shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                  <svg viewBox="0 0 80 60" fill="none" className="w-full h-full">
                    <ellipse cx="30" cy="38" rx="22" ry="14" fill="#FF8C42" opacity="0.9"/>
                    <ellipse cx="20" cy="34" rx="14" ry="10" fill="#FF8C42" opacity="0.9"/>
                    <ellipse cx="50" cy="32" rx="18" ry="12" fill="#FF8C42" opacity="0.95"/>
                    <ellipse cx="40" cy="28" rx="20" ry="14" fill="#FF6B4A"/>
                  </svg>
                </div>

                {/* Code bracket */}
                <div className="absolute top-1/3 -right-4 lg:-right-8 w-14 h-14 lg:w-16 lg:h-16 text-primary drop-shadow-xl animate-pulse">
                  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
                    <path d="M20 12L8 30L20 48" stroke="#FF6B4A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M40 12L52 30L40 48" stroke="#FF8C42" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand logos bar */}
        <div className="mt-20 pt-8 border-t border-gray-100 dark:border-slate-800/80">
          <div className="text-center space-y-6">
            <p className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
              Trusted by Global Innovators & Leading Brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {brandNames.map((brand) => (
                <span
                  key={brand.name}
                  className="text-gray-400 dark:text-slate-500 font-bold text-lg tracking-wide opacity-50 hover:opacity-90 transition-opacity select-none"
                  style={{ fontStyle: brand.style }}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
