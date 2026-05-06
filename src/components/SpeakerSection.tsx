"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const credentials = [
  { number: "+100", label: "doutoras mentoradas" },
  { number: "3+", label: "anos focada em harmonização facial" },
  { number: "R$50 mil+", label: "faturamento médio das alunas" },
];

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

function trackInitiateForm() {
  try {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "InitiateForm");
    }
  } catch {}
}

export default function SpeakerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        background: "linear-gradient(165deg, #1C1510 0%, #201610 40%, #1A1310 100%)",
        color: "#F5F0EB",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 60%, rgba(184,132,79,0.10) 0%, transparent 55%), radial-gradient(ellipse at 80% 25%, rgba(119,94,79,0.07) 0%, transparent 50%)",
        }}
      />

      <div
        className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="block whitespace-nowrap text-[12vw] font-bold leading-none tracking-normal lg:text-[10vw]"
          style={{
            fontFamily: "var(--font-display)",
            color: "rgba(245, 240, 235, 0.02)",
          }}
        >
          KATHYELE JOANA
        </span>
      </div>

      <div className="container-lp relative z-10">
        <ScrollReveal>
          <span
            className="mb-10 block font-mono text-xs uppercase tracking-[0.2em] md:mb-14"
            style={{ color: "rgba(212, 169, 110, 0.5)" }}
          >
            {"// QUEM VAI TE ATENDER"}
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-20">
          <motion.div className="lg:col-span-5" style={{ y: photoY }}>
            <ScrollReveal direction="left">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  boxShadow:
                    "0 30px 60px -20px rgba(0,0,0,0.35), 0 8px 24px -8px rgba(0,0,0,0.2)",
                }}
              >
                <div className="relative aspect-[3/4] w-full lg:aspect-[4/5]">
                  <Image
                    src="/kathyele-speaker-v2.webp"
                    alt="Kathyele Joana"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 85vw, 42vw"
                  />
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3"
                    style={{ background: "linear-gradient(to top, #1C1510 0%, transparent 100%)" }}
                  />
                </div>

                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    border: "1px solid rgba(255,255,255,0.04)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 0 60px rgba(0,0,0,0.3)",
                  }}
                />
              </div>
            </ScrollReveal>
          </motion.div>

          <div className="flex flex-col lg:col-span-7">
            <ScrollReveal>
              <h2
                className="mb-6 text-[1.875rem] font-semibold leading-[1.1] tracking-normal sm:text-4xl md:text-5xl lg:text-[3.25rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Kathyele Joana
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mb-8">
                <div
                  className="mb-3 h-[2px] w-16 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-accent-light), transparent)",
                  }}
                />
                <p className="text-sm leading-relaxed tracking-wide" style={{ color: "rgba(212, 169, 110, 0.9)" }}>
                  Estrategista de marketing e vendas para clínicas de harmonização facial
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <blockquote
                className="relative mb-8 pl-6"
                style={{ borderLeft: "2px solid rgba(212, 169, 110, 0.25)" }}
              >
                <p
                  className="text-lg italic leading-relaxed md:text-xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "rgba(245, 240, 235, 0.9)",
                  }}
                >
                  Nos últimos 3 anos, ajudei mais de 100 doutoras a construir clínicas onde a
                  paciente chega já entendendo o valor do protocolo, sem objeção, sem desconto,
                  sem disputa por preço.
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p
                className="mb-10 max-w-[55ch] text-[0.9375rem] leading-relaxed md:text-base"
                style={{ color: "rgba(245, 240, 235, 0.7)" }}
              >
                A sessão é conduzida para enxergar a sua realidade com precisão: comunicação,
                oferta, perfil de paciente e próximos ajustes para vender protocolos com mais
                segurança.
              </p>
            </ScrollReveal>

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
                  className="flex flex-col gap-1.5 rounded-xl px-5 py-4 transition-transform duration-500"
                  style={{
                    background: "rgba(184, 132, 79, 0.08)",
                    border: "1px solid rgba(184, 132, 79, 0.12)",
                    transitionTimingFunction: "var(--ease-out-expo)",
                  }}
                  variants={credentialItem}
                  whileHover={{ scale: 0.98 }}
                >
                  <span
                    className="font-mono text-xl font-bold tracking-normal md:text-2xl"
                    style={{ color: "var(--color-accent-light)" }}
                  >
                    {cred.number}
                  </span>
                  <span
                    className="font-mono text-[0.6rem] uppercase tracking-[0.12em]"
                    style={{ color: "rgba(245, 240, 235, 0.5)" }}
                  >
                    {cred.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <ScrollReveal delay={380}>
              <div className="mt-8">
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
