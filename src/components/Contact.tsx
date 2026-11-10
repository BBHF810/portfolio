import React, { useState } from 'react';
import { Mail, Check, Copy, ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { profile } from '../data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 bg-slate-50/70"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-mono font-semibold text-sky-700 uppercase tracking-wider mb-1">
            Contact & Links
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            連絡先・関連リンク
          </h2>
        </div>

        {/* Email & GitHub */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1.5">
                <Mail className="w-4 h-4 text-sky-700" />
                <span>メールアドレス</span>
              </div>
              <p className="text-sm text-slate-800 font-mono mb-4 break-all">
                {profile.email}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs sm:text-sm font-medium transition-colors"
              >
                メールを作成する
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                title="メールアドレスをコピー"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>コピー済み</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>コピー</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1.5">
                <GithubIcon className="w-4 h-4 text-sky-700" />
                <span>GitHub</span>
              </div>
              <p className="text-sm text-slate-800 font-mono mb-4">
                github.com/BBHF810
              </p>
            </div>

            <div>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs sm:text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                <span>GitHubプロフィールを見る</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 所属研究室・コースリンク */}
        <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            所属研究室・コース Webページ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {profile.affiliationLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 p-3.5 rounded-lg bg-slate-50 hover:bg-sky-50/70 border border-slate-200 hover:border-sky-300 transition-colors group"
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
    </section>
  );
};
