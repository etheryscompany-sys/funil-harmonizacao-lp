"use client";

import { CheckCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ARROW_SVG = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const benefits = [
  "Sessão individual e personalizada com Kathyele",
  "Diagnóstico do que tá travando a sua clínica",
  "Clareza sobre por que a paciente certa não vem",
  "Plano claro do que mudar no seu caso específico",
  "Sem fórmula genérica, cada clínica é diferente",
  "100% gratuita e sem compromisso",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

export default function PricingSection() {
  return (
    <section
      id="checkout"
      className="w-full relative overflow-hidden dot-pattern"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        background: "var(--color-bg-primary)",
      }}
    >
      {/* Watermark */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[8rem] md:text-[13rem] font-black tracking-widest uppercase leading-none"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
            opacity: 0.025,
          }}
        >
          GRATUITO
        </span>
      </div>

      <div className="container-lp relative z-10">
        <ScrollReveal>
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase block mb-6 text-center lg:text-left"
            style={{ color: "var(--color-text-muted)" }}
          >
            // Sua sessão
          </span>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2
            className="text-[1.875rem] sm:text-4xl md:text-5xl font-semibold leading-[1.1] max-w-[22ch] mb-3 text-center lg:text-left mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Uma decisão muda{" "}
            <span style={{ color: "var(--color-accent)" }}>tudo</span>.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={130}>
          <p
            className="text-sm italic mb-14 max-w-[50ch] text-center lg:text-left mx-auto lg:mx-0"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Preencha o formulário e agende sua anamnese estratégica gratuita.
          </p>
        </ScrollReveal>

        {/* Single CTA card — centered */}
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-2xl flex flex-col overflow-hidden relative"
              style={{
                background: "linear-gradient(160deg, #fff 0%, #FDFAF6 60%, rgba(212,169,110,0.06) 100%)",
                border: "1.5px solid var(--color-border-accent)",
                boxShadow:
                  "0 2px 4px rgba(184,132,79,0.06), 0 12px 40px rgba(184,132,79,0.1), 0 32px 64px rgba(184,132,79,0.06)",
              }}
            >
              {/* Badge */}
              <div className="absolute top-0 right-6">
                <span
                  className="inline-block font-mono text-[0.6rem] tracking-[0.18em] uppercase px-4 py-1.5 rounded-b-xl"
                  style={{
                    background: "var(--color-accent)",
                    color: "#fff",
                    boxShadow: "0 4px 12px rgba(184,132,79,0.3)",
                  }}
                >
                  GRATUITO
                </span>
              </div>

              {/* Header */}
              <div
                className="px-8 pt-8 pb-6 mt-6 text-center"
                style={{
                  borderBottom: "1px solid rgba(184,132,79,0.12)",
                }}
              >
                <h3
                  className="text-2xl md:text-3xl font-bold uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Anamnese Estratégica
                </h3>
                <p
                  className="text-sm mt-1"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Sessão individual com Kathyele Joana
                </p>
              </div>

              {/* Benefits list */}
              <div className="px-8 py-6">
                <motion.ul
                  className="flex flex-col gap-3"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {benefits.map((text, i) => (
                    <motion.li key={i} className="flex items-start gap-3" variants={item}>
                      <CheckCircle
                        size={20}
                        weight="fill"
                        className="shrink-0 mt-0.5"
                        style={{ color: "var(--color-accent)" }}
                      />
                      <span
                        className="text-sm leading-snug"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {text}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* CTA */}
              <div
                className="px-8 pb-8 pt-6 flex flex-col gap-5 text-center"
                style={{ borderTop: "1px solid rgba(184,132,79,0.12)" }}
              >
                <div>
                  <p
                    className="text-5xl md:text-6xl font-bold leading-none mt-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-accent)",
                    }}
                  >
                    R$ 0
                  </p>
                  <p
                    className="text-sm mt-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Vagas limitadas por semana
                  </p>
                </div>

                <a
                  href="https://kathyelejoana.pro.typeform.com/to/p5KmnaIC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                  onClick={() => { try { if (typeof window !== "undefined" && (window as any).fbq) { (window as any).fbq("trackCustom", "InitiateForm"); } } catch {} }}
                >
                  VERIFICAR DISPONIBILIDADE
                  {ARROW_SVG}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
