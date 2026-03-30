"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Crosshair, CurrencyDollar, Sparkle } from "@phosphor-icons/react";

const steps = [
  {
    icon: Crosshair,
    tag: "01",
    title: "Por que pacientes que chegam decididos não são sorte",
    description:
      "E o que faz o perfil certo chegar até você antes mesmo de qualquer conversa.",
  },
  {
    icon: CurrencyDollar,
    tag: "02",
    title: "Por que o preço nunca é o problema real",
    description:
      "E o que faz o paciente enxergar valor no seu tratamento antes de perguntar quanto custa.",
  },
  {
    icon: Sparkle,
    tag: "03",
    title: "Por que sem um tratamento que comunica transformação qualquer clínica vira commodity",
    description:
      "Independente da qualidade técnica da doutora.",
  },
];

export default function ContentSection() {
  return (
    <section
      className="w-full"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
      }}
    >
      <div className="container-lp">
        <ScrollReveal>
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase block mb-6 text-center lg:text-left"
            style={{ color: "var(--color-text-muted)" }}
          >
            // O QUE VOCÊ VAI ENTENDER
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2
            className="text-[1.875rem] sm:text-4xl md:text-5xl font-semibold tracking-normal leading-[1.1] max-w-[22ch] mb-4 text-center lg:text-left mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            O que muda quando você opera com um{" "}
            <span style={{ color: "var(--color-accent)" }}>sistema diferente</span>.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p
            className="text-sm md:text-base italic mb-10 md:mb-16 max-w-[50ch] text-center lg:text-left mx-auto lg:mx-0"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Nesta Masterclass, você vai entender os conceitos por trás do que separa as clínicas de referência das que vivem no improviso.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={step.tag} delay={i * 80}>
              {/* Double-Bezel: Outer Shell */}
              <div
                className="rounded-[2rem] border p-1.5 transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.30)",
                  borderColor: "rgba(0,0,0,0.04)",
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
                  transitionTimingFunction: "var(--ease-out-expo)",
                }}
              >
                {/* Double-Bezel: Inner Core */}
                <div
                  className="rounded-[calc(2rem-0.375rem)] p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
                  style={{ backgroundColor: "var(--color-bg-primary)" }}
                >
                  {/* Icon + Tag */}
                  <div className="flex md:flex-col items-center gap-3 shrink-0">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-surface) 60%, var(--color-brand) 100%)",
                        boxShadow: "0 4px 12px -4px rgba(0,0,0,0.08)",
                      }}
                    >
                      <step.icon
                        size={30}
                        weight="light"
                        style={{ color: "var(--color-accent)" }}
                      />
                    </div>

                    <span
                      className="font-mono text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "var(--color-bg-surface)",
                        color: "var(--color-text-muted)",
                        border: "1px solid var(--color-border-subtle)",
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-xl md:text-2xl font-semibold tracking-normal"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm md:text-base leading-relaxed max-w-[55ch]"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
