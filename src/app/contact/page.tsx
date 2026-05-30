"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants/data";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  github: Github, linkedin: Linkedin, twitter: Twitter,
};

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    // Simulação — substitua por sua API de envio (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setState("success");
  }

  return (
    <Section className="pt-32">
      <div className="container-main">
        <SectionHeader
          label="contato"
          title="Vamos conversar?"
          description="Me manda uma mensagem sobre seu projeto, oportunidade ou só pra trocar uma ideia."
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Formulário */}
          <div>
            {state === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-accent/20 bg-accent-muted/30 py-16 text-center">
                <CheckCircle size={40} className="text-accent" />
                <div>
                  <p className="mb-1 font-semibold text-text-primary">Mensagem enviada!</p>
                  <p className="text-sm text-text-secondary">Responderei em breve.</p>
                </div>
                <button
                  onClick={() => setState("idle")}
                  className="text-sm text-accent underline"
                >
                  Enviar outra
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-text-secondary">
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="w-full rounded-lg border border-border bg-surface-secondary px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-text-secondary">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full rounded-lg border border-border bg-surface-secondary px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-text-secondary">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Oportunidade de trabalho, freela, etc."
                    className="w-full rounded-lg border border-border bg-surface-secondary px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-text-secondary">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Me conta sobre seu projeto ou oportunidade..."
                    className="w-full resize-none rounded-lg border border-border bg-surface-secondary px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center"
                  disabled={state === "loading"}
                >
                  <Send size={16} />
                  {state === "loading" ? "Enviando…" : "Enviar mensagem"}
                </Button>
              </form>
            )}
          </div>

          {/* Info lateral */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                Email direto
              </h3>
              <Link
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-sm text-accent underline-animate hover:text-accent"
              >
                {SITE_CONFIG.email}
              </Link>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                Redes sociais
              </h3>
              <div className="flex flex-col gap-2">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = ICONS[link.icon];
                  return (
                    <Link
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-secondary underline-animate transition-colors hover:text-text-primary"
                    >
                      {Icon && <Icon size={15} />}
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
