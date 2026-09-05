import React from 'react';
import { User, Eye, Terminal, RefreshCw, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';

export const About: React.FC = () => {
  const iconList = [Eye, Terminal, RefreshCw];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
          <User className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          人や現場の課題を捉え、<br className="hidden sm:inline" />
          触って検証できる形にする。
        </h2>

        {/* Bio Paragraphs */}
        <div className="space-y-3.5 text-slate-600 dark:text-slate-300 leading-relaxed mb-10 text-xs sm:text-sm">
          {profile.bio.map((paragraph, idx) => (
            <p key={idx}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {profile.coreValues.map((val, idx) => {
            const IconComponent = iconList[idx % iconList.length];
            return (
              <div
                key={val.title}
                className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 mb-3">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stance Box */}
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/70">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                デザインと実装の両方に向き合う理由
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                机上のモックアップだけでは、実際の操作時の手触りや、データが入ったときの違和感、現場で使われる中での課題は見落とされがちです。調査・情報設計からWebプロトタイプの実装まで一連で手を動かすことで、利用者の声に基づいた素早い改善サイクルを回すことを大切にしています。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
