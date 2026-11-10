export interface Project {
  id: string;
  title: string;
  subtitle: string;
  contextLabel: string;
  period: string;
  role: string;
  summary: string;
  background: string;
  approach: string;
  outcome: string;
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

export interface ExternalResourceLink {
  label: string;
  sublabel?: string;
  url: string;
}

export interface ResearchInfo {
  title: string;
  field: string;
  affiliation: string;
  summary: string;
  background: string;
  currentApproach: string[];
  futurePlan: string[];
  links: ExternalResourceLink[];
}
