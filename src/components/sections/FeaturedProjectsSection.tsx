import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PROJECTS } from "@/constants/data";

export function FeaturedProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <Section className="bg-surface-secondary/30">
      <div className="container-main">
        <div className="flex items-end justify-between">
          <SectionHeader
            label="portfólio"
            title="Projetos em destaque"
            description="O que tenho construído recentemente — da ideia ao deploy."
          />
          <Link
            href="/projects"
            className="mb-12 hidden items-center gap-1.5 text-sm text-text-secondary underline-animate transition-colors hover:text-text-primary sm:flex"
          >
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-8 flex sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary"
          >
            Ver todos os projetos <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </Section>
  );
}
