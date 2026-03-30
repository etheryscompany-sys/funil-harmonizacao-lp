"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "A sessão é realmente gratuita?",
    answer:
      "Sim, 100% gratuita e sem compromisso. É uma sessão individual comigo onde eu analiso o cenário da sua clínica e te mostro o que precisa mudar.",
  },
  {
    question: "Funciona para quem está começando?",
    answer:
      "Sim. A anamnese é personalizada para o seu momento. Seja você iniciante estruturando a clínica ou experiente querendo escalar, o diagnóstico se adapta ao seu caso.",
  },
  {
    question: "É consultoria ou vão tentar me vender algo?",
    answer:
      "É uma sessão de diagnóstico real. Você sai com clareza do que precisa mudar, independente de qualquer coisa. Se fizer sentido para os dois lados, posso te mostrar como posso ajudar mais.",
  },
  {
    question: "Para quem é a Anamnese Estratégica?",
    answer:
      "Para biomédicas, médicas, enfermeiras, fisioterapeutas, dentistas e profissionais de harmonização orofacial que atendem bem mas não conseguem atrair a paciente certa ou fechar protocolo completo.",
  },
  {
    question: "Como funciona depois que eu preencho?",
    answer:
      "Depois de preencher o formulário, minha equipe entra em contato para agendar a sessão no melhor horário para você. As vagas são limitadas por semana.",
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
