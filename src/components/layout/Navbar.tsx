import { useState, useEffect } from 'react';
import { navItems } from '../../data/navigation';
import { Sun, Moon } from '../ui/Icons';
import Button from '../ui/Button';
import logoSymbol from '../../assets/icons/logo-symbol.png';
import menuIcon from '../../assets/icons/menu.png';
import closeIcon from '../../assets/icons/x-close.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#030712]/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-slate-800/60 py-3'
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
              className="flex items-center gap-2.5 text-xl font-bold tracking-tight transition-colors text-gray-900 dark:text-white"
            >
              <div className="relative w-7 h-7 flex items-center justify-center">
                <img
                  src={logoSymbol}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span>YourLogo</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors duration-200 text-gray-600 dark:text-slate-350 hover:text-primary dark:hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle Button (Desktop) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-gray-200 dark:border-slate-800 text-gray-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-900 transition-all cursor-pointer active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="animate-[spin_4s_linear_infinite]" /> : <Moon size={18} />}
            </button>

            <Button
              className="rounded-full px-6 py-2.5 font-semibold text-sm bg-gradient-to-r from-[#ff6b4a] to-[#ff4f2b] hover:from-[#ff5733] hover:to-[#e03d1a] text-white border-none transition-all duration-300 cursor-pointer shadow-sm shadow-primary/20 hover:shadow-md"
              onClick={() => scrollToSection('contact')}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} className="animate-[spin_4s_linear_infinite]" /> : <Moon size={20} />}
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-lg transition-colors text-gray-700 dark:text-slate-200 hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <img src={closeIcon} alt="Close menu" className="h-6 w-6 object-contain dark:invert" />
              ) : (
                <img src={menuIcon} alt="Open menu" className="h-6 w-6 object-contain dark:invert" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-white dark:bg-[#0b0f19] border-b border-gray-100 dark:border-slate-800/80 shadow-2xl transition-all duration-300 ease-in-out ${
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
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 dark:text-slate-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-850 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="px-3 pt-3">
            <Button
              className="w-full justify-center rounded-full font-semibold bg-gradient-to-r from-[#ff6b4a] to-[#ff4f2b] hover:from-[#ff5733] hover:to-[#e03d1a] text-white border-none transition-all duration-300 cursor-pointer shadow-sm shadow-primary/20"
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
