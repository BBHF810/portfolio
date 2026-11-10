import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { projects } from '../data/projects';
import { Project } from '../types';

interface WorksProps {
  onSelectProject: (project: Project) => void;
}

export const Works: React.FC<WorksProps> = ({ onSelectProject }) => {
  return (
    <section
      id="works"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            Works & Case Studies
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            主な制作・実践事例
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5">
            運営現場への導入、研究・実証実験、展示での対話実践のために開発した3つのWebアプリケーションです。
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8"
            >
              {/* Top Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    0{index + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                    {project.contextLabel}
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    {project.period}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <span>Webアプリを開く</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-medium transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Summary */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 mb-3">
                  {project.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                  {project.summary}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    担当範囲:
                  </span>{' '}
                  {project.role}
                </p>
              </div>

              {/* Structured 3-Point Explanation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                    1. 背景・課題
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.background}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                    2. 調査・設計・実装
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.approach}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1.5">
                    3. 運用・実践での改善
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Tags & Modal Trigger */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline underline-offset-4 transition-colors"
                >
                  主な機能・詳細を見る
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
