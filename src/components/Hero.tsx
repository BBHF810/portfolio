import React from 'react';
import { ArrowDown, Search, Layout, Sparkles } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profile } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Status Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-300 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span>{profile.role}</span>
          <span className="text-slate-400 dark:text-slate-500">|</span>
          <span className="text-slate-500 dark:text-slate-400">Portfolio</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] mb-4">
          人への理解を、<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">使える仕組みに変える</span>デザインと実装。
        </h1>

        {/* Subtitle / Background summary */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
          {profile.tagline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-12">
          <a
            href="#works"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-[0.98]"
          >
            <span>実践事例・試作を見る</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#research"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow active:scale-[0.98]"
          >
            <span>修士研究について</span>
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs sm:text-sm font-medium transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        {/* 3 Pillars / Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40">
            <div className="p-2 rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/80 dark:text-sky-300 shrink-0">
              <Search className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-slate-900 dark:text-white">利用者調査・業務整理</h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">聞き取りからの課題特定と構造化</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40">
            <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 shrink-0">
              <Layout className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-slate-900 dark:text-white">UI設計 & Web試作</h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">FigmaからReact/TypeScript実装</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40">
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-slate-900 dark:text-white">Human-AI Interaction</h2>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">人の内省・行動変容を促すデザイン研究</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
