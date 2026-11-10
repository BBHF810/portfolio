import React, { useState } from 'react';
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { projects } from '../data/projects';
import { ScreenshotMeta } from '../types';

/**
 * スクリーンショット表示用コンポーネント
 * 画像（src）が設定されていない場合はプレースホルダーを生成せず非表示にします。
 *
 * TODO: スクリーンショット画像を追加する手順
 * 1. public/images/michino/ 等に画像ファイルを配置（推奨サイズ: 1200x750px, アスペクト比 16:10）
 *    - みちのきろく:
 *      - /images/michino/shift-view.png (シフト画面)
 *      - /images/michino/finance-record.png (金銭記録画面)
 *      - /images/michino/schedule-calendar.png (開館予定画面)
 *    - Reflectia:
 *      - /images/reflectia/journal-input.png (ジャーナリング画面)
 *    - AI相互期待感インタビュー:
 *      - /images/expectation-interview/interview-step.png (対話ステップ画面)
 * 2. src/data/projects.ts 内の screenshots 配列にある src プロパティのコメントアウトを解除
 */
const ScreenshotGallery: React.FC<{ screenshots?: ScreenshotMeta[] }> = ({
  screenshots,
}) => {
  const validScreenshots = screenshots?.filter((s) => Boolean(s.src)) ?? [];
  if (validScreenshots.length === 0) return null;

  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {validScreenshots.map((shot, idx) => (
        <figure
          key={idx}
          className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50"
        >
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            width={1200}
            height={750}
            className="w-full h-auto object-cover"
          />
          <figcaption className="px-3.5 py-2 text-xs text-slate-600 border-t border-slate-200 bg-white">
            {shot.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export const Works: React.FC = () => {
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>(
    {}
  );

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="works"
      aria-labelledby="works-heading"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50/60"
    >
      <div className="max-w-[1140px] mx-auto">
        {/* セクション見出し */}
        <div className="max-w-[720px] mb-10">
          <p className="text-xs font-mono font-semibold text-teal-800 uppercase tracking-wider mb-1">
            Works & Case Studies
          </p>
          <h2
            id="works-heading"
            className="text-2xl sm:text-3xl font-bold text-slate-900"
          >
            制作・実践事例（3件）
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mt-2 leading-[1.75]">
            現場運営の分業化、研究・実証実験、大学祭展示での対話実践のために開発・運用している3つのWebアプリケーションです。
          </p>
        </div>

        {/* 1. スキャンしやすい3件の比較サマリーカード */}
        <div
          aria-label="事例比較一覧"
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16"
        >
          {projects.map((project, index) => {
            const firstValidShot = project.screenshots?.find((s) =>
              Boolean(s.src)
            );
            return (
              <article
                key={project.id}
                className={`flex flex-col justify-between rounded-xl bg-white border p-6 transition-colors ${
                  project.isFeaturedPrimary
                    ? 'border-teal-700/60 shadow-xs'
                    : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-teal-800">
                      CASE 0{index + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 text-xs font-semibold">
                      {project.contextLabel}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  {firstValidShot && (
                    <div className="mb-4 rounded-lg overflow-hidden border border-slate-200">
                      <img
                        src={firstValidShot.src}
                        alt={firstValidShot.alt}
                        loading="lazy"
                        width={600}
                        height={375}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  <dl className="space-y-2.5 text-xs sm:text-sm mb-5">
                    <div>
                      <dt className="font-bold text-slate-900 inline">
                        対象：
                      </dt>
                      <dd className="text-slate-700 inline">
                        {project.targetUser}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-slate-900 inline">
                        課題：
                      </dt>
                      <dd className="text-slate-700 inline">
                        {project.oneLineProblem}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-teal-900 inline">
                        {project.oneLineOutcomeLabel}：
                      </dt>
                      <dd className="text-slate-800 font-medium inline">
                        {project.oneLineOutcome}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-slate-900 inline">
                        担当：
                      </dt>
                      <dd className="text-slate-700 inline">{project.role}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  {/* 代表的な技術 3〜5個 */}
                  <div
                    aria-label="代表的な使用技術"
                    className="flex flex-wrap gap-1.5 mb-5"
                  >
                    {project.summaryTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* アクションボタン */}
                  <div className="flex flex-col gap-2 pt-4 border-t border-slate-200">
                    <a
                      href={`#case-${project.id}`}
                      className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-lg bg-teal-800 hover:bg-teal-900 text-white text-xs sm:text-sm font-semibold transition-colors min-h-[42px]"
                    >
                      <span>事例を見る</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </a>

                    <div className="flex items-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-colors min-h-[38px]"
                        >
                          <span>Webアプリ</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-colors min-h-[38px]"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 2. 各ケーススタディ詳細（統一構造: Overview / Problem / Process / Key Decisions / Outcome / Reflection） */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const isAccordionOpen = Boolean(openAccordions[project.id]);

            return (
              <article
                key={project.id}
                id={`case-${project.id}`}
                aria-labelledby={`case-title-${project.id}`}
                className={`rounded-2xl bg-white border p-6 sm:p-8 ${
                  project.isFeaturedPrimary
                    ? 'border-teal-700/70 shadow-xs'
                    : 'border-slate-200'
                }`}
              >
                {/* ケーススタディヘッダー */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-200">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded">
                        CASE STUDY 0{index + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 text-xs font-semibold">
                        {project.contextLabel}
                      </span>
                    </div>
                    <h3
                      id={`case-title-${project.id}`}
                      className="text-xl sm:text-2xl font-bold text-slate-900"
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-800 hover:bg-teal-900 text-white text-xs sm:text-sm font-semibold transition-colors min-h-[40px]"
                      >
                        <span>Webアプリ</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold transition-colors min-h-[40px]"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* 研究用システム等の注記バッジ（Reflectia用） */}
                {project.noticeBadge && (
                  <div className="mb-6 px-4 py-3 rounded-lg bg-slate-50 border-l-4 border-teal-700 text-xs sm:text-sm text-slate-800 font-medium">
                    {project.noticeBadge}
                  </div>
                )}

                {/* スクリーンショットギャラリー（画像がある場合のみ描画） */}
                <ScreenshotGallery screenshots={project.screenshots} />

                <div className="space-y-8">
                  {/* 1. Overview */}
                  <section aria-label={`${project.title} Overview`}>
                    <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-teal-800 mb-3">
                      1. Overview
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                      <div className="md:col-span-2">
                        <span className="font-bold text-slate-900">目的：</span>
                        <span className="text-slate-800">
                          {project.overview.purpose}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">期間：</span>
                        <span className="text-slate-700">
                          {project.overview.period}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">体制：</span>
                        <span className="text-slate-700">
                          {project.overview.team}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">
                          自身の役割：
                        </span>
                        <span className="text-slate-700">
                          {project.overview.role}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">
                          対象ユーザー：
                        </span>
                        <span className="text-slate-700">
                          {project.overview.target}
                        </span>
                      </div>
                    </div>
                  </section>

                  {/* 2. Problem */}
                  <section aria-label={`${project.title} Problem`}>
                    <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-teal-800 mb-3">
                      2. Problem
                    </h4>
                    <div className="max-w-[740px] space-y-2.5 text-sm sm:text-base text-slate-800 leading-[1.75]">
                      <p>{project.problem.whoAndSituation}</p>
                      <p className="text-xs sm:text-sm text-slate-600">
                        <strong className="text-slate-800 font-semibold">
                          判断の根拠：
                        </strong>
                        {project.problem.evidence}
                      </p>
                    </div>

                    {/* みちのきろく専用: Before / After 比較表 */}
                    {project.beforeAfter && (
                      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                          <h5 className="text-xs sm:text-sm font-mono font-bold text-slate-700 uppercase mb-3">
                            Before（導入前）
                          </h5>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                            {project.beforeAfter.before.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-slate-400 font-bold">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-5 rounded-xl bg-teal-50/50 border border-teal-700/40">
                          <h5 className="text-xs sm:text-sm font-mono font-bold text-teal-900 uppercase mb-3">
                            After（導入後）
                          </h5>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-900 font-medium">
                            {project.beforeAfter.after.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Reflectia専用: システム構造と設計原則 */}
                    {project.systemFlow && (
                      <div className="mt-5 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {project.systemFlow.map((node) => (
                            <div
                              key={node.step}
                              className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                            >
                              <span className="text-xs font-mono font-bold text-teal-800 block mb-1">
                                {node.step}
                              </span>
                              <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                                {node.label}
                              </h5>
                              <p className="text-xs text-slate-700 leading-relaxed">
                                {node.detail}
                              </p>
                            </div>
                          ))}
                        </div>

                        {project.designPrinciples && (
                          <div className="p-4 rounded-xl bg-teal-50/40 border border-teal-700/30">
                            <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
                              プロンプト・対話の設計原則
                            </h5>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                              {project.designPrinciples.map((principle, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-teal-700 shrink-0" />
                                  <span>{principle}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </section>

                  {/* 3. Process */}
                  <section aria-label={`${project.title} Process`}>
                    <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-teal-800 mb-3">
                      3. Process
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2.5">
                      {project.process.map((step, idx) => (
                        <div
                          key={step.phase}
                          className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col"
                        >
                          <span className="text-[11px] font-mono font-bold text-teal-800 mb-1">
                            0{idx + 1}. {step.phase}
                          </span>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 4. Key Decisions */}
                  <section aria-label={`${project.title} Key Decisions`}>
                    <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-teal-800 mb-3">
                      4. Key Decisions
                    </h4>
                    <div className="space-y-3">
                      {project.keyDecisions.map((kd, idx) => (
                        <div
                          key={kd.title}
                          className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200"
                        >
                          <h5 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                            判断 {idx + 1}：{kd.title}
                          </h5>
                          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm">
                            <div>
                              <dt className="font-bold text-slate-900 inline">
                                状況：
                              </dt>
                              <dd className="text-slate-700 inline">
                                {kd.situation}
                              </dd>
                            </div>
                            <div>
                              <dt className="font-bold text-slate-900 inline">
                                判断：
                              </dt>
                              <dd className="text-slate-700 inline">
                                {kd.decision}
                              </dd>
                            </div>
                            <div>
                              <dt className="font-bold text-slate-900 inline">
                                理由：
                              </dt>
                              <dd className="text-slate-700 inline">
                                {kd.reason}
                              </dd>
                            </div>
                            <div>
                              <dt className="font-bold text-teal-900 inline">
                                結果：
                              </dt>
                              <dd className="text-slate-800 font-medium inline">
                                {kd.result}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      ))}
                    </div>

                    {/* AI相互期待感インタビュー専用: 展示での問題と改善 (Issue / Improvement) */}
                    {project.exhibitImprovements && (
                      <div className="mt-5">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-3">
                          展示環境で発生した問題と改善（Issue → Improvement）
                        </h5>
                        <div className="space-y-2.5">
                          {project.exhibitImprovements.map((row) => (
                            <div
                              key={row.topic}
                              className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start text-xs sm:text-sm"
                            >
                              <div className="md:col-span-3 font-bold text-slate-900">
                                {row.topic}
                              </div>
                              <div className="md:col-span-4 text-slate-700">
                                <span className="font-semibold text-slate-900">
                                  問題：
                                </span>
                                {row.issue}
                              </div>
                              <div className="md:col-span-5 text-slate-900 font-medium flex items-start gap-1.5">
                                <ArrowRight className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                                <span>
                                  <span className="font-bold text-teal-900">
                                    改善：
                                  </span>
                                  {row.improvement}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </section>

                  {/* 5. Outcome */}
                  <section aria-label={`${project.title} Outcome`}>
                    <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-teal-800 mb-3">
                      5. Outcome
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800 max-w-[740px]">
                      {project.outcome.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* 6. Reflection */}
                  <section aria-label={`${project.title} Reflection`}>
                    <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-teal-800 mb-3">
                      6. Reflection
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h5 className="font-bold text-slate-900 mb-1.5">
                          うまくいかなかった点
                        </h5>
                        <p className="text-slate-700 leading-relaxed">
                          {project.reflection.challenge}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h5 className="font-bold text-slate-900 mb-1.5">
                          そこから学んだこと
                        </h5>
                        <p className="text-slate-700 leading-relaxed">
                          {project.reflection.learning}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h5 className="font-bold text-slate-900 mb-1.5">
                          次に改善する点
                        </h5>
                        <p className="text-slate-700 leading-relaxed">
                          {project.reflection.nextStep}
                        </p>
                      </div>
                    </div>
                  </section>
                </div>

                {/* 下部: タグ（5〜7個） ＋ アコーディオン（実装機能の一覧・詳細を見る） */}
                <div className="mt-8 pt-5 border-t border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div
                      aria-label="使用技術タグ"
                      className="flex flex-wrap gap-1.5"
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleAccordion(project.id)}
                      aria-expanded={isAccordionOpen}
                      aria-controls={`features-panel-${project.id}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 transition-colors"
                    >
                      <span>実装機能の一覧・詳細を見る</span>
                      {isAccordionOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {isAccordionOpen && (
                    <div
                      id={`features-panel-${project.id}`}
                      className="mt-4 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200"
                    >
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-2.5">
                        主な実装機能一覧
                      </h5>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {project.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-teal-700 font-bold">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
