import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-slate-200 bg-slate-50 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>
            &copy; {new Date().getFullYear()} {profile.name} ({profile.nameEn})
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-800 font-medium transition-colors"
          >
            GitHub
          </a>
          <span className="text-slate-300" aria-hidden="true">
            |
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-teal-800 font-medium transition-colors"
            aria-label="ページの先頭へ戻る"
          >
            <span>ページの先頭へ</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
