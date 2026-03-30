"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { Crosshair, CurrencyDollar, Sparkle } from "@phosphor-icons/react";

const steps = [
  {
    icon: Crosshair,
    number: "01",
    title: "Por que a paciente certa não chega até você",
    subtitle: "Mesmo você atendendo bem, investindo e fazendo conteúdo",
    description:
      "Vamos identificar juntas o que está afastando as pacientes que realmente querem tratar de verdade e atraindo só curiosas.",
  },
  {
    icon: CurrencyDollar,
    number: "02",
    title: "O que mudar pra parar de fechar só avulso",
    subtitle: "E começar a vender protocolo completo sem parecer que tá empurrando",
    description:
      "Você vai entender o que ajustar no seu posicionamento, na sua oferta e na sua comunicação para fechar protocolos de alto valor.",
  },
  {
    icon: Sparkle,
    number: "03",
    title: "O caminho mais seguro pro seu momento",
    subtitle: "Não é fórmula genérica, é o que faz sentido pra onde a sua clínica tá hoje",
    description:
      "Você sai da sessão com um plano claro e personalizado do que precisa mudar primeiro. Sem achismo, sem fórmula pronta.",
  },
];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — sticky header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start flex gap-6">
            <div
              className="hidden lg:block w-[3px] shrink-0 rounded-full self-stretch"
              style={{
                background:
                  "linear-gradient(to bottom, var(--color-accent), var(--color-border-accent), transparent)",
              }}
            />

            <div>
              <ScrollReveal>
                <span
                  className="font-mono text-xs tracking-[0.2em] uppercase block mb-6 text-center lg:text-left"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  // O que você descobre na Anamnese
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2
                  className="text-[1.875rem] sm:text-4xl md:text-5xl font-semibold tracking-normal leading-[1.1] mb-6 text-center lg:text-left"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  O que você descobre na{" "}
                  <span style={{ color: "var(--color-accent)" }}>
                    Anamnese Estratégica
                  </span>.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p
                  className="text-base leading-relaxed max-w-[45ch] text-center lg:text-left mx-auto lg:mx-0"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Uma sessão individual e gratuita comigo para diagnosticar o que tá travando a sua clínica e sair com um plano claro do que mudar.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Right — Combined steps */}
          <div className="lg:col-span-7 flex flex-col gap-3">
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
                    {/* Watermark number */}
                    <span
                      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 font-mono text-5xl md:text-6xl font-bold select-none pointer-events-none opacity-[0.06]"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {step.number}
                    </span>

                    <div className="relative flex flex-col gap-2">
                      <div className="flex items-center gap-3 mb-1">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            background: "linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-surface) 60%, var(--color-brand) 100%)",
                          }}
                        >
                          <step.icon
                            size={22}
                            weight="light"
                            style={{ color: "var(--color-accent)" }}
                          />
                        </div>
                        <h3
                          className="text-lg md:text-xl font-semibold tracking-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className="text-sm font-medium mb-1"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {step.subtitle}
                      </p>
                      <p
                        className="text-sm leading-relaxed max-w-[50ch]"
                        style={{ color: "#555" }}
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
      </div>
    </section>
  );
}
