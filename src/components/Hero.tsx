import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profile } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section
      aria-label="ファーストビュー"
      className="pt-28 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 bg-white border-b border-slate-200"
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="max-w-[740px]">
          <p className="text-xs sm:text-sm font-mono font-semibold text-teal-800 tracking-wide mb-2.5">
            {profile.role}
          </p>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-snug mb-4">
            {profile.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-[1.75] mb-8">
            {profile.heroDescription}
          </p>
        </div>

        {/* 3つの強み（短いラベルと説明） */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {profile.heroStrengths.map((item, idx) => (
            <div
              key={item.label}
              className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-teal-800">
                  0{idx + 1}.
                </span>
                <h2 className="text-sm font-bold font-mono text-slate-900">
                  {item.label}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 主要CTA 2つ ＋ 第2優先テキストリンク */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10">
          <a
            href="#works"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-teal-800 hover:bg-teal-900 text-white text-sm font-semibold transition-colors min-h-[44px]"
          >
            <span>事例を見る</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-colors min-h-[44px]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHubを見る</span>
          </a>

          <a
            href="#research"
            className="inline-flex items-center gap-1 px-2 py-2 text-sm font-medium text-teal-800 hover:text-teal-950 underline underline-offset-4 transition-colors min-h-[44px]"
          >
            <span>修士研究・所属研究室</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ファーストビュー直下の実績サマリー横並び */}
        <div
          aria-label="実績サマリー"
          className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6 border-t border-slate-200"
        >
          {profile.heroMetrics.map((metric) => (
            <div
              key={metric.title}
              className="flex flex-col justify-center py-2 px-3 rounded-lg bg-white border border-slate-200/80"
            >
              <span className="text-xs sm:text-sm font-mono font-bold text-slate-900">
                {metric.title}
              </span>
              <span className="text-xs text-slate-600 mt-0.5">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
