import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: '調査・要件整理・UI設計',
    description: '利用者への聞き取りや業務の棚卸しから、画面構成・対話フローの設計まで',
    skills: [
      {
        name: '聞き取り調査・業務整理',
        usage: '運営関係者や実践者への聞き取りを通じて業務フローや困りごとを整理し、課題を構造化',
        relatedProjects: ['みちのきろく', '修士研究'],
      },
      {
        name: 'UI設計・画面遷移設計',
        usage: '利用者の属性や利用場面（現場運営、日常の記録、展示会場）に合わせた画面構成と入力導線の設計',
        relatedProjects: ['みちのきろく', 'Reflectia', 'AI相互期待感インタビュー'],
      },
      {
        name: '対話・問いかけの設計',
        usage: '評価や押しつけを避け、利用者の内省や視点の整理を促すAIプロンプトおよび対話フローの設計',
        relatedProjects: ['Reflectia', 'AI相互期待感インタビュー', '修士研究'],
      },
      {
        name: 'Figma',
        usage: 'ワイヤーフレームの作成、画面レイアウトの検討、UIプロトタイプの作成に使用',
        relatedProjects: ['みちのきろく', '各Webアプリ'],
      },
    ],
  },
  {
    title: 'フロントエンド実装',
    description: '設計したUIや対話フローを、実際に操作・検証できるWebアプリとして実装',
    skills: [
      {
        name: 'React / TypeScript',
        usage: 'カレンダーUI、ステップ式対話画面、フォーム状態管理、型安全なコンポーネント実装に使用',
        relatedProjects: ['みちのきろく', 'AI相互期待感インタビュー'],
      },
      {
        name: 'Next.js (App Router)',
        usage: 'フロントエンド画面とAPI Route（AI呼び出し・スキーマ検証）を統合したWebアプリ開発に使用',
        relatedProjects: ['AI相互期待感インタビュー'],
      },
      {
        name: 'JavaScript / Canvas・音声API',
        usage: '手書き入力パッド（Paper.js / Canvas）、カメラ画像取得、音声認識・音声合成の実装に使用',
        relatedProjects: ['Reflectia', 'AI相互期待感インタビュー'],
      },
      {
        name: 'Tailwind CSS / CSS Modules',
        usage: 'PC・タブレット・スマートフォンに対応したレスポンシブな画面スタイリングに使用',
        relatedProjects: ['みちのきろく', 'AI相互期待感インタビュー'],
      },
    ],
  },
  {
    title: 'バックエンド・データベース・AI連携',
    description: 'データ管理、認証、外部API連携、実証実験・展示向けの制御',
    skills: [
      {
        name: 'Python / Flask',
        usage: 'ルーティング、セッション・認証管理、実験条件の切り替え、多言語対応（Flask-Babel）の実装に使用',
        relatedProjects: ['Reflectia'],
      },
      {
        name: 'Supabase / PostgreSQL',
        usage: 'リレーショナルデータの設計、ユーザー権限管理、Edge Functionsを用いた外部カレンダー連携に使用',
        relatedProjects: ['みちのきろく', 'Reflectia'],
      },
      {
        name: 'Google Gemini API',
        usage: 'テキスト・手書き画像の分析、構造化出力（Zod検証）を用いた動的質問生成、フォールバック制御の実装',
        relatedProjects: ['Reflectia', 'AI相互期待感インタビュー'],
      },
    ],
  },
  {
    title: '開発ツール・テスト・運用',
    description: 'バージョン管理、テスト、デプロイ、導入後の継続的な修正',
    skills: [
      {
        name: 'Git / GitHub',
        usage: 'ソースコードの履歴管理、課題ごとの修正コミット、デプロイ連携に使用',
        relatedProjects: ['全プロジェクト'],
      },
      {
        name: 'Vercel / Vite',
        usage: 'Webアプリケーションのビルド設定、環境変数管理、本番環境への公開・運用に使用',
        relatedProjects: ['みちのきろく', 'Reflectia', 'AI相互期待感インタビュー'],
      },
      {
        name: 'Vitest',
        usage: '対話フローやフォールバック処理、APIスキーマ検証のユニットテスト実装に使用',
        relatedProjects: ['AI相互期待感インタビュー'],
      },
    ],
  },
];
