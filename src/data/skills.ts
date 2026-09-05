import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: '人間中心アプローチ & デザイン',
    description: '利用者への聞き取り、業務の棚卸しからUI設計・プロトタイピングまで',
    skills: [
      {
        name: '利用者調査・業務整理',
        usage: '現場関係者への聞き取りを通じて業務フローを整理し、情報集約の課題を構造化',
        relatedProjects: ['みちのきろく', '修士研究']
      },
      {
        name: 'UI/UXデザイン & ワイヤーフレーム',
        usage: '情報階層の整理、利用シーンに応じた画面レイアウト・入力フォームの設計',
        relatedProjects: ['みちのきろく', 'しぶりんノート', 'ナンバー・レジェンド']
      },
      {
        name: 'Figma',
        usage: 'ワイヤーフレーム作成、コンポーネント化、画面遷移のインタラクション設計に使用',
        relatedProjects: ['みちのきろく', '各プロトタイプ']
      },
      {
        name: '対話・内省デザイン',
        usage: '心理的負担を軽減する問いかけや、対話型UI・参加型ワークショップツールの検討',
        relatedProjects: ['しぶりんノート', '修士研究']
      }
    ]
  },
  {
    title: 'フロントエンド実装 & プロトタイピング',
    description: '思考やアイデアを実際に触れるWebアプリケーションとして具現化する技術',
    skills: [
      {
        name: 'React / TypeScript',
        usage: '複数のWebアプリにおいて、画面UIの実装、コンポーネント分割、状態管理に使用',
        relatedProjects: ['みちのきろく', 'ナンバー・レジェンド', 'Banquet Record']
      },
      {
        name: 'Tailwind CSS / HTML・CSS',
        usage: 'レスポンシブな画面レイアウトや、見やすさに配慮したスタイル設計に使用',
        relatedProjects: ['みちのきろく', 'ポートフォリオ']
      },
      {
        name: 'JavaScript / Web API',
        usage: 'Vanilla JSでの軽量SPA構築や、Web Speech API（音声合成）の連携実装',
        relatedProjects: ['しぶりんノート', 'Badminton Scoreboard']
      },
      {
        name: 'Three.js / React Three Fiber',
        usage: '3D空間表現やインタラクティブなオブジェクト制御のプロトタイピングに使用',
        relatedProjects: ['Galactic Splat Kids']
      }
    ]
  },
  {
    title: 'BaaS・AI連携 & バックエンド',
    description: 'プロトタイプのデータ永続化や、対話型AI機能の組み込み',
    skills: [
      {
        name: 'Supabase / PostgreSQL',
        usage: 'ユーザー認証、データベーステーブル定義、リアルタイムデータ同期の組み込み',
        relatedProjects: ['みちのきろく', 'AceRank']
      },
      {
        name: 'Google Gemini API',
        usage: 'LLMプロンプトの設計とAPI連携による、対話支援や動的ヒント提示の実装',
        relatedProjects: ['ナンバー・レジェンド']
      },
      {
        name: 'Firebase',
        usage: 'FirestoreおよびAuthenticationを用いた軽量なデータ保存と認証',
        relatedProjects: ['しぶりんノート']
      },
      {
        name: 'Python / Flask',
        usage: 'REST APIの基礎構築や、多言語化（i18n）ライブラリの利用経験',
        relatedProjects: ['Journal App']
      }
    ]
  },
  {
    title: '開発環境 & ツール',
    description: '日々の開発・バージョン管理・公開を行うためのツール',
    skills: [
      {
        name: 'Git / GitHub',
        usage: '個人開発でのソースコード管理、コミット履歴の管理、デプロイ連携に使用',
        relatedProjects: ['全プロジェクト']
      },
      {
        name: 'Vite / Vercel',
        usage: '高速なローカル開発環境の構築と、Webアプリケーションのホスティング・デプロイ',
        relatedProjects: ['全プロジェクト']
      },
      {
        name: 'VS Code',
        usage: '日々のコーディングおよびデバッグ環境として活用',
        relatedProjects: ['日常的な開発']
      }
    ]
  }
];
