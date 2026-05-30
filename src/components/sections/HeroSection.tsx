"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants/data";

const TYPED_WORDS = ["interfaces modernas.", "produtos com IA.", "experiências rápidas.", "código limpo."];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Efeito de digitação
  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section className="relative flex min-h-screen items-center">
      {/* Grid de fundo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--text-primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--text-primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="container-main relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Status de disponibilidade */}
          {SITE_CONFIG.availableForWork && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-muted px-3 py-1"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium text-accent-foreground">
                Disponível para oportunidades remotas
              </span>
            </motion.div>
          )}

          {/* Saudação */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-2 font-mono text-sm text-text-secondary"
          >
            Olá, eu sou
          </motion.p>

          {/* Nome */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-4xl font-bold text-text-primary sm:text-5xl md:text-6xl"
          >
            {SITE_CONFIG.name}
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 text-xl text-text-secondary sm:text-2xl md:text-3xl"
          >
            Construindo{" "}
            <span className="text-gradient font-semibold">
              {displayed}
              <span className="animate-cursor-blink ml-0.5 inline-block h-[1em] w-px bg-accent align-middle" aria-hidden />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 max-w-lg text-base leading-relaxed text-text-secondary"
          >
            {SITE_CONFIG.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button href="/projects" size="lg">
              Ver projetos
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Entrar em contato
            </Button>

            <div className="flex items-center gap-2 pl-2">
              {SOCIAL_LINKS.slice(0, 2).map((link) => (
                <Link
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-md p-2 text-text-tertiary transition-colors hover:bg-surface-secondary hover:text-text-primary"
                >
                  {link.icon === "github" && <Github size={18} />}
                  {link.icon === "linkedin" && <Linkedin size={18} />}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-text-tertiary"
          >
            <ArrowDown size={18} aria-hidden />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
