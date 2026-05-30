export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured: boolean;
  year: number;
  status: "completed" | "in-progress" | "archived";
}

export type ProjectCategory =
  | "fullstack"
  | "frontend"
  | "backend"
  | "ai"
  | "automation";

export interface Skill {
  name: string;
  level: number; // 1–5
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory =
  | "language"
  | "framework"
  | "tool"
  | "database"
  | "other";

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: "education" | "project" | "achievement";
}
