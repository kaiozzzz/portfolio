import { MapPin, Calendar } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, TIMELINE, SKILLS } from "@/constants/data";

export const metadata = { title: "Sobre" };

export default function AboutPage() {
  const topSkills = SKILLS.filter((s) => s.level >= 4);

  return (
    <div className="pt-24">
      {/* Bio */}
      <Section>
        <div className="container-main">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionHeader label="sobre mim" title={`Olá, sou ${SITE_CONFIG.name}`} />
              <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                {SITE_CONFIG.bio}
              </p>
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                Tenho 18 anos e estou construindo minha carreira como desenvolvedor Full Stack,
                com foco em criar produtos que realmente funcionam e impressionam.
                Aprendo rápido e uso IA como ferramenta para elevar a qualidade do que entrego.
              </p>
              <div className="mb-6 flex flex-col gap-2 text-sm text-text-secondary">
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent" /> {SITE_CONFIG.location}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-accent" />
                  {SITE_CONFIG.availableForWork ? (
                    <span className="text-accent">Disponível para oportunidades</span>
                  ) : (
                    "Ocupado no momento"
                  )}
                </span>
              </div>
              <Button href="/contact">Entrar em contato</Button>
            </div>

            {/* Skills rápidas */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                Stack principal
              </h3>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <Badge key={skill.name} variant="accent">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-surface-secondary/30">
        <div className="container-main">
          <SectionHeader
            label="trajetória"
            title="Minha jornada"
            description="Os marcos que me trouxeram até aqui."
          />
          <div className="relative space-y-6 pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-border">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-surface" />
                <div className="rounded-xl border border-border bg-surface p-4">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="font-mono text-xs font-medium text-accent">{item.year}</span>
                    <Badge variant="default" className="text-[10px]">
                      {item.type === "project" ? "Projeto" : item.type === "education" ? "Aprendizado" : "Conquista"}
                    </Badge>
                  </div>
                  <h4 className="mb-1 text-sm font-semibold text-text-primary">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
