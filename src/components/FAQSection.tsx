"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "@phosphor-icons/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "A sessão é mesmo gratuita?",
    answer:
      "É, e não tem pegadinha. A sessão é o filtro pra novas mentoradas, e você sai com clareza mesmo que não feche nada comigo.",
  },
  {
    question: "Funciona pra quem está começando?",
    answer:
      "Funciona pra quem já atende, mesmo em estágio inicial. Se você ainda não atende ninguém, me chama no Instagram que oriento por outro caminho.",
  },
  {
    question: "Não tenho muita verba pra tráfego, faz sentido?",
    answer:
      "Faz, porque o que vamos discutir é sobre o que sua estrutura atual já comunica, não sobre quanto você gasta em anúncio.",
  },
  {
    question: "Quanto tempo dura?",
    answer: "De 45 minutos a 1 hora, por chamada de vídeo, individual.",
  },
  {
    question: "Vão tentar me empurrar uma mentoria?",
    answer:
      "Não, o Ápice só entra na conversa se fizer sentido pro seu caso, e fica explícito no final.",
  },
  {
    question: "O que acontece depois da aplicação?",
    answer:
      "Você responde 6 perguntas, eu analiso pessoalmente, e se houver fit te chamo no WhatsApp pra agendar.",
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
            className="mb-4 text-xs uppercase tracking-[0.3em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-text-muted)",
            }}
          >
            {"// DÚVIDAS"}
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
            Dúvidas frequentes
          </h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={150 + index * 80}>
              <div style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base font-medium sm:text-lg" style={{ color: "var(--color-text-primary)" }}>
                    {faq.question}
                  </span>

                  <span className="flex shrink-0 items-center justify-center" style={{ color: "var(--color-accent)" }}>
                    {openIndex === index ? <Minus size={20} weight="bold" /> : <Plus size={20} weight="bold" />}
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
                      <p className="pb-5 text-sm leading-relaxed sm:text-base" style={{ color: "var(--color-text-secondary)" }}>
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
