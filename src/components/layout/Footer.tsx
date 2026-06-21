import React from 'react';
import { navItems } from '../../data/navigation';
import { Facebook, Instagram, Linkedin } from '../ui/Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // TikTok SVG inline icon
  const TikTokIcon = ({ size = 18, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );

  return (
    <footer className="bg-secondary text-slate-400 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Part: LET'S DISCUSS YOUR IDEAS & Logo */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8">
          {/* Header left */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-md">
            LET’S DISCUSS <br />
            YOUR IDEAS
          </h2>

          {/* Logo right */}
          <div className="flex items-center gap-2.5 text-2xl font-bold text-white">
            <div className="relative w-7 h-7 flex items-center justify-center">
              <svg className="w-full h-full text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 10L12 18L20 10L12 2Z" fill="currentColor" fillOpacity="0.8" />
                <path d="M12 8L7 13L12 18L17 13L12 8Z" fill="#ff8164" />
              </svg>
            </div>
            <span>Your Logo</span>
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

          {/* Round socials on the right */}
          <div className="flex space-x-3.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm"
              aria-label="Visit our Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm"
              aria-label="Visit our Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm"
              aria-label="Visit our LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm"
              aria-label="Visit our TikTok"
            >
              <TikTokIcon size={16} />
            </a>
          </div>

        </div>

        {/* Copyright and credits */}
        <div className="text-center pt-8 text-[11px] text-slate-650 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} Your Logo. All rights reserved.</p>
          <p>Created to match Figma specs using React, TypeScript & TailwindCSS v4.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
