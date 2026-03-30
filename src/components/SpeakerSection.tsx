"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const credentials = [
  { number: "+100", label: "profissionais formadas" },
  { number: "3+", label: "anos de experiência" },
  { number: "R$ 50k+", label: "faturamento das alunas" },
];

/* Stagger orchestration — taste-skill Section 4 */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const credentialItem = {
  hidden: { opacity: 0, y: 16 },
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

export default function SpeakerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Subtle parallax on the photo — taste-skill MOTION_INTENSITY 6 */
  const photoY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        /* Warm cognac gradient — unique third palette */
        background:
          "linear-gradient(165deg, #1C1510 0%, #201610 40%, #1A1310 100%)",
        color: "#F5F0EB",
      }}
    >
      {/* Dual warm radial glows — taste-skill: tinted, not neon */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 25% 60%, rgba(184,132,79,0.10) 0%, transparent 55%), radial-gradient(ellipse at 80% 25%, rgba(119,94,79,0.07) 0%, transparent 50%)",
        }}
      />

      {/* Watermark — editorial magazine treatment */}
      <div
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="block whitespace-nowrap text-[12vw] lg:text-[10vw] font-bold tracking-tight leading-none"
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(245, 240, 235, 0.02)",
          }}
        >
          KATHYELE JOANA
        </span>
      </div>

      <div className="container-lp relative z-10">
        {/* Label */}
        <ScrollReveal>
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase block mb-10 md:mb-14"
            style={{ color: "rgba(212, 169, 110, 0.5)" }}
          >
            // Quem é Kathyele Joana
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Left — Photo with parallax (5 cols) */}
          <motion.div
            className="lg:col-span-5"
            style={{ y: photoY }}
          >
            <ScrollReveal direction="left">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  boxShadow:
                    "0 30px 60px -20px rgba(0,0,0,0.35), 0 8px 24px -8px rgba(0,0,0,0.2)",
                }}
              >
                <div className="relative w-full aspect-[3/4] lg:aspect-[4/5]">
                  <Image
                    src="/kathyele-speaker-v2.webp"
                    alt="Kathyele Joana Mentora de Estética"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 85vw, 42vw"
                  />
                  {/* Bottom fade — blends into section cognac bg */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, #1C1510 0%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Liquid Glass — subtle refraction only */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: "1px solid rgba(255,255,255,0.04)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 0 60px rgba(0,0,0,0.3)",
                  }}
                />
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Right — Bio (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal>
              <h2
                className="text-[1.875rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-normal leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Quem vai fazer a{" "}
                <span style={{ color: "var(--color-accent-light)" }}>
                  sua análise?
                </span>
              </h2>
            </ScrollReveal>

            {/* Name + accent rule + role */}
            <ScrollReveal delay={100}>
              <div className="mb-8">
                <h3
                  className="text-2xl md:text-3xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Kathyele Joana
                </h3>
                <div
                  className="w-16 h-[2px] rounded-full mb-3"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-accent-light), transparent)",
                  }}
                />
                <p
                  className="text-sm tracking-wide"
                  style={{ color: "rgba(212, 169, 110, 0.9)" }}
                >
                  Estrategista de marketing e vendas especializada em clínicas de harmonização facial
                </p>
              </div>
            </ScrollReveal>

            {/* Pull quote — italic Gazpacho + left accent border */}
            <ScrollReveal delay={200}>
              <blockquote
                className="relative mb-8 pl-6"
                style={{
                  borderLeft: "2px solid rgba(212, 169, 110, 0.25)",
                }}
              >
                <p
                  className="text-lg md:text-xl italic leading-relaxed"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "rgba(245, 240, 235, 0.9)",
                  }}
                >
                  Já ajudei dezenas de profissionais que viviam no mesmo
                  ciclo, atendendo bem, investindo e mesmo assim só atraindo
                  curiosa, a construir uma clínica com pacientes que querem
                  tratar de verdade.
                </p>
              </blockquote>
            </ScrollReveal>

            {/* Bio paragraph */}
            <ScrollReveal delay={300}>
              <p
                className="text-[0.9375rem] md:text-base leading-relaxed max-w-[55ch] mb-10"
                style={{ color: "rgba(245, 240, 235, 0.7)" }}
              >
                Em mais de 3 anos, já ajudei{" "}
                <strong style={{ color: "var(--color-accent-light)" }}>
                  +100 profissionais
                </strong>{" "}
                a construir clínicas com previsibilidade, fechando protocolo
                completo sem depender de promoção ou indicação.
              </p>
            </ScrollReveal>

            {/* Credential pills — staggered spring entrance */}
            <motion.div
              className="flex flex-wrap gap-3 md:gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {credentials.map((cred) => (
                <motion.div
                  key={cred.label}
                  className="flex flex-col gap-1.5 px-5 py-4 rounded-xl transition-transform duration-500"
                  style={{
                    background: "rgba(184, 132, 79, 0.08)",
                    border: "1px solid rgba(184, 132, 79, 0.12)",
                    transitionTimingFunction: "var(--ease-out-expo)",
                  }}
                  variants={credentialItem}
                  whileHover={{ scale: 0.98 }}
                >
                  <span
                    className="font-mono text-xl md:text-2xl font-bold tracking-tight"
                    style={{ color: "var(--color-accent-light)" }}
                  >
                    {cred.number}
                  </span>
                  <span
                    className="font-mono text-[0.6rem] tracking-[0.12em] uppercase"
                    style={{ color: "rgba(245, 240, 235, 0.5)" }}
                  >
                    {cred.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
