"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG } from "@/constants/data";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-surface/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-main flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-medium text-text-primary transition-colors hover:text-accent"
        >
          <span className="text-accent">{"<"}</span>
          {SITE_CONFIG.name.split(" ")[0].toLowerCase()}
          <span className="text-accent">{" />"}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                pathname === item.href
                  ? "bg-accent-muted text-accent-foreground font-medium"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-secondary"
              )}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 rounded-md p-2 text-text-secondary transition-colors hover:bg-surface-secondary hover:text-text-primary"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="rounded-md p-2 text-text-secondary md:hidden hover:bg-surface-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-surface/95 backdrop-blur-md md:hidden"
          >
            <nav className="container-main flex flex-col gap-1 py-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-accent-muted text-accent-foreground"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
