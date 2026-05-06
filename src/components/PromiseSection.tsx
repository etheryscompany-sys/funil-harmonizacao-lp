"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Crosshair, CurrencyDollar, Sparkle } from "@phosphor-icons/react";

const steps = [
  {
    icon: Crosshair,
    number: "01",
    title: "Por que o paciente errado é o que mais chega até você",
    subtitle: "A maioria das clínicas atrai pelo motivo errado",
    description:
      "Você vai entender exatamente qual ajuste precisa ser feito pra essa lógica virar no seu caso.",
  },
  {
    icon: CurrencyDollar,
    number: "02",
    title: "Como construir um protocolo único na sua clínica",
    subtitle: "O conceito que faz a paciente parar de comparar preço",
    description:
      "Ela passa a comprar a sua visão estética, aplicada na sua realidade.",
  },
  {
    icon: Sparkle,
    number: "03",
    title: "O próximo passo certo pra você, não pra qualquer doutora",
    subtitle: "Sem fórmula pronta",
    description:
      "É o caminho que faz sentido pro seu momento e pra paciente que você quer atender.",
  },
];

function trackInitiateForm() {
  try {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "InitiateForm");
    }
  } catch {}
}

export default function PromiseSection() {
  return (
    <section
      id="conteudo"
      className="w-full"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        background: "var(--color-bg-surface)",
      }}
    >
      <div className="container-lp">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex gap-6 lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
            <div
              className="hidden w-[3px] shrink-0 self-stretch rounded-full lg:block"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-accent), var(--color-border-accent), transparent)",
              }}
            />

            <div>
              <ScrollReveal>
                <span
                  className="mb-6 block text-center font-mono text-xs uppercase tracking-[0.2em] lg:text-left"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {"// O QUE VOCÊ DESCOBRE NA ANAMNESE"}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2
                  className="mb-6 text-center text-[1.875rem] font-semibold leading-[1.1] tracking-normal sm:text-4xl md:text-5xl lg:text-left"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  O que vamos olhar juntas na sessão
                </h2>
              </ScrollReveal>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-7">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 100}>
                <div
                  className="group relative overflow-hidden rounded-2xl border p-1.5 transition-all duration-700"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.30)",
                    borderColor: "rgba(0,0,0,0.04)",
                    boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
                    transitionTimingFunction: "var(--ease-out-expo)",
                  }}
                >
                  <div
                    className="rounded-[calc(1rem-0.375rem)] p-6 md:p-8"
                    style={{ backgroundColor: "var(--color-bg-primary)" }}
                  >
                    <span
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-mono text-5xl font-bold opacity-[0.06] md:right-8 md:text-6xl"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {step.number}
                    </span>

                    <div className="relative flex flex-col gap-2">
                      <div className="mb-1 flex items-start gap-3 sm:items-center">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-surface) 60%, var(--color-brand) 100%)",
                          }}
                        >
                          <step.icon size={22} weight="light" style={{ color: "var(--color-accent)" }} />
                        </div>
                        <h3
                          className="text-lg font-semibold tracking-normal md:text-xl"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                        {step.subtitle}
                      </p>
                      <p className="max-w-[50ch] text-sm leading-relaxed" style={{ color: "#555" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={360}>
              <div className="pt-4 text-center lg:text-left">
                <a
                  href="https://kathyelejoana.pro.typeform.com/to/p5KmnaIC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                  onClick={trackInitiateForm}
                >
                  QUERO APLICAR PARA UMA VAGA
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
