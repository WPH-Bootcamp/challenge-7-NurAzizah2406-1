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
    <footer className="bg-secondary text-slate-400 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Part: LET'S DISCUSS YOUR IDEAS & Logo */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8">
          {/* Header left */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-md">
            LET'S DISCUSS <br />
            YOUR IDEAS
          </h2>

          {/* Logo right */}
          <div className="flex items-center gap-2.5 text-2xl font-bold text-white">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img
                src={logoSymbol}
                alt="Innovatech Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span>Innovatech</span>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-slate-900/80" />

        {/* Bottom Part: Horizontal menu & Socials */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 pt-4 text-xs sm:text-sm">
          
          {/* Menu links on the left */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-slate-400 hover:text-white transition-colors"
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
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:bg-primary hover:border-primary transition-all shadow-sm group"
                aria-label={`Visit our ${label}`}
              >
                <img
                  src={icon}
                  alt={label}
                  className="w-4 h-4 object-contain opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all"
                />
              </a>
            ))}
          </div>

        </div>

        {/* Copyright and credits */}
        <div className="text-center pt-8 text-[11px] text-slate-650 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} Innovatech. All rights reserved.</p>
          <p>Created to match Figma specs using React, TypeScript & TailwindCSS v4.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
