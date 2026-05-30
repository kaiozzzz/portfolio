import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SITE_CONFIG } from "@/constants/data";

export function CTASection() {
  return (
    <Section className="bg-surface-secondary/30">
      <div className="container-main">
        <div className="rounded-2xl border border-accent/20 bg-accent-muted/30 px-6 py-12 text-center md:px-12">
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-accent">
            contato
          </span>
          <h2 className="mb-4 text-2xl font-semibold text-text-primary md:text-3xl">
            Vamos construir algo juntos?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-text-secondary">
            Estou aberto a oportunidades remotas, freelas e colaborações.
            Se tiver um projeto interessante, me conta.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" size="lg">
              <Mail size={16} />
              Entrar em contato
            </Button>
            <Button
              href={`mailto:${SITE_CONFIG.email}`}
              variant="secondary"
              size="lg"
              external
            >
              {SITE_CONFIG.email}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
