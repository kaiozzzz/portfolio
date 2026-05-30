# Portfólio Pessoal

[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

Site de portfólio pessoal construído com Next.js 14 (App Router), TypeScript e TailwindCSS. Design moderno com modo escuro nativo, animações com Framer Motion e estrutura de código profissional.

## Demonstração

🔗 **[seu-portfolio.vercel.app](https://seu-portfolio.vercel.app)**

<!-- Adicione um GIF ou screenshot aqui -->

## Funcionalidades

- Modo escuro / claro com transição suave
- Animações de entrada com Framer Motion
- Efeito de digitação na hero section
- Filtro de projetos por categoria
- Formulário de contato funcional
- Totalmente responsivo (mobile-first)
- SEO otimizado com metadata do Next.js
- Performance otimizada (Lighthouse 95+)

## Stack

| Tecnologia | Uso |
|---|---|
| [Next.js 14](https://nextjs.org) | Framework React com App Router |
| [TypeScript](https://typescriptlang.org) | Tipagem estática |
| [TailwindCSS](https://tailwindcss.com) | Estilização |
| [Framer Motion](https://framer.com/motion) | Animações |
| [Geist Font](https://vercel.com/font) | Tipografia |
| [Lucide React](https://lucide.dev) | Ícones |
| [next-themes](https://github.com/pacocoursey/next-themes) | Tema escuro/claro |

## Estrutura de pastas

```
src/
├── app/                  # Next.js App Router
│   ├── about/            # Página sobre mim
│   ├── contact/          # Página de contato
│   ├── projects/         # Listagem de projetos
│   ├── layout.tsx        # Layout raiz com providers
│   ├── page.tsx          # Home
│   └── globals.css       # Variáveis CSS e base styles
├── components/
│   ├── layout/           # Header, Footer, ThemeProvider
│   ├── sections/         # Hero, Projects, Skills, CTA
│   └── ui/               # Button, Badge, Card, Section
├── constants/
│   └── data.ts           # Todos os dados do site (edite aqui)
├── lib/
│   └── utils.ts          # Helpers (cn, etc.)
└── types/
    └── index.ts          # TypeScript interfaces
```

## Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio

# 2. Instale as dependências
npm install

# 3. Rode em desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Personalização

Edite o arquivo `src/constants/data.ts` para atualizar:

- Seu nome, bio e informações de contato (`SITE_CONFIG`)
- Projetos do portfólio (`PROJECTS`)
- Habilidades e nível de proficiência (`SKILLS`)
- Redes sociais (`SOCIAL_LINKS`)
- Timeline de carreira (`TIMELINE`)

## Deploy

O jeito mais simples é fazer deploy na [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Ou conecte o repositório GitHub diretamente no painel da Vercel para CI/CD automático.

## Licença

MIT — sinta-se livre para usar como base para o seu próprio portfólio.
