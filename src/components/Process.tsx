import React from 'react';
import { Workflow, Search, PenTool, Layout, Code2 } from 'lucide-react';
import { designProcessSteps } from '../data/skills';

export const Process: React.FC = () => {
  const stepIcons = [Search, PenTool, Layout, Code2];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>Design & Development Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            課題発見からコード実装までのアプローチ
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
            デザインとエンジニアリングを分断せず、一貫した思考プロセスで「本当に使われるプロダクト」へ昇華させます。
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {designProcessSteps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black tracking-wider text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2.5 py-1 rounded-lg border border-sky-100 dark:border-sky-900/40">
                      STEP {step.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-sky-600 dark:text-sky-400 font-medium mb-3">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Key Checklist */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                  {step.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
