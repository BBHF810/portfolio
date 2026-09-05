import React from 'react';
import { Workflow, Search, PenTool, Layout, Code2 } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: '聞き取りと現場観察',
      subtitle: '課題の発見と構造化',
      description: '関係者や利用者の日々の困りごと、言いにくい違和感、業務フローを丁寧に整理し、本質的な課題を特定します。',
      points: ['利用者・関係者へのインタビュー', '業務フローと情報項目の棚卸し', '属人化しているポイントの可視化'],
      icon: Search
    },
    {
      number: '02',
      title: '要件定義と体験設計',
      subtitle: '体験の青写真を描く',
      description: '「誰が・いつ・どう使えば課題が解決されるか」利用導線と画面の役割を定義します。',
      points: ['必要なデータ項目と操作の流れの整理', '利用シーンに応じた画面遷移の定義', '無理のない入力負荷の検討'],
      icon: PenTool
    },
    {
      number: '03',
      title: 'UI設計とプロトタイプ',
      subtitle: 'Figmaによる試作',
      description: 'Figma等でワイヤーフレームやUIモックを作成し、画面の分かりやすさや情報階層を検討します。',
      points: ['見落としを防ぐUIレイアウト', 'コンポーネントの共通化', '操作感・トーン＆マナーの調整'],
      icon: Layout
    },
    {
      number: '04',
      title: 'Web実装と導入・改善',
      subtitle: '動く仕組みへの具現化',
      description: 'ReactやSupabaseを用いて実際に動作するWebアプリを実装し、現場での利用フィードバックをもとに改善します。',
      points: ['TypeScriptによる型安全な実装', '現場での試用とフィードバック収集', '使い続けられるための継続的な微調整'],
      icon: Code2
    }
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>Design & Development Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            課題特定から実装・改善までのアプローチ
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            机上の設計にとどまらず、現場でのヒアリングから動くプロトタイプの実装、導入後の改善まで一貫して手を動かします。
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 rounded border border-sky-100 dark:border-sky-900/40">
                      STEP {step.number}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-sky-600 dark:text-sky-400 font-medium mb-2">
                    {step.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
                  {step.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" />
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
