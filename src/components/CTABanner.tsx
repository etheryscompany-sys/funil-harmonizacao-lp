"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section
      className="w-full relative z-20"
      style={{
        paddingTop: "var(--spacing-section-sm)",
        paddingBottom: "var(--spacing-section-sm)",
      }}
    >
      <div className="container-lp flex justify-center">
        <ScrollReveal>
          <a
            href="https://kathyelejoana.pro.typeform.com/to/p5KmnaIC/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            QUERO MINHA VAGA
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
        </ScrollReveal>
      </div>
    </section>
  );
}
