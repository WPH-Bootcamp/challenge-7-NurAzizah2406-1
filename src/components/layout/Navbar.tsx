import React, { useState, useEffect } from 'react';
import { navItems } from '../../data/navigation';
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

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-secondary/90 backdrop-blur-md shadow-lg border-b border-slate-900/80 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Orange Diamond Mark */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2.5 text-xl font-bold text-white tracking-tight">
              {/* Overlapping diamonds icon from Figma logo */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                <svg className="w-full h-full text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 10L12 18L20 10L12 2Z" fill="currentColor" fillOpacity="0.8" />
                  <path d="M12 8L7 13L12 18L17 13L12 8Z" fill="#ff8164" />
                </svg>
              </div>
              <span>Your Logo</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="primary"
              className="rounded-full px-6 py-2.5 font-semibold text-sm"
              onClick={() => scrollToSection('contact')}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-secondary border-b border-slate-900 shadow-2xl transition-all duration-300 ease-in-out ${
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
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-primary hover:bg-slate-900 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="px-3 pt-2">
            <Button
              variant="primary"
              className="w-full justify-center rounded-full font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
