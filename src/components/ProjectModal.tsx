import React, { useEffect } from 'react';
import { X, ExternalLink, HelpCircle, Compass, CheckCircle2, Layers, Building2, User } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isFieldPractice = project.type === 'field-practice';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-10 text-slate-900 dark:text-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                isFieldPractice
                  ? 'bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
              }`}
            >
              {isFieldPractice ? <Building2 className="w-3 h-3 text-sky-600" /> : <User className="w-3 h-3" />}
              {isFieldPractice ? '実社会での実践事例' : '自主制作プロトタイプ'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Subtitle */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                担当: {project.role}
              </span>
              {project.period && (
                <span className="text-xs text-slate-400 font-mono">
                  {project.period}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          {project.githubUrl && (
            <div className="flex items-center gap-3 pt-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          )}

          {/* Section 1: Background (Who & Why) */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>誰の・どんな課題か（背景）</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.background}
            </p>
          </div>

          {/* Section 2: Approach & Judgment */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1.5 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>どのように調査・整理し判断したか（アプローチ）</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* Section 3: Outcome & Learnings */}
          {project.outcome && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/60">
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isFieldPractice ? '実際の使われ方と変化（成果）' : '試作から得られた検証結果・学び'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          )}

          {/* Section 4: Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>実装した主な機能・要素</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
