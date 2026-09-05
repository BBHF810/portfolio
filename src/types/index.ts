export type ProjectType = 'field-practice' | 'self-initiated';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: ProjectType; // 'field-practice' (実社会での実践・導入事例) | 'self-initiated' (自主制作・プロトタイプ)
  isPrimary: boolean; // トップに詳細表示する主要作品（3〜4件）
  period?: string;
  role: string; // 例: 課題調査・要件定義・UI設計・実装
  accentColor: string;
  summary: string;
  
  // 詳細モーダル用
  background: string; // 開発背景・誰のどんな課題か
  approach: string; // どのように調査・整理したか / 高橋さんの判断と担当
  outcome?: string; // 実際の使われ方・変化 / 自主制作での学び・検証結果
  features: string[]; // 主要機能
  tags: string[]; // 使用技術・手法
  
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    usage: string; // どのような用途・文脈で使用したか
    relatedProjects?: string[]; // 関連する制作物
  }[];
}

export interface ResearchInfo {
  title: string;
  field: string;
  affiliation: string;
  summary: string;
  background: string;
  currentApproach: string[];
  futurePlan: string[];
}
