import type { Project, Skill, NavItem, TimelineItem, SocialLink } from "@/types";

// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
// EDITE AQUI com suas informações reais
export const SITE_CONFIG = {
  name: "Kaio Enzo",
  role: "Full Stack Developer",
  tagline: "Construindo interfaces modernas com React, TypeScript e IA.",
  bio: "Desenvolvedor Full Stack apaixonado por transformar ideias em produtos digitais reais. Foco em interfaces modernas, código limpo e uso inteligente de IA para entregar mais com qualidade.",
  location: "Brasil 🇧🇷",
  email: "kaioezo1317@gmail.com",
  availableForWork: true,
  avatarUrl: "https://avatars.githubusercontent.com/kaiozzzz",
};

// ─── NAVEGAÇÃO ────────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "início",   href: "/" },
  { label: "projetos", href: "/projects" },
  { label: "sobre",    href: "/about" },
  { label: "contato",  href: "/contact" },
];

// ─── REDES SOCIAIS ────────────────────────────────────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub",   url: "https://github.com/kaiozzzz", icon: "github" },
  // Adicione LinkedIn e Twitter quando criar as contas
  // { label: "LinkedIn", url: "https://linkedin.com/in/seu-perfil", icon: "linkedin" },
  // { label: "Twitter",  url: "https://twitter.com/seu-usuario",  icon: "twitter" },
];

// ─── PROJETOS ─────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: "ai-finance-tracker",
    title: "AI Finance Tracker",
    description: "Dashboard financeiro com análise por IA, gráficos interativos e insights personalizados.",
    longDescription: "Aplicação full stack que permite ao usuário registrar transações e receber análises inteligentes geradas por IA. Implementei autenticação completa com Supabase, gráficos com Recharts e integração com OpenAI para geração de insights.",
    tags: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Recharts"],
    category: "fullstack",
    liveUrl: "https://ai-finance-tracker-b6p5.vercel.app",
    featured: true,
    year: 2025,
    status: "completed",
  },
  {
    id: "kanban-realtime",
    title: "Kanban Colaborativo",
    description: "Board em tempo real com drag-and-drop, múltiplos usuários e histórico de atividades.",
    longDescription: "Ferramenta de gestão de tarefas com atualizações em tempo real via Supabase Realtime. Implementei drag-and-drop com dnd-kit, presença de usuários online e sistema de notificações.",
    tags: ["Next.js", "Supabase Realtime", "dnd-kit", "TypeScript", "Framer Motion"],
    category: "fullstack",
    githubUrl: "https://github.com/kaiozzzz/kanban-realtime",
    featured: true,
    year: 2025,
    status: "in-progress",
  },
  {
    id: "landing-ai",
    title: "Landing Page Generator",
    description: "SaaS que gera landing pages completas com copy e design a partir de uma descrição.",
    tags: ["Next.js", "OpenAI API", "Stripe", "Supabase", "TypeScript"],
    category: "ai",
    featured: false,
    year: 2025,
    status: "in-progress",
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const SKILLS: Skill[] = [
  // Linguagens
  { name: "TypeScript", level: 4, category: "language" },
  { name: "JavaScript", level: 4, category: "language" },
  { name: "Java",       level: 3, category: "language" },
  { name: "HTML & CSS", level: 5, category: "language" },
  // Frameworks
  { name: "React",      level: 4, category: "framework" },
  { name: "Next.js",    level: 4, category: "framework" },
  { name: "TailwindCSS",level: 5, category: "framework" },
  { name: "Node.js",    level: 3, category: "framework" },
  // Ferramentas
  { name: "Git & GitHub", level: 4, category: "tool" },
  { name: "Framer Motion",level: 3, category: "tool" },
  { name: "Figma",        level: 3, category: "tool" },
  { name: "Vercel",       level: 4, category: "tool" },
  // Banco de dados
  { name: "Supabase",     level: 3, category: "database" },
  { name: "PostgreSQL",   level: 3, category: "database" },
  // IA
  { name: "OpenAI API",   level: 3, category: "other" },
  { name: "n8n",          level: 3, category: "other" },
];

// ─── TIMELINE ─────────────────────────────────────────────────────────────────
export const TIMELINE: TimelineItem[] = [
  {
    year: "2025",
    title: "AI Finance Tracker — primeiro projeto full stack",
    description: "Construí meu primeiro projeto com autenticação real, banco PostgreSQL e integração com IA.",
    type: "project",
  },
  {
    year: "2024",
    title: "Comecei com React e TypeScript",
    description: "Mergulhei no ecossistema React, aprendendo hooks, estado global e TypeScript.",
    type: "education",
  },
  {
    year: "2023",
    title: "Primeiros passos em programação",
    description: "HTML, CSS e JavaScript. Primeiro projeto publicado online.",
    type: "education",
  },
];
