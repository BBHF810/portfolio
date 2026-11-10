import React from 'react';
import { researchData } from '../data/research';

export const Research: React.FC = () => {
  return (
    <section
      id="research"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            Graduate Research
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {researchData.affiliation}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {researchData.field}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2">
            {researchData.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {researchData.summary}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
          <div>
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2">
              研究背景と問題意識
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {researchData.background}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2.5">
                現在の取り組み
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {researchData.currentApproach.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 font-mono text-[11px] mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2.5">
                今後の予定
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {researchData.futurePlan.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            <span>関連する開発システム: </span>
            <a
              href="#works"
              className="text-slate-900 dark:text-white underline underline-offset-4 font-medium hover:opacity-80"
            >
              Reflectia（ジャーナリング支援） / AI相互期待感インタビュー
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
