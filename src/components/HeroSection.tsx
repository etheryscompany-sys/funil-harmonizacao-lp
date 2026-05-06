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
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

function trackInitiateForm() {
  try {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "InitiateForm");
    }
  } catch {}
}

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
      className="relative flex min-h-[100dvh] flex-col overflow-hidden lg:flex-row lg:items-center"
      style={{ background: "var(--color-hero-bg)", color: "var(--color-text-inverse)" }}
    >
      <div className="grain-overlay" />

      <div
        className="pointer-events-none absolute right-0 top-0 h-[50%] w-[70%]"
        style={{
          opacity: 0.07,
          background:
            "radial-gradient(ellipse at 70% 20%, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-[50%]"
        style={{
          opacity: 0.04,
          background:
            "radial-gradient(ellipse at 30% 80%, var(--color-brand-light) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative w-full lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative aspect-[3/4] max-h-[55dvh] w-full">
          <Image
            src="/kathyele-hero-v2.webp"
            alt="Kathyele Joana"
            fill
            className="object-cover object-[center_15%]"
            sizes="(max-width: 1024px) 100vw, 0px"
            priority
            loading="eager"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              boxShadow: `
                inset 80px 0 60px -10px var(--color-hero-bg),
                inset -80px 0 60px -10px var(--color-hero-bg),
                inset 0 -140px 80px -10px var(--color-hero-bg)
              `,
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="container-lp relative z-[2] -mt-24 w-full pb-7 pt-0 sm:-mt-32 lg:mt-0 lg:py-0"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="mx-auto flex max-w-[36rem] flex-col items-center gap-4 text-center lg:col-span-7 lg:mx-0 lg:items-start lg:text-left"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="hidden flex-row items-center gap-3 sm:flex">
              <span className="badge-mono-hero inline-block">ANAMNESE ESTRATÉGICA</span>
              <span
                className="font-mono text-[0.6875rem] uppercase tracking-[0.12em]"
                style={{ color: "rgba(245, 240, 235, 0.5)" }}
              >
                Sessão individual
              </span>
            </motion.div>

            <motion.p
              className="-mb-2 font-mono text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--color-accent-light)", opacity: 0.6 }}
              variants={fadeUp}
            >
              Anamnese Estratégica
            </motion.p>

            <motion.h1
              className="max-w-[11.8em] text-[1.85rem] font-bold leading-[1.02] tracking-normal sm:max-w-[12.8em] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
              variants={fadeUp}
            >
              Existe um tipo de paciente que não pesquisa preço, fecha protocolo de{" "}
              <span style={{ color: "var(--color-accent-light)" }}>R$5 a R$10 mil</span>, e
              volta sempre.
            </motion.h1>

            <motion.div
              className="max-w-[34rem] space-y-3 text-[0.95rem] leading-relaxed md:text-base"
              variants={fadeUp}
            >
              <p style={{ color: "var(--color-text-inverse)" }}>
                Em uma Anamnese Estratégica gratuita de 45 minutos, vamos identificar o que
                está atraindo o paciente errado e o que precisa mudar para atrair quem valoriza
                seu trabalho.
              </p>
              <p style={{ color: "rgba(245, 240, 235, 0.6)" }}>
                Você vai receber um{" "}
                <strong style={{ color: "rgba(245, 240, 235, 0.88)" }}>
                  Plano de Ação Personalizado
                </strong>{" "}
                para estruturar sua clínica e começar a aplicar nas próximas semanas.
              </p>
            </motion.div>

            <motion.div
              className="flex w-full flex-col items-center pt-1 lg:w-auto lg:items-start"
              variants={fadeUp}
            >
              <a
                href="https://kathyelejoana.pro.typeform.com/to/p5KmnaIC/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
                onClick={trackInitiateForm}
              >
                APLICAR PARA UMA VAGA
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
              <p className="mt-3 text-xs" style={{ color: "rgba(245, 240, 235, 0.55)" }}>
                Apenas 10 vagas por semana.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden items-center justify-center lg:col-span-5 lg:flex"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image
                src="/kathyele-hero-v2.webp"
                alt="Kathyele Joana"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 0px, 42vw"
                priority
                loading="eager"
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3"
                style={{
                  background: "linear-gradient(to top, var(--color-hero-bg) 0%, transparent 100%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  border: "1px solid rgba(255,255,255,0.04)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 80px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 hidden h-px lg:block"
        style={{ background: "var(--color-hero-border-subtle)" }}
      />
    </section>
  );
}
