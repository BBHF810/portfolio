import { SkillCategory, DesignProcessStep } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'UI/UX & Design',
    description: 'ユーザー調査からプロトタイピング、デザインシステムの構築まで',
    skills: [
      { name: 'UI/UX Design', level: 'Advanced', description: '課題定義、情報設計、ワイヤーフレーム、デザインシステム' },
      { name: 'Figma', level: 'Advanced', description: 'Auto Layout、Variables、コンポーネント設計、インタラクティブプロトタイプ' },
      { name: 'User Research', level: 'Proficient', description: 'ヒアリング、ペルソナ設計、ユーザージャーニーマップ' },
      { name: 'Design System', level: 'Advanced', description: 'デザイントークン設計、アクセシビリティ考慮（WCAG準拠）' },
      { name: 'Micro-interaction', level: 'Proficient', description: 'ユーザーの操作感を高める心地よいアニメーション設計' },
    ]
  },
  {
    title: 'Frontend Development',
    description: 'デザインの意図を寸分狂わず高速に再現するモダンフロントエンド技術',
    skills: [
      { name: 'React (19 / 18)', level: 'Advanced', description: 'Hooks、コンポーネント指向設計、パフォーマンス最適化' },
      { name: 'TypeScript', level: 'Advanced', description: '厳格な型付け、インターフェース設計、保守性の高いコード' },
      { name: 'Next.js', level: 'Proficient', description: 'App Router、SSR/SSG、フルスタックWeb開発' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'ユーティリティファーストによる高速かつ一貫したスタイリング' },
      { name: 'Three.js / R3F', level: 'Proficient', description: 'React Three FiberによるWebGL 3Dインタラクティブ表現' },
      { name: 'HTML5 / Modern CSS', level: 'Advanced', description: 'セマンティックマークアップ、Flex/Grid、レスポンシブWebデザイン' },
    ]
  },
  {
    title: 'Backend, BaaS & AI',
    description: 'プロダクトを支えるデータストア、リアルタイム通信、最新AIの統合',
    skills: [
      { name: 'Supabase / PostgreSQL', level: 'Proficient', description: 'Auth、Database、RLS、Realtime同期' },
      { name: 'Firebase', level: 'Proficient', description: 'Firestore、Authentication、ホスティング' },
      { name: 'Google Gemini API', level: 'Proficient', description: 'LLMプロンプトエンジニアリング、マルチモーダルAI連携' },
      { name: 'WebRTC / PeerJS', level: 'Proficient', description: 'P2P低遅延リアルタイム通信の実装' },
      { name: 'Python / Flask', level: 'Familiar', description: 'REST API設計、SQLAlchemyによるデータ操作' },
    ]
  },
  {
    title: 'Tools & Workflow',
    description: 'チーム開発と迅速なデリバリーを支えるツールチェーン',
    skills: [
      { name: 'Git / GitHub', level: 'Advanced', description: 'ブランチ戦略、Pull Request運用、Issue管理' },
      { name: 'Vite / Turbopack', level: 'Advanced', description: '高速なローカル開発環境とビルドパイプライン' },
      { name: 'Vercel / Cloudflare', level: 'Proficient', description: 'CI/CD自動デプロイ、エッジ環境への配信' },
      { name: 'VS Code', level: 'Advanced', description: '拡張機能やスニペットを活用した効率的な開発' },
    ]
  }
];

export const designProcessSteps: DesignProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Empathize',
    subtitle: '課題の発見と共感',
    description: '身の回りや現場で起きている「不便さ」「言いにくい本音」「非効率」に耳を傾け、本質的な課題を特定します。',
    points: ['ユーザーヒアリング・観察', '課題の構造化・優先度設定', 'ペルソナと利用シーンの具体化']
  },
  {
    number: '02',
    title: 'Define & Concept',
    subtitle: '体験設計とコンセプト定義',
    description: '「どうすればユーザーが迷わず直感的に価値を享受できるか」体験の青写真を描きます。',
    points: ['ユーザージャーニーマップ作成', '情報アーキテクチャ（IA）整理', 'コアバリューとトーン＆マナー定義']
  },
  {
    number: '03',
    title: 'Design & Prototype',
    subtitle: 'UIデザインとインタラクション',
    description: 'Figma等でワイヤーフレームから高精度プロトタイプへ。余白・タイポグラフィ・動線にこだわったUIを設計します。',
    points: ['コンポーネント＆トークン設計', '直感的な画面遷移とマイクロインタラクション', 'ユーザビリティテストと改善']
  },
  {
    number: '04',
    title: 'Develop & Deliver',
    subtitle: '実装・検証・改善',
    description: 'React/TypeScriptなどモダンな技術を用い、デザインの意図を損なわずに高品質・高パフォーマンスなプロダクトへ具現化します。',
    points: ['型安全で保守性の高いコンポーネント実装', 'レスポンシブ・アクセシビリティ対応', '継続的なリファクタリングとフィードバック反映']
  }
];
