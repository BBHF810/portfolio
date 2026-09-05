import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profile } from '../data/profile';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Research', href: '#research' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Process', href: '#process' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-sm py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-bold text-slate-900 dark:text-white transition-opacity hover:opacity-80"
        >
          <span className="w-7 h-7 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center font-mono text-xs font-extrabold shadow-sm">
            HT
          </span>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold tracking-tight leading-none">
              {profile.name}
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-wider uppercase mt-0.5">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/60 text-xs font-medium backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={darkMode ? 'ライトモードに切替' : 'ダークモードに切替'}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors shadow-sm"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-5 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-medium"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
