import React from 'react';
import { profile } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-mono font-semibold text-sky-700 uppercase tracking-wider mb-1">
            About
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            プロフィール・取り組みの姿勢
          </h2>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-10">
          {profile.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profile.coreValues.map((val, idx) => (
            <div
              key={val.title}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200"
            >
              <span className="text-xs font-mono font-bold text-sky-700 block mb-1.5">
                0{idx + 1}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
