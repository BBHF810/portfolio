import React from 'react';
import { ArrowDown } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profile } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wide mb-3">
          {profile.role}
        </p>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug mb-5">
          {profile.roleSubtitle}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="#works"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 text-white text-xs sm:text-sm font-medium transition-colors"
          >
            <span>制作・実践事例を見る</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a
            href="#research"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium transition-colors"
          >
            <span>修士研究について</span>
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs sm:text-sm font-medium transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800 text-xs">
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white mb-1">
              現場理解・業務整理
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              関係者への聞き取りを通じた課題の特定と要件定義（「みちのきろく」）
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white mb-1">
              内省・相互理解支援の研究
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Human-AI Interactionと人間中心設計に基づく内省支援（修士研究・「Reflectia」）
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white mb-1">
              対話システムの試作・実践
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              展示会場での対話体験の設計と運用改善（「AI相互期待感インタビュー」）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
