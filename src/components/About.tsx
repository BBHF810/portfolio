import React from 'react';
import { ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 bg-white"
    >
      <div className="max-w-[1140px] mx-auto">
        <div className="mb-8">
          <p className="text-xs font-mono font-bold text-teal-800 uppercase tracking-wider mb-1">
            About &amp; Process
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            プロフィール・取り組みのプロセス
          </h2>
        </div>

        {/* Profile Summary & 4 Structured Items */}
        <div className="rounded-xl bg-slate-50/80 border border-slate-200 p-5 sm:p-7 mb-8">
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed max-w-[72ch] mb-6">
            {profile.aboutIntro}
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {profile.profileItems.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-lg bg-white border border-slate-200/90"
              >
                <dt className="text-xs font-bold text-teal-800 mb-1">
                  {item.label}
                </dt>
                <dd className="text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Compact 6-Step Approach & Process */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Approach &amp; Process（課題発見から運用改善までの6ステップ）
            </h3>
            <p className="text-xs font-mono text-slate-600">
              Listen → Define → Prototype → Implement → Validate → Improve
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {profile.compactProcess.map((item, index) => (
              <li
                key={item.step}
                className="relative p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-xs font-mono font-bold text-teal-800">
                      {index + 1}. {item.step}
                    </span>
                    {index < profile.compactProcess.length - 1 && (
                      <ArrowRight
                        className="hidden lg:block w-3.5 h-3.5 text-slate-400 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="text-sm font-bold text-slate-900 mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
