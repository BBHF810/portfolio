export interface Project {
  id: string;
  title: string;
  subtitle: string;
  contextLabel: string; // 例: 現場導入・継続運用 / 研究・実証実験システム / 大学祭展示・対話システム
  period: string;
  role: string;
  summary: string;
  background: string; // 誰の・どんな課題か
  approach: string; // どのように調査・設計・実装したか
  outcome: string; // 導入・実践での変化や改善
  features: string[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    usage: string;
    relatedProjects?: string[];
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
