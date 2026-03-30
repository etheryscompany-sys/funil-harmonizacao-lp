"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function MasterclassInfoSection() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        background:
          "linear-gradient(170deg, #0E0B09 0%, #161210 50%, #0E0B09 100%)",
        color: "var(--color-text-inverse)",
      }}
    >
      {/* Warm radial glow behind card */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(184,132,79,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="block whitespace-nowrap text-[18vw] md:text-[12vw] font-bold tracking-tight leading-none"
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(245, 240, 235, 0.015)",
          }}
        >
          ANÁLISE FACIAL
        </span>
      </div>

      <div className="container-lp relative z-10">
        <motion.div
          className="max-w-[640px] mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card container — glass dark + accent border */}
          <motion.div
            className="relative rounded-2xl p-8 sm:p-10 md:p-12 text-center"
            style={{
              background: "rgba(245, 240, 235, 0.025)",
              border: "1px solid rgba(212, 169, 110, 0.15)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.04), 0 24px 48px -12px rgba(0,0,0,0.4)",
            }}
            variants={fadeUp}
          >
            {/* Inner accent line — top center */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-accent-light), transparent)",
              }}
            />

            {/* Label */}
            <motion.span
              className="font-mono text-[0.625rem] tracking-[0.2em] uppercase block mb-8"
              style={{ color: "rgba(212, 169, 110, 0.45)" }}
              variants={fadeUp}
            >
              Guia completo
            </motion.span>

            {/* Headline */}
            <motion.h2
              className="text-[1.75rem] sm:text-4xl md:text-5xl font-bold leading-[1.08] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
              variants={fadeUp}
            >
              Método de{" "}
              <span style={{ color: "var(--color-accent-light)" }}>
                Análise Facial
              </span>
              <br />
              Passo a Passo
            </motion.h2>

            {/* Divider */}
            <motion.div
              className="w-12 h-px mx-auto mb-8"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,169,110,0.3), transparent)",
              }}
              variants={fadeUp}
            />

            {/* Date + time — structured monospace block */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-4"
              variants={fadeUp}
            >
              <span
                className="font-mono text-xs tracking-[0.15em] uppercase"
                style={{ color: "rgba(245, 240, 235, 0.7)" }}
              >
                Acesso imediato
              </span>
              <span
                className="hidden sm:block w-1 h-1 rounded-full"
                style={{ background: "var(--color-accent)", opacity: 0.5 }}
              />
              <span
                className="font-mono text-xs tracking-[0.15em] uppercase"
                style={{ color: "rgba(245, 240, 235, 0.7)" }}
              >
                100% online e gratuito
              </span>
            </motion.div>

            {/* Recording note */}
            <motion.p
              className="text-sm md:text-base mb-10"
              style={{ color: "rgba(245, 240, 235, 0.65)" }}
              variants={fadeUp}
            >
              Preencha o formulário e receba o guia completo
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <a
                href="https://kathyelejoana.pro.typeform.com/to/p5KmnaIC/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                QUERO O GUIA GRATUITO
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
