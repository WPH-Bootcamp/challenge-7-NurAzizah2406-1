import { useState, useEffect } from 'react';
import { navItems } from '../../data/navigation';
import { Menu, X } from '../ui/Icons';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className={`flex items-center gap-2.5 text-xl font-bold tracking-tight transition-colors ${
                scrolled ? 'text-gray-900' : 'text-gray-900'
              }`}
            >
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
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-600 hover:text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
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

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="px-3 pt-3">
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
