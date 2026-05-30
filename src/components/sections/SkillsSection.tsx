"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SKILLS } from "@/constants/data";
import type { SkillCategory } from "@/types";

const CATEGORY_LABEL: Record<SkillCategory, string> = {
  language:  "Linguagens",
  framework: "Frameworks",
  tool:      "Ferramentas",
  database:  "Banco de dados",
  other:     "Outras",
};

export function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const grouped = SKILLS.reduce<Partial<Record<SkillCategory, typeof SKILLS>>>(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category]!.push(skill);
      return acc;
    },
    {}
  );

  return (
    <Section>
      <div className="container-main" ref={ref}>
        <SectionHeader
          label="habilidades"
          title="Stack e ferramentas"
          description="Tecnologias que uso para construir produtos modernos."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(grouped) as SkillCategory[]).map((category, catI) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                {CATEGORY_LABEL[category]}
              </h3>
              <div className="space-y-3">
                {grouped[category]!.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-text-primary">
                        {skill.name}
                      </span>
                      <span className="text-xs text-text-tertiary">
                        {"●".repeat(skill.level) + "○".repeat(5 - skill.level)}
                      </span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-surface-tertiary">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${(skill.level / 5) * 100}%` } : {}}
                        transition={{
                          duration: 0.8,
                          delay: catI * 0.1 + i * 0.05,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
