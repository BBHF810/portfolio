import React from 'react';
import { ArrowDown, Sparkles, Code, Palette } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profile } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-300 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>UI/UX Designer & Design Engineer</span>
          <span className="text-slate-400 dark:text-slate-500">|</span>
          <span className="text-slate-500 dark:text-slate-400">エンジニア就活ポートフォリオ</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
          ユーザーの<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">課題と心理</span>に寄り添い、<br />
          デザインとコードで<span className="underline decoration-sky-400 decoration-wavy decoration-2 underline-offset-8">具現化する</span>。
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
          こんにちは、<strong className="text-slate-900 dark:text-white font-semibold">{profile.name}</strong>（{profile.nameEn}）です。
          課題発見・情報設計・Figmaによるプロトタイピングから、React 19・Next.js・Three.js・AI連携を用いたWebフロントエンド実装までを一気通貫で手がけています。
        </p>

        <div className="flex flex-wrap items-center gap-3.5 mb-14">
          <a
            href="#works"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-white text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-[0.98]"
          >
            <span>制作物を見る</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium transition-all shadow-sm hover:shadow active:scale-[0.98]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors"
          >
            <span>お問い合わせ</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40">
            <div className="p-2 rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/80 dark:text-sky-300">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">UI/UX Design</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">ユーザー視点の課題解決・Figma設計</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40">
            <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Frontend Dev</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">React 19, TypeScript, Next.js, 3D</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-slate-800/40">
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">AI & Innovation</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Gemini API連携・エモーショナルUI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
