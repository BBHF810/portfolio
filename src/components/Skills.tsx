import React from 'react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-mono font-semibold text-sky-700 uppercase tracking-wider mb-1">
            Skills & Experience
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            扱える技術・使用経験
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mt-2">
            各プロジェクトや研究において、どの技術をどのような用途で使用したかをまとめています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs"
            >
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                {cat.description}
              </p>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="text-xs sm:text-sm font-bold text-slate-900">
                        {skill.name}
                      </span>
                      {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                        <span className="text-[11px] font-mono text-sky-700 font-medium">
                          {skill.relatedProjects.join(' / ')}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
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
