import React, { useState, useEffect } from 'react';
import { navItems } from '../../data/navigation';
import { companyInfo } from '../../data/company';
import { Menu, X } from '../ui/Icons';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-secondary tracking-tight">
              {companyInfo.name}
              <span className="text-primary">.</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Get in Touch
            </Button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-slate-600 hover:text-secondary focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-white border-b border-slate-100 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="px-3 pt-2">
            <Button
              variant="primary"
              className="w-full justify-center"
              onClick={() => {
                setIsOpen(false);
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
