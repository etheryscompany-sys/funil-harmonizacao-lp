"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
    },
  },
};

export default function FeedbackSection() {
  const images = [
    { src: "/feedbacks/1.png", alt: "Feedback de aluna 1" },
    { src: "/feedbacks/2.png", alt: "Feedback de aluna 2" },
    { src: "/feedbacks/3.png", alt: "Feedback de aluna 3" },
    { src: "/feedbacks/4.png", alt: "Feedback de aluna 4" },
  ];

  return (
    <section
      className="w-full relative overflow-hidden dot-pattern"
      style={{
        paddingTop: "calc(var(--spacing-section) * 1.25)",
        paddingBottom: "var(--spacing-section)",
        background: "var(--color-hero-bg)",
        color: "var(--color-text-inverse)",
      }}
    >
      {/* Dual warm radial glows — taste-skill: tinted, not neon */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 10%, rgba(184,132,79,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 90%, rgba(184,132,79,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="container-lp relative z-10">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--color-accent))" }} />
            <span
              className="font-mono text-[0.6875rem] tracking-[0.25em] uppercase text-center"
              style={{ color: "rgba(245, 240, 235, 0.5)" }}
            >
              Resultados Reais
            </span>
            <div className="w-12 h-[1px]" style={{ background: "linear-gradient(-90deg, transparent, var(--color-accent))" }} />
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2
            className="text-[1.875rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-normal leading-[1.05] mb-16 text-center max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            O que as nossas mentoradas{" "}
            <span style={{ color: "var(--color-accent)" }}>dizem</span>.
          </h2>
        </ScrollReveal>
        
        {/* Stagger orchestration — taste-skill Section Feedback */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {images.map((item) => (
            <motion.div 
              key={item.src} 
              variants={fadeUpItem}
              className="w-full flex h-full group"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full aspect-[5/4] md:aspect-[4/3] object-cover object-top rounded-[1.25rem] overflow-hidden transition-transform duration-700 hover:scale-[1.02] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
