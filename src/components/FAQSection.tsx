"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "O guia é realmente gratuito?",
    answer:
      "Sim, 100% gratuito. Basta preencher o formulário e você recebe acesso imediato ao guia completo de análise facial. Sem cartão, sem compromisso.",
  },
  {
    question: "Isso funciona para quem está começando na estética?",
    answer:
      "Sim. O método foi estruturado do zero, então serve tanto para quem está começando quanto para quem já atende mas quer ter mais precisão e confiança na análise facial.",
  },
  {
    question: "Vou aprender algo prático ou é só teoria?",
    answer:
      "O guia é focado em aplicação prática. Você recebe o passo a passo para analisar proporções, identificar assimetrias e montar o plano de tratamento visual do paciente.",
  },
  {
    question: "Serve para qual área da saúde?",
    answer:
      "O método é aplicável para biomédicas, médicas, enfermeiras, fisioterapeutas, dentistas e qualquer profissional que trabalhe com harmonização orofacial ou estética facial.",
  },
  {
    question: "Como recebo o guia depois de preencher?",
    answer:
      "Após preencher o formulário, você recebe acesso imediato. O material é 100% online e pode ser acessado de qualquer dispositivo, a qualquer momento.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="relative w-full"
      style={{
        backgroundColor: "var(--color-bg-surface)",
        paddingTop: "var(--spacing-section-sm)",
        paddingBottom: "var(--spacing-section-sm)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <p
            className="mb-4 text-xs tracking-[0.3em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-muted)",
            }}
          >
            // DÚVIDAS
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2
            className="mb-10 text-[1.875rem] font-semibold leading-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
            }}
          >
            Perguntas Frequentes
          </h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={150 + index * 80}>
              <div
                style={{
                  borderBottom: "1px solid var(--color-border-subtle)",
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span
                    className="text-base font-medium sm:text-lg"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {faq.question}
                  </span>

                  <span
                    className="flex shrink-0 items-center justify-center"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {openIndex === index ? (
                      <Minus size={20} weight="bold" />
                    ) : (
                      <Plus size={20} weight="bold" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.25, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pb-5 text-sm leading-relaxed sm:text-base"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
