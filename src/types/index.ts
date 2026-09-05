export type ProjectCategory = 'all' | 'featured' | 'ui-ux' | 'threejs' | 'ai-app' | 'tool';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ('featured' | 'ui-ux' | 'threejs' | 'ai-app' | 'tool')[];
  period?: string;
  role: string; // 例: UI/UX Design & Frontend, Fullstack, etc.
  thumbnail?: string;
  accentColor: string; // カードやタグのアクセントカラー
  summary: string; // 一覧カードで表示する要約
  
  // 詳細モーダル用
  background: string; // 開発背景・課題意識（Why）
  targetUser?: string; // 対象ユーザー
  designHighlights: string[]; // UI/UXデザインのこだわり・工夫点
  techHighlights: string[]; // 技術的工夫・アーキテクチャ・選定理由
  features: string[]; // 主要機能
  tags: string[]; // 使用技術タグ
  
  demoUrl?: string;
  githubUrl?: string;
  isPrivateRepo?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // 'Advanced' | 'Proficient' | 'Familiar'
    description?: string;
    icon?: string;
  }[];
}

export interface DesignProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}
