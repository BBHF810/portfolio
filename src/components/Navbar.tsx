import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profile } from '../data/profile';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '制作事例', href: '#works' },
    { name: '修士研究', href: '#research' },
    { name: 'プロフィール', href: '#about' },
    { name: '進め方', href: '#process' },
    { name: '技術・経験', href: '#skills' },
    { name: '連絡先・リンク', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-xs py-3'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-baseline gap-2.5 text-slate-900 hover:text-sky-700 transition-colors"
        >
          <span className="text-base font-bold tracking-tight">{profile.name}</span>
          <span className="text-xs text-slate-500 font-mono">
            {profile.nameEn}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 hover:text-sky-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 text-xs font-medium transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="メニュー"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-sky-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
