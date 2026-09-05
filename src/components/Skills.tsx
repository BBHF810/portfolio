import React from 'react';
import { Cpu, Layers, Code, Sparkles, Terminal } from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const categoryIcons = [Layers, Code, Sparkles, Terminal];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Skills & Practical Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            スキル・使用経験
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            主観的な習熟度評価ではなく、実際のプロジェクトや研究の中で「何のために、どのように使用したか」を整理しています。
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={cat.title}
                className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60"
                      >
                        <div className="flex items-baseline justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                          {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                            <span className="text-[10px] font-mono text-slate-400 shrink-0">
                              {skill.relatedProjects.join(' / ')}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                          {skill.usage}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
