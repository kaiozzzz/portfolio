"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/constants/data";
import type { ProjectCategory } from "@/types";

const FILTERS: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "Todos",      value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend",   value: "frontend" },
  { label: "IA",         value: "ai" },
  { label: "Automação",  value: "automation" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = active === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <Section className="pt-32">
      <div className="container-main">
        <SectionHeader
          label="portfólio"
          title="Todos os projetos"
          description={`${PROJECTS.length} projetos construídos com foco em qualidade e boas práticas.`}
        />

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                active === filter.value
                  ? "bg-accent text-white"
                  : "border border-border text-text-secondary hover:border-accent/40 hover:text-text-primary"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          ) : (
            <p className="col-span-full py-12 text-center text-sm text-text-tertiary">
              Nenhum projeto nessa categoria ainda.
            </p>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
