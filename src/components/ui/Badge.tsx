import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        {
          "bg-surface-secondary text-text-secondary":           variant === "default",
          "bg-accent-muted text-accent-foreground":             variant === "accent",
          "border border-border text-text-secondary":           variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
