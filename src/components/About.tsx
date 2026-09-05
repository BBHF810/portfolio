import React from 'react';
import { User, CheckCircle2, Heart, Cpu, Compass } from 'lucide-react';
import { profile } from '../data/profile';

export const About: React.FC = () => {
  const iconList = [Heart, Compass, Cpu];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
          <User className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
          デザイン思考と実装技術で、<br className="hidden sm:inline" />
          「使いたくなる体験」をゼロから創る。
        </h2>

        {/* Bio Paragraphs */}
        <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
          {profile.bio.map((paragraph, idx) => (
            <p key={idx} className="text-sm sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {profile.coreValues.map((val, idx) => {
            const IconComponent = iconList[idx % iconList.length];
            return (
              <div
                key={val.title}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-4">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Philosophy Highlight Box */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-950/30 dark:to-indigo-950/30 border border-sky-100 dark:border-sky-900/40">
          <div className="flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                UI/UXデザイナーとしての私のスタンス
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                「見た目の美しさ」はもちろんのこと、利用者の心理的ハードルを下げ、自然と次の行動へと導く「体験の滑らかさ」を最も重視しています。デザインツール上のモックアップにとどまらず、実際のWebブラウザ上で触って検証できるプロトタイプやプロダクションコードまで自ら実装することで、高速な仮説検証と高い完成度を実現します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
