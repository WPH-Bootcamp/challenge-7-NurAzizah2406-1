import React from 'react';
import { companyInfo } from '../../data/company';
import { navItems } from '../../data/navigation';
import { Facebook, Instagram, Linkedin, Twitter, Github, Mail, Phone, MapPin } from '../ui/Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    facebook: <Facebook size={18} />,
    instagram: <Instagram size={18} />,
    linkedin: <Linkedin size={18} />,
    twitter: <Twitter size={18} />,
    github: <Github size={18} />,
  };

  return (
    <footer className="bg-secondary text-slate-400 border-t border-slate-900/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-900">
          
          {/* Logo & Intro */}
          <div className="md:col-span-5 space-y-5">
            <a href="#home" className="flex items-center gap-2.5 text-xl font-bold text-white tracking-tight">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <svg className="w-full h-full text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 10L12 18L20 10L12 2Z" fill="currentColor" fillOpacity="0.8" />
                  <path d="M12 8L7 13L12 18L17 13L12 8Z" fill="#ff8164" />
                </svg>
              </div>
              <span>Your Logo</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your Tech Partner for Smarter Growth. We deliver tailored IT solutions to help you scale with speed and confidence.
            </p>
            {/* Social Buttons */}
            <div className="flex space-x-3">
              {Object.entries(companyInfo.social).map(([key, url]) => {
                const icon = socialIcons[key as keyof typeof socialIcons];
                if (!icon) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:bg-primary hover:text-white transition-all duration-300 border border-slate-800"
                    aria-label={`Visit our ${key}`}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7 space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Get In Touch
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-0.5" size={16} />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={16} />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={16} />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright and signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Your Logo. All rights reserved.</p>
          <p className="text-slate-500">
            Designed to match Figma specifications using React, TypeScript & TailwindCSS v4.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
