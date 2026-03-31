"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]);
  const contentOpacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col lg:flex-row lg:items-center overflow-hidden"
      style={{ background: "var(--color-hero-bg)", color: "var(--color-text-inverse)" }}
    >
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Warm accent glow */}
      <div
        className="absolute top-0 right-0 w-[70%] h-[50%] pointer-events-none"
        style={{
          opacity: 0.07,
          background: "radial-gradient(ellipse at 70% 20%, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      {/* Subtle bottom-left warmth */}
      <div
        className="absolute bottom-0 left-0 w-[50%] h-[40%] pointer-events-none"
        style={{
          opacity: 0.04,
          background: "radial-gradient(ellipse at 30% 80%, var(--color-brand-light) 0%, transparent 70%)",
        }}
      />

      {/* Mobile photo — taller to show more face, text overlaps bottom */}
      <motion.div
        className="relative w-full lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative w-full aspect-[3/4] max-h-[55dvh]">
          <Image
            src="/kathyele-hero-v2.webp"
            alt="Kathyele Joana Mentora de Estética"
            fill
            className="object-cover object-[center_15%]"
            sizes="(max-width: 1024px) 100vw, 0px"
            priority
            loading="eager"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: `
                inset 80px 0 60px -10px var(--color-hero-bg),
                inset -80px 0 60px -10px var(--color-hero-bg),
                inset 0 0 0 0 transparent,
                inset 0 -140px 80px -10px var(--color-hero-bg)
              `,
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="container-lp w-full pt-0 pb-6 lg:py-0 -mt-24 sm:-mt-32 relative z-[2] lg:mt-0"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content — 7 cols */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-5 md:gap-8 items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 max-w-xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Top bar — hidden on mobile */}
            <motion.div variants={fadeUp} className="hidden sm:flex flex-row items-center gap-3">
              <span className="badge-mono-hero inline-block">
                ANÁLISE ESTRATÉGICA
              </span>
              <span
                className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase"
                style={{ color: "rgba(245, 240, 235, 0.5)" }}
              >
                Sessão Individual
              </span>
            </motion.div>

            {/* Event name as small badge */}
            <motion.p
              className="font-mono text-xs tracking-[0.2em] uppercase -mb-3"
              style={{ color: "var(--color-accent-light)", opacity: 0.6 }}
              variants={fadeUp}
            >
              Anamnese Estratégica
            </motion.p>

            {/* Headline — empathy-driven */}
            <motion.h1
              className="text-[1.5rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-normal"
              variants={fadeUp}
            >
              Se você é boa na técnica, investe em marketing, faz conteúdo{" "}
              <span style={{ color: "rgba(245, 240, 235, 0.6)" }}>mas ainda assim a paciente certa não vem,</span>{" "}
              <span style={{ color: "var(--color-accent-light)" }}>essa análise é pra você.</span>
            </motion.h1>

            {/* Subtitle — promise */}
            <motion.h2
              className="text-[1.0625rem] md:text-lg lg:text-xl leading-relaxed max-w-[48ch]"
              style={{ color: "rgba(245, 240, 235, 0.85)" }}
              variants={fadeUp}
            >
              Em uma sessão individual comigo, vou identificar o que tá impedindo a sua clínica de atrair paciente que quer tratar de verdade e fechar protocolo completo.
            </motion.h2>

            {/* Exclusive tag */}
            <motion.p
              className="text-sm leading-snug max-w-[50ch]"
              style={{ color: "rgba(245, 240, 235, 0.6)" }}
              variants={fadeUp}
            >
              Você sai com um{" "}
              <strong style={{ color: "rgba(245, 240, 235, 0.85)" }}>plano claro do que precisa mudar no seu caso.</strong>
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-col items-center lg:items-start w-full sm:w-auto"
              variants={fadeUp}
            >
              <a
                href="https://kathyelejoana.pro.typeform.com/to/p5KmnaIC/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                QUERO MINHA VAGA
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right visual - Restored for Desktop */}
          <motion.div
            className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/kathyele-hero-v2.webp"
                alt="Kathyele Joana Mentora de Estética"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 0px, 42vw"
                priority
                loading="eager"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, var(--color-hero-bg) 0%, transparent 100%)",
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: "1px solid rgba(255,255,255,0.04)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 80px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px hidden lg:block"
        style={{ background: "var(--color-hero-border-subtle)" }}
      />
    </section>
  );
}
