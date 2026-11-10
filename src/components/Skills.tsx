import React from 'react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 bg-slate-50/70"
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="mb-8">
          <p className="text-xs font-mono font-bold text-teal-800 uppercase tracking-wider mb-1">
            Skills &amp; Capabilities
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            プロジェクトで使用した技術
          </h2>
          <p className="text-sm text-slate-700 max-w-[70ch] leading-relaxed">
            主観的な熟練度ラベルは設けず、各領域で「何ができるか」と、実際の制作・研究・展示プロジェクトで「どの用途に使用したか」を記載しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs flex flex-col"
            >
              <div className="pb-4 mb-4 border-b border-slate-200">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-teal-900 bg-teal-50/70 border border-teal-200/80 rounded-lg px-3 py-2 font-medium leading-relaxed">
                  {cat.capability}
                </p>
              </div>

              <div className="space-y-3.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3.5 rounded-lg border ${
                      skill.isPrimary
                        ? 'bg-slate-50/90 border-teal-300/90'
                        : 'bg-white border-slate-200/80'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-bold text-slate-900">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-medium text-teal-800 bg-teal-50 border border-teal-200/70 px-2 py-0.5 rounded">
                        使用：{skill.projects}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
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
