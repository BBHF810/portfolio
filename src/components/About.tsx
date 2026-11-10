import React from 'react';
import { profile } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            About
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            プロフィール・取り組みの姿勢
          </h2>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          {profile.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profile.coreValues.map((val, idx) => (
            <div
              key={val.title}
              className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 block mb-1.5">
                0{idx + 1}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                {val.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
