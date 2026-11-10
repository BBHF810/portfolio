import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
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
      className="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            Contact
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            連絡先・リンク
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white mb-1">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Email</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-mono mb-4 break-all">
                {profile.email}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 text-xs font-medium hover:opacity-90 transition-opacity"
              >
                メールを作成する
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                title="メールアドレスをコピー"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>コピー済み</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>コピー</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white mb-1">
                <GithubIcon className="w-4 h-4 text-slate-500" />
                <span>GitHub</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-mono mb-4">
                github.com/BBHF810
              </p>
            </div>

            <div>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span>GitHubプロフィールを見る</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
