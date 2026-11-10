import React from 'react';
import { ExternalLink } from 'lucide-react';
import { researchData } from '../data/research';

export const Research: React.FC = () => {
  return (
    <section
      id="research"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 bg-slate-50/70"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-mono font-semibold text-sky-700 uppercase tracking-wider mb-1">
            Graduate Research
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-3 py-0.5 rounded-md bg-white border border-slate-200 text-slate-800">
              {researchData.affiliation}
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              {researchData.field}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
            {researchData.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-800 mt-2.5 leading-relaxed">
            {researchData.summary}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">
              研究背景と問題意識
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {researchData.background}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5 border-t border-slate-200">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                現在の取り組み
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {researchData.currentApproach.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-sky-700 font-mono font-bold text-xs mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                今後の予定
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {researchData.futurePlan.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-sky-700 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 所属研究室・コースの外部リンク */}
          <div className="pt-5 border-t border-slate-200">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3">
              所属研究室・コース Webページ
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {researchData.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 p-3.5 rounded-xl bg-slate-50 hover:bg-sky-50/70 border border-slate-200 hover:border-sky-300 transition-colors group"
                >
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-sky-800 truncate">
                      {link.label}
                    </p>
                    {link.sublabel && (
                      <p className="text-[11px] font-mono text-slate-500 truncate mt-0.5">
                        {link.sublabel}
                      </p>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-700 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
