import Button from '../ui/Button';
import propertyLight from '../../assets/images/Property-1-Light.png';
import propertyDark from '../../assets/images/Propertydark.png';
import container2 from '../../assets/images/Container-2.png';

// Styled SVG Icons for Brand Logos matching Figma mockup
const UpworkIcon = () => (
  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9z"/>
    <path d="M12 8v8M9 11h6"/>
  </svg>
);

const PostmanIcon = () => (
  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    <path d="M2 12h20"/>
  </svg>
);

const DatabricksIcon = () => (
  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const AirbnbIcon = () => (
  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 3a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const DropboxIcon = () => (
  <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L2 5l4 3 4-3-4-3zm12 0l-4 3 4 3 4-3-4-3zM2 12l4 3 4-3-4-3-4 3zm20 0l-4-3-4 3 4 3 4-3zM6 15l6 4.5 6-4.5"/>
  </svg>
);

const PaypalIcon = () => (
  <svg className="w-4.5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 7.5c0 3-2.5 5.5-5.5 5.5h-3.3l-1 4.5H7.3l2.2-9.7H14c3 0 6 1.7 6 4.2z M15.5 10c0 3-2.5 5.5-5.5 5.5H8.7l-.7 3h-2.5l2.2-9.7H11c3 0 4.5 1.2 4.5 3.2z" />
  </svg>
);

const HeroSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const brandLogos = [
    { name: 'upwork', icon: <UpworkIcon />, style: 'font-sans font-bold text-base sm:text-lg lowercase' },
    { name: 'zoom', icon: null, style: 'font-sans font-extrabold text-xl sm:text-2xl lowercase tracking-tight' },
    { name: 'POSTMAN', icon: <PostmanIcon />, style: 'font-sans font-bold text-xs sm:text-sm tracking-widest uppercase' },
    { name: 'databricks', icon: <DatabricksIcon />, style: 'font-sans font-semibold text-sm sm:text-base tracking-tight' },
    { name: 'airbnb', icon: <AirbnbIcon />, style: 'font-sans font-bold text-sm sm:text-base tracking-tight lowercase' },
    { name: 'Dropbox', icon: <DropboxIcon />, style: 'font-sans font-semibold text-sm sm:text-base tracking-tight' },
    { name: 'PayPal', icon: <PaypalIcon />, style: 'font-sans font-extrabold italic text-base sm:text-lg tracking-tight' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-white dark:bg-[#030712] pt-28 pb-16 overflow-hidden animate-fade-in"
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
                className="rounded-full px-8 py-3.5 text-base font-semibold bg-gradient-to-r from-[#ff6b4a] to-[#ff4f2b] hover:from-[#ff5733] hover:to-[#e03d1a] text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 border-none transition-all duration-300 cursor-pointer"
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
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {brandLogos.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center gap-1.5 text-gray-400 dark:text-slate-500 hover:text-gray-900 dark:hover:text-white transition-all select-none group"
                >
                  {brand.icon}
                  <span className={`${brand.style} font-medium`}>
                    {brand.name}
                  </span>
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
