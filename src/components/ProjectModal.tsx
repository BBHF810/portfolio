import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-xl z-10 text-slate-900">
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-0.5 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold">
              {project.contextLabel}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {project.period}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {project.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              {project.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-700 mt-2">
              <span className="font-bold text-slate-900">担当範囲:</span> {project.role}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Webアプリを開く</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                1. 背景・課題
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.background}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                2. 調査・設計・実装
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.approach}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                3. 運用・実践での改善
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {project.features.length > 0 && (
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2.5">
                実装した主な機能
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky-700 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono"
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
