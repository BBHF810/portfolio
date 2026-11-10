import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: '聞き取りと課題整理',
      description:
        '関係者や利用者の困りごと、日常の業務フローや対話の文脈を聞き取り、どこに負担や属人化があるかを整理します。',
      points: [
        '関係者・実践者へのヒアリング',
        '業務内容と必要な情報の棚卸し',
        '解決すべき課題の絞り込み',
      ],
    },
    {
      number: '02',
      title: '要件定義と画面設計',
      description:
        '利用する場面（運営現場・日常の記録・展示会場）に合わせ、無理のない操作手順と画面構成を設計します。',
      points: [
        '利用者の属性に合わせた導線設計',
        '扱うデータ構造と権限の整理',
        'ワイヤーフレーム・UI設計',
      ],
    },
    {
      number: '03',
      title: '試作・Webアプリ実装',
      description:
        'React / Next.js / Flask やデータベース、AI APIを用い、実際に操作して試せるWebアプリケーションとして実装します。',
      points: [
        'フロントエンド・バックエンドの実装',
        'AIプロンプト制御とフォールバック設計',
        'プライバシーと安全面への配慮',
      ],
    },
    {
      number: '04',
      title: '現場導入・検証と改善',
      description:
        '実際の運営や実験・展示で使われる中で見つかった操作上の迷いや不具合を受け止め、継続的に改善します。',
      points: [
        '実運用・展示での観察と課題発見',
        '入力ミスや誤作動を防ぐUI修正',
        '利用者の声に基づく機能調整',
      ],
    },
  ];

  return (
    <section
      id="process"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            Process
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            課題整理から実装・改善までの進め方
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5">
            画面のデザインだけで終わらせず、聞き取りからWebアプリの実装、導入後の改善まで一連で取り組みます。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-slate-400 dark:text-slate-500 block mb-1.5">
                  STEP {step.number}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
                {step.points.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400"
                  >
                    <span className="text-slate-400">•</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
