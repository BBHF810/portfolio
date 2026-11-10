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
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-mono font-semibold text-sky-700 uppercase tracking-wider mb-1">
            Works & Case Studies
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            主な制作・実践事例
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mt-2">
            運営現場への導入、研究・実証実験、展示での対話実践のために開発した3つのWebアプリケーションです。
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="rounded-2xl bg-white border border-slate-200 shadow-xs p-6 sm:p-8"
            >
              {/* Top Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-md">
                    0{index + 1}
                  </span>
                  <span className="px-3 py-0.5 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold">
                    {project.contextLabel}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {project.period}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs sm:text-sm font-medium transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 text-xs sm:text-sm font-medium transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Summary */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1 mb-3 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-3">
                  {project.summary}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-200/80">
                  <span className="font-bold text-slate-900">担当範囲:</span>{' '}
                  {project.role}
                </p>
              </div>

              {/* Structured 3-Point Explanation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
                    1. 背景・課題
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.background}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
                    2. 調査・設計・実装
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.approach}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
                    3. 運用・実践での改善
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Tags & Modal Trigger */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 underline underline-offset-4 transition-colors"
                >
                  実装機能の一覧・詳細を見る
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
