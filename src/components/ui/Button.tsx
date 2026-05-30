import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50",
    {
      // Sizes
      "px-3 py-1.5 text-xs": size === "sm",
      "px-4 py-2 text-sm":   size === "md",
      "px-6 py-3 text-base": size === "lg",
      // Variants
      "bg-accent text-white hover:opacity-90 active:scale-[0.98]":
        variant === "primary",
      "border border-border bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:scale-[0.98]":
        variant === "secondary",
      "text-text-secondary hover:text-text-primary hover:bg-surface-secondary":
        variant === "ghost",
    },
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
