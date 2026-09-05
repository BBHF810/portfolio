import React from 'react';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { researchData } from '../data/research';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/40 dark:bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Graduate Research</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-100 dark:border-sky-900/40">
              {researchData.affiliation}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {researchData.field}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
            {researchData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            {researchData.summary}
          </p>
        </div>

        {/* Research Content Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6">
          
          {/* Background */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              研究背景と課題意識
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800/60">
              {researchData.background}
            </p>
          </div>

          {/* Current Approach */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              現在のアプローチと調査内容
            </h3>
            <div className="space-y-2">
              {researchData.currentApproach.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/70 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/50">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Plan */}
          <div>
            <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              今後のプロトタイプ試作と検証計画
            </h3>
            <div className="space-y-2">
              {researchData.futurePlan.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
                  <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Production Connection */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>関連する試作プロトタイプ:</span>
              <a href="#works" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                きもちパレット（感情可視化とAI対話の試作）
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
