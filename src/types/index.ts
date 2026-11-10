export interface KeyDecision {
  title: string;
  situation: string;
  decision: string;
  reason: string;
  result: string;
}

export interface ProcessStepItem {
  phase: string;
  detail: string;
}

export interface BeforeAfterComparison {
  before: string[];
  after: string[];
}

export interface SystemArchitectureStep {
  step: string;
  label: string;
  detail: string;
}

export interface ExhibitImprovementItem {
  topic: string;
  issue: string;
  improvement: string;
}

export interface ScreenshotMeta {
  src?: string; // 画像が配置されたらパスを指定（未指定時は描画しない）
  alt: string;
  caption: string;
  recommendedSize: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  contextLabel: string;
  isFeaturedPrimary?: boolean;
  noticeBadge?: string;

  // 一覧カード用（スキャンしやすい比較項目）
  targetUser: string;
  oneLineProblem: string;
  oneLineOutcome: string;
  oneLineOutcomeLabel: '成果' | '検証';
  role: string;
  summaryTags: string[]; // 3〜5個

  // ケーススタディ統一構造 (1. Overview ~ 6. Reflection)
  overview: {
    purpose: string;
    period: string;
    team: string;
    role: string;
    target: string;
  };
  problem: {
    whoAndSituation: string;
    evidence: string;
  };
  process: ProcessStepItem[];
  keyDecisions: KeyDecision[];
  outcome: string[];
  reflection: {
    challenge: string;
    learning: string;
    nextStep: string;
  };

  // プロジェクト固有の視覚化データ
  beforeAfter?: BeforeAfterComparison;
  systemFlow?: SystemArchitectureStep[];
  designPrinciples?: string[];
  exhibitImprovements?: ExhibitImprovementItem[];
  screenshots?: ScreenshotMeta[];

  // アコーディオン内（初期閉）
  features: string[];
  tags: string[]; // 5〜7個

  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  isPrimary?: boolean;
  projects: string;
  usage: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  capability: string; // 「何を実現できるか」を先に見せる一文
  skills: SkillItem[];
}

export interface ExternalResourceLink {
  label: string;
  sublabel?: string;
  url: string;
}

export interface ResearchInfo {
  title: string;
  field: string;
  affiliation: string;
  researchQuestion: string;
  target: string;
  method: string;
  currentStatus: string;
  systemRelationNote: string;
  links: ExternalResourceLink[];
}
