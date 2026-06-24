import { navItems } from '../../data/navigation';
import logoSymbol from '../../assets/icons/logo-symbol.png';
import facebookIcon from '../../assets/icons/Facebook.png';
import instagramIcon from '../../assets/icons/Instagram.png';
import linkedinIcon from '../../assets/icons/Linkedin.png';
import tiktokIcon from '../../assets/icons/TikTok.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: 'https://facebook.com', icon: facebookIcon, label: 'Facebook' },
    { href: 'https://instagram.com', icon: instagramIcon, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: linkedinIcon, label: 'LinkedIn' },
    { href: 'https://tiktok.com', icon: tiktokIcon, label: 'TikTok' },
  ];

  return (
    <footer className="bg-white dark:bg-[#030712] pt-8 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 dark:bg-[#0b0f19] border border-gray-150 dark:border-slate-850 rounded-3xl p-8 sm:p-12 space-y-12 shadow-sm">
          
          {/* Top Part: LET'S DISCUSS YOUR IDEAS & Logo */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Header left */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight max-w-md">
              LET'S DISCUSS <br />
              YOUR IDEAS
            </h2>

            {/* Logo right */}
            <div className="flex items-center gap-2.5 text-2xl font-bold text-gray-900 dark:text-white">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <img
                  src={logoSymbol}
                  alt="YourLogo Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span>YourLogo</span>
            </div>
          </div>

          {/* Divider line */}
          <div className="border-t border-gray-200 dark:border-slate-800/80" />

          {/* Bottom Part: Horizontal menu & Socials */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 text-xs sm:text-sm">
            
            {/* Menu links on the left */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-semibold text-gray-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social icon PNGs on the right */}
            <div className="flex space-x-3.5">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:bg-primary dark:hover:bg-primary hover:border-primary dark:hover:border-primary transition-all shadow-sm group"
                  aria-label={`Visit our ${label}`}
                >
                  <img
                    src={icon}
                    alt={label}
                    className="w-4 h-4 object-contain opacity-65 dark:opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </a>
              ))}
            </div>

          </div>

          {/* Copyright and credits */}
          <div className="text-center pt-4 text-[11px] text-gray-400 dark:text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {currentYear} YourLogo. All rights reserved.</p>
            <p>Created to match Figma specs using React, TypeScript & TailwindCSS v4.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
