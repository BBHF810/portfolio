import React from 'react';
import { ArrowDown } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profile } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm font-mono font-medium text-sky-700 tracking-wide mb-3">
          {profile.role}
        </p>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-snug mb-5">
          {profile.roleSubtitle}
        </h1>

        <p className="text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed mb-8">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="#works"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-sm font-medium transition-colors shadow-xs"
          >
            <span>制作・実践事例を見る</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#research"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-sm font-medium transition-colors"
          >
            <span>修士研究・所属研究室</span>
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-slate-200 text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h2 className="font-bold text-slate-900 mb-1.5">
              現場理解・業務整理
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              関係者への聞き取りを通じた課題の特定と要件定義（「みちのきろく」）
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h2 className="font-bold text-slate-900 mb-1.5">
              内省・相互理解支援の研究
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Human-AI Interactionと人間中心設計に基づく内省支援（修士研究・「Reflectia」）
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <h2 className="font-bold text-slate-900 mb-1.5">
              対話システムの試作・実践
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              展示会場での対話体験の設計と運用改善（「AI相互期待感インタビュー」）
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
