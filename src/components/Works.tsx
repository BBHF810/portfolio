import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, ChevronDown, ChevronUp, Building2, User } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { projects } from '../data/projects';
import { Project } from '../types';

interface WorksProps {
  onSelectProject: (project: Project) => void;
}

export const Works: React.FC<WorksProps> = ({ onSelectProject }) => {
  const [showAllOther, setShowAllOther] = useState(false);

  const primaryProjects = projects.filter((p) => p.isPrimary);
  const otherProjects = projects.filter((p) => !p.isPrimary);

  return (
    <section id="works" className="py-20 px-4 sm:px-6 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Works & Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            実践事例・プロトタイプ
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            現場での課題特定から導入まで取り組んだ事例と、研究・関心に基づき試作した各種Webプロトタイプです。
          </p>
        </div>

        {/* Primary Projects (Main Focus) */}
        <div className="space-y-6 mb-14">
          <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
            <span>Primary Case Studies</span>
            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
              {primaryProjects.length} プロジェクト
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {primaryProjects.map((project) => {
              const isFieldPractice = project.type === 'field-practice';
              return (
                <article
                  key={project.id}
                  className={`group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border p-6 shadow-sm hover:shadow-md transition-all duration-200 ${
                    isFieldPractice
                      ? 'border-sky-300/80 dark:border-sky-800/80 bg-gradient-to-b from-sky-50/20 to-transparent dark:from-sky-950/10'
                      : 'border-slate-200/90 dark:border-slate-800/90'
                  }`}
                >
                  <div>
                    {/* Header: Project Type Badge & Role */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                          isFieldPractice
                            ? 'bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800'
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {isFieldPractice ? <Building2 className="w-3 h-3 text-sky-600" /> : <User className="w-3 h-3" />}
                        {isFieldPractice ? '実社会導入・業務改善' : '自主制作プロトタイプ'}
                      </span>
                      {project.period && (
                        <span className="text-[10px] font-mono text-slate-400">
                          {project.period}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-3 line-clamp-1">
                      {project.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    {/* Role tag */}
                    <div className="mb-3 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">担当範囲:</span> {project.role}
                    </div>

                    {/* Tech tags preview */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group/btn"
                      >
                        <span>課題・取り組みの詳細を見る</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="GitHub Repository"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Other Projects / Prototyping Archive */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                その他の試作・技術検証アーカイブ
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                3D WebGL表現、P2P通信、状態管理などの技術的関心から試作したプロジェクトです。
              </p>
            </div>
            <button
              onClick={() => setShowAllOther(!showAllOther)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800"
            >
              <span>{showAllOther ? '閉じる' : `すべて表示 (${otherProjects.length}件)`}</span>
              {showAllOther ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${showAllOther ? '' : 'hidden sm:grid'}`}>
            {(showAllOther ? otherProjects : otherProjects.slice(0, 3)).map((project) => (
              <article
                key={project.id}
                className="rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 p-4 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h4>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2 line-clamp-1">
                    {project.subtitle}
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-3">
                    {project.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-500">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-[10px] font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    詳細
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
