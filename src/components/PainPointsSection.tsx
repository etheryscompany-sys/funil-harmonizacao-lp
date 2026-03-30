"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  ChatCircleDots,
  CurrencyDollarSimple,
  ClockCountdown,
  UserMinus,
} from "@phosphor-icons/react";

const painPoints = [
  {
    icon: ChatCircleDots,
    title: "Paciente pergunta e você não sabe explicar",
    description:
      "Ele quer entender o que vai ser feito no rosto dele, mas você não tem um método visual para mostrar. Resultado: ele vai embora pesquisar no Google.",
  },
  {
    icon: CurrencyDollarSimple,
    title: "Cobra barato porque não sabe mostrar valor",
    description:
      "Sem uma análise facial estruturada, o paciente não enxerga a diferença entre você e quem cobra metade. Preço vira o único critério.",
  },
  {
    icon: ClockCountdown,
    title: "Consulta sem protocolo = tempo jogado fora",
    description:
      "Você avalia no olhômetro, propõe tratamento genérico, e o paciente sente que qualquer profissional faria o mesmo. Ele some.",
  },
  {
    icon: UserMinus,
    title: "Certificações que não geram confiança",
    description:
      "Você tem especializações, estuda todo dia. Mas na hora de mostrar ao paciente exatamente o que ele precisa, falta um método. O problema é a comunicação, não o conhecimento.",
  },
];

export default function PainPointsSection() {
  return (
    <section
      className="w-full dot-pattern"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
      }}
    >
      <div className="container-lp">
        {/* Section label */}
        <ScrollReveal>
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase block mb-6 text-center lg:text-left"
            style={{ color: "var(--color-text-muted)" }}
          >
            // O Problema
          </span>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={100}>
          <h2
            className="text-[1.875rem] sm:text-4xl md:text-5xl font-semibold tracking-normal leading-[1.1] max-w-[20ch] mb-10 md:mb-16 text-center lg:text-left mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Você estuda{" "}
            <span style={{ color: "var(--color-accent)" }}>demais</span> para
            converter de{" "}
            <span style={{ color: "var(--color-accent)" }}>menos</span>.
          </h2>
        </ScrollReveal>

        {/* Grid — 2-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {painPoints.map((point, i) => (
            <ScrollReveal
              key={point.title}
              delay={i * 120}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              {/* Double-Bezel: Outer Shell */}
              <div
                className="group relative h-full rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-black/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-shadow duration-700"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Accent line — left border on hover */}
                <div
                  className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--color-accent), var(--color-border-accent))",
                    transitionTimingFunction:
                      "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />

                {/* Double-Bezel: Inner Core */}
                <div
                  className="relative h-full rounded-[calc(2rem-0.375rem)] bg-white p-8 md:p-10 flex flex-col gap-5"
                  style={{
                    boxShadow:
                      "inset 0 1px 3px 0 rgba(0,0,0,0.02), inset 0 0 0 1px rgba(255,255,255,0.7)",
                  }}
                >
                  {/* Icon container with accent-tinted gradient */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 8%, var(--color-bg-elevated)) 0%, color-mix(in srgb, var(--color-accent) 4%, var(--color-bg-surface)) 100%)",
                    }}
                  >
                    <point.icon
                      size={24}
                      weight="light"
                      style={{ color: "var(--color-accent)" }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl md:text-2xl font-semibold tracking-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
