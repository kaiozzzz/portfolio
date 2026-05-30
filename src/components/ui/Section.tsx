"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function Section({ children, className, delay = 0, id }: SectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn("py-16 md:py-24", className)}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      {label && (
        <span className="mb-3 inline-block font-mono text-xs font-medium uppercase tracking-widest text-accent">
          {label}
        </span>
      )}
      <h2 className="text-2xl font-semibold text-text-primary md:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
