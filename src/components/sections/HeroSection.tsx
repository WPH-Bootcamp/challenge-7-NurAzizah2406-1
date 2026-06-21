import Button from '../ui/Button';
import propertyLight from '../../assets/images/Property-1-Light.png';
import propertyDark from '../../assets/images/Propertydark.png';
import container2 from '../../assets/images/Container-2.png';

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
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10 mix-blend-overlay pointer-events-none bg-cover bg-center" 
        style={{ backgroundImage: `url(${container2})` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-5 text-left space-y-6 animate-fade-left">
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

          {/* Right: 3D Phone Visual Image */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end relative animate-fade-right">
            <div className="relative w-full max-w-lg">
              <img
                src={propertyLight}
                alt="3D Visual Representation"
                className="w-full h-auto object-contain block dark:hidden"
              />
              <img
                src={propertyDark}
                alt="3D Visual Representation"
                className="w-full h-auto object-contain hidden dark:block"
              />
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
