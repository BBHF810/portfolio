import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'research-design',
    title: '1. User Research & Product Design',
    capability:
      '関係者への聞き取りから業務や課題を構造化し、利用場面に合った画面構成と対話フローを設計できます。',
    skills: [
      {
        name: 'UI設計・情報整理・要件定義',
        isPrimary: true,
        projects: 'みちのきろく / Reflectia / AI相互期待感インタビュー',
        usage:
          'ロール別の画面設計、カレンダーへの情報一元化、誤操作を防ぐ入力フォームと確認導線の設計に使用',
      },
      {
        name: '聞き取り調査・業務フロー整理',
        isPrimary: true,
        projects: 'みちのきろく / 修士研究',
        usage:
          '運営代表者・チューター・当事者へのインタビューを通じた業務の棚卸しと課題の特定に使用',
      },
      {
        name: '対話フロー・プロンプト設計',
        projects: 'Reflectia / AI相互期待感インタビュー',
        usage:
          '評価や押し付けを避け、未記述の視点を問うプロンプト設計や、最大3問で完結する対話制御に使用',
      },
    ],
  },
  {
    id: 'frontend',
    title: '2. Frontend Development',
    capability:
      'React・TypeScriptを中心に、PC・スマートフォン双方で使いやすいWeb画面と対話UIを実装できます。',
    skills: [
      {
        name: 'React / TypeScript',
        isPrimary: true,
        projects: 'みちのきろく / AI相互期待感インタビュー / 本ポートフォリオ',
        usage:
          'シフト・予約カレンダーUI、ステップ式対話画面、状態管理、型安全なコンポーネント実装に使用',
      },
      {
        name: 'Next.js (App Router)',
        projects: 'AI相互期待感インタビュー',
        usage:
          'フロントエンド画面とAPI Route（AI呼び出し・出力検証・フォールバック）の統合実装に使用',
      },
      {
        name: 'Tailwind CSS / HTML・CSS',
        projects: 'みちのきろく / AI相互期待感インタビュー / 本ポートフォリオ',
        usage:
          'PC・タブレット・スマートフォンに対応したレスポンシブな画面レイアウトと視認性改善に使用',
      },
      {
        name: 'JavaScript / Canvas・音声API',
        projects: 'Reflectia / AI相互期待感インタビュー',
        usage:
          '手書き入力パッド（Paper.js）、カメラ画像スキャン、音声認識・音声合成UIの実装に使用',
      },
    ],
  },
  {
    id: 'backend-ai',
    title: '3. Backend, Database & AI',
    capability:
      '認証・権限管理、リレーショナルDB設計、およびLLMの構造化出力制御とフォールバック処理を実装できます。',
    skills: [
      {
        name: 'Supabase / PostgreSQL',
        isPrimary: true,
        projects: 'みちのきろく / Reflectia',
        usage:
          'テーブル設計、ロール別権限管理、Edge Functionsを用いたGoogleカレンダー連携の実装に使用',
      },
      {
        name: 'Google Gemini API / Zod',
        isPrimary: true,
        projects: 'Reflectia / AI相互期待感インタビュー',
        usage:
          'テキスト・手書き画像の分析、Zodによる構造化JSON出力の検証、通信障害時のフォールバック制御に使用',
      },
      {
        name: 'Python / Flask',
        projects: 'Reflectia',
        usage:
          'ルーティング、認証・セッション管理、実験群ごとのAI介入条件切替、日英多言語対応（Flask-Babel）に使用',
      },
    ],
  },
  {
    id: 'operations',
    title: '4. Testing, Deployment & Operations',
    capability:
      '自動テスト、本番デプロイ、および実運用・展示で見つかった課題の継続的な改善を行えます。',
    skills: [
      {
        name: 'Git / GitHub',
        projects: 'みちのきろく / Reflectia / AI相互期待感インタビュー',
        usage:
          'ソースコード管理、運用・展示で見つかった課題ごとの修正履歴管理、デプロイ連携に使用',
      },
      {
        name: 'Vercel / Vite',
        projects: 'みちのきろく / Reflectia / AI相互期待感インタビュー',
        usage:
          'Webアプリケーションのビルド構成、環境変数管理、本番環境への公開と継続運用に使用',
      },
      {
        name: 'Vitest',
        projects: 'AI相互期待感インタビュー',
        usage:
          '対話進行ロジック、スキーマ検証、API障害時のフォールバック処理のユニットテスト実装に使用',
      },
    ],
  },
];
