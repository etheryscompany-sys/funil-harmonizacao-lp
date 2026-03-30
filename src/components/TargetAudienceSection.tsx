"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Tooth,
  Syringe,
  Heartbeat,
  TrendUp,
} from "@phosphor-icons/react";

const profiles = [
  {
    icon: Tooth,
    title: "Dentista/Esteticista de HOF",
    description:
      "Tem ótimas certificações mas não consegue cobrar o que vale. Perde pacientes para concorrentes que cobram menos.",
  },
  {
    icon: Syringe,
    title: "Profissional de estética avançada",
    description:
      "Domina as técnicas mais modernas, mas vive apagando incêndio no WhatsApp com leads desqualificados.",
  },
  {
    icon: Heartbeat,
    title: "Clínica que depende de desconto",
    description:
      "Sempre oferece parcelas, desconto à vista, promoção. Nunca consegue vender pelo preço cheio com confiança.",
  },
  {
    icon: TrendUp,
    title: "Quem quer protocolos de R$ 5.000+",
    description:
      "Sabe que o mercado paga, mas não tem um sistema prático para posicionar, qualificar e fechar alto ticket.",
  },
];

export default function TargetAudienceSection() {
  return (
    <section
      className="w-full dot-pattern"
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
            // Para quem é
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2
            className="text-[1.875rem] sm:text-4xl md:text-5xl font-semibold tracking-normal leading-[1.1] max-w-[22ch] mb-10 md:mb-16 text-center lg:text-left mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Se você se identifica com pelo menos{" "}
            <span style={{ color: "var(--color-accent)" }}>um destes</span>,
            essa aula é para você.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {profiles.map((profile, i) => (
            <ScrollReveal key={profile.title} delay={i * 100}>
              {/* Double-Bezel: Outer Shell */}
              <div
                className="group h-full rounded-[2rem] border p-1.5 transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.30)",
                  borderColor: "rgba(0,0,0,0.04)",
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
                  transitionTimingFunction: "var(--ease-out-expo)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow =
                    "0 28px 50px -12px rgba(0,0,0,0.09), 0 8px 20px -8px rgba(0,0,0,0.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 20px 40px -15px rgba(0,0,0,0.05)";
                }}
              >
                {/* Double-Bezel: Inner Core */}
                <div
                  className="relative h-full rounded-[calc(2rem-0.375rem)] p-8 md:p-10 flex flex-col gap-5 overflow-hidden"
                  style={{ backgroundColor: "var(--color-bg-primary)" }}
                >
                  {/* Spotlight hover effect */}
                  <div
                    className="absolute inset-0 rounded-[calc(2rem-0.375rem)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(184,132,79,0.08), transparent 40%)",
                    }}
                  />

                  {/* Icon with circular accent-tinted background */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(201,149,107,0.10) 0%, rgba(201,149,107,0.05) 100%)",
                      border: "1px solid rgba(201,149,107,0.12)",
                    }}
                  >
                    <profile.icon
                      size={28}
                      weight="light"
                      style={{ color: "var(--color-accent)" }}
                    />
                  </div>

                  <h3
                    className="text-lg md:text-xl font-semibold tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {profile.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {profile.description}
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

