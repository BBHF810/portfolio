import React from 'react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            Skills & Experience
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            扱える技術・使用経験
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5">
            各プロジェクトや研究において、どの技術をどのような用途で使用したかをまとめています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6"
            >
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {cat.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                {cat.description}
              </p>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="text-xs font-semibold text-slate-900 dark:text-white">
                        {skill.name}
                      </span>
                      {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
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
          ))}
        </div>
      </div>
    </section>
  );
};
