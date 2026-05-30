import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants/data";

const ICONS: Record<string, React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-main flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-xs text-text-tertiary">
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Feito com Next.js e TailwindCSS.
        </p>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <Link
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-tertiary transition-colors hover:text-text-primary"
              >
                {Icon && <Icon size={16} />}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
