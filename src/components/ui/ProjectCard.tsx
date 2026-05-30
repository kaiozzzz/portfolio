"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "default" | "featured";
}

const STATUS_LABEL: Record<Project["status"], string> = {
  completed:   "Concluído",
  "in-progress": "Em progresso",
  archived:    "Arquivado",
};

export function ProjectCard({ project, index = 0, variant = "default" }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-surface-secondary p-5",
        "transition-all duration-300 hover:border-accent/30 hover:bg-surface",
        "glow-hover",
        variant === "featured" && "md:p-6"
      )}
    >
      {/* Status badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs text-text-tertiary">{project.year}</span>
        <Badge
          variant={project.status === "completed" ? "accent" : "default"}
          className="text-[10px]"
        >
          {STATUS_LABEL[project.status]}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-base font-semibold text-text-primary transition-colors group-hover:text-accent">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge key={tag} variant="default" className="text-[11px]">
            {tag}
          </Badge>
        ))}
        {project.tags.length > 4 && (
          <Badge variant="default" className="text-[11px]">
            +{project.tags.length - 4}
          </Badge>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-2">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-text-tertiary transition-colors hover:text-text-primary"
            aria-label={`Ver código do ${project.title} no GitHub`}
          >
            <Github size={13} />
            <span>Código</span>
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-text-tertiary transition-colors hover:text-accent"
            aria-label={`Ver demo do ${project.title}`}
          >
            <ExternalLink size={13} />
            <span>Demo</span>
          </Link>
        )}

        {/* Arrow que aparece no hover */}
        <ArrowUpRight
          size={14}
          className="ml-auto text-text-tertiary opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-accent"
          aria-hidden
        />
      </div>
    </motion.article>
  );
}
