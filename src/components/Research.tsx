import React from 'react';
import { GraduationCap, ExternalLink, ArrowUpRight } from 'lucide-react';
import { researchData } from '../data/research';

export const Research: React.FC = () => {
  return (
    <section
      id="research"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 bg-slate-50/70"
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="mb-8">
          <p className="text-xs font-mono font-bold text-teal-800 uppercase tracking-wider mb-1">
            Master&apos;s Research
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            修士研究・所属研究室
          </h2>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-5 sm:p-8 shadow-2xs">
          {/* Header */}
          <div className="pb-5 mb-6 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 px-3 py-1 rounded-md mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>{researchData.affiliation}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5 leading-snug">
              {researchData.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              研究領域：{researchData.field}
            </p>
          </div>

          {/* 4-Item Structured Summary */}
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200/90 md:col-span-2">
              <dt className="text-xs font-mono font-bold text-teal-800 uppercase tracking-wider mb-1.5">
                Research Question
              </dt>
              <dd className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed max-w-[72ch]">
                {researchData.researchQuestion}
              </dd>
            </div>

            <div className="p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200/90">
              <dt className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Target（対象）
              </dt>
              <dd className="text-sm text-slate-800 leading-relaxed">
                {researchData.target}
              </dd>
            </div>

            <div className="p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200/90">
              <dt className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Current Status（現在の進捗）
              </dt>
              <dd className="text-sm text-slate-800 leading-relaxed">
                {researchData.currentStatus}
              </dd>
            </div>

            <div className="p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200/90 md:col-span-2">
              <dt className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Method（アプローチ・手法）
              </dt>
              <dd className="text-sm text-slate-800 leading-relaxed max-w-[72ch]">
                {researchData.method}
              </dd>
            </div>
          </dl>

          {/* Relation to Reflectia */}
          <div className="p-4 sm:p-5 rounded-lg bg-teal-50/60 border border-teal-200/90 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="max-w-[70ch]">
              <p className="text-xs font-bold text-teal-900 mb-1">
                制作事例「Reflectia」との関係
              </p>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                {researchData.systemRelationNote}
              </p>
            </div>
            <a
              href="#case-study-reflectia"
              className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-950 bg-white px-3.5 py-2 rounded-lg border border-teal-300 hover:bg-teal-50 transition-colors shrink-0 self-start sm:self-center"
            >
              <span>Reflectiaの事例を見る</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 所属研究室・コース Webページ */}
          <div className="pt-5 border-t border-slate-200">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              所属研究室・コース Webページ
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {researchData.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 p-3.5 rounded-lg bg-slate-50 hover:bg-teal-50/60 border border-slate-200 hover:border-teal-300 transition-colors group"
                >
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-teal-900 truncate">
                      {link.label}
                    </p>
                    {link.sublabel && (
                      <p className="text-[11px] font-mono text-slate-600 truncate mt-0.5">
                        {link.sublabel}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-teal-800 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
