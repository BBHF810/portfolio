import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profile } from '../data/profile';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('works');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  const navLinks = [
    { id: 'works', name: 'Works', href: '#works' },
    { id: 'research', name: 'Research', href: '#research' },
    { id: 'about', name: 'About', href: '#about' },
    { id: 'skills', name: 'Skills', href: '#skills' },
    { id: 'contact', name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sectionIds = ['works', 'research', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        firstMenuLinkRef.current?.focus();
      }, 50);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xs border-b border-slate-200 py-3'
          : 'bg-white/90 backdrop-blur-xs border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-baseline gap-2.5 text-slate-900 hover:text-teal-800 transition-colors py-1"
        >
          <span className="text-base font-bold tracking-tight">
            {profile.name}
          </span>
          <span className="text-xs text-slate-600 font-mono">
            {profile.nameEn}
          </span>
        </a>

        <nav
          aria-label="メインナビゲーション"
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`px-3 py-1.5 text-sm transition-colors border-b-2 ${
                  isActive
                    ? 'border-teal-700 text-teal-800 font-bold'
                    : 'border-transparent text-slate-700 hover:text-slate-900 font-medium'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 text-xs font-semibold transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-semibold"
            aria-label="GitHubプロフィール（新しいタブで開く）"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          role="region"
          aria-label="モバイルナビゲーションメニュー"
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 shadow-sm"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  ref={index === 0 ? firstMenuLinkRef : undefined}
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm flex items-center justify-between ${
                    isActive
                      ? 'bg-teal-50 text-teal-900 font-bold border-l-4 border-teal-700'
                      : 'text-slate-700 hover:bg-slate-50 font-medium'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="text-xs font-mono text-teal-800">
                      現在位置
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
