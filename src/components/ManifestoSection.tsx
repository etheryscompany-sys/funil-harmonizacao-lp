"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ManifestoSection() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        background: "var(--color-bg-contrast)",
        color: "var(--color-text-inverse)",
      }}
    >
      {/* Subtle grain */}
      <div className="grain-overlay" />

      {/* Accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] pointer-events-none"
        style={{
          opacity: 0.06,
          background: "radial-gradient(ellipse, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <div className="container-lp relative z-10 text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <h2
            className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-normal mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            NÃO É MAIS SOBRE{" "}
            <span className="relative inline-block">
              <span style={{ color: "var(--color-accent-light)" }}>&ldquo;VENDER PROCEDIMENTO&rdquo;</span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, var(--color-accent-light), transparent)" }}
              />
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          {/* Double-Bezel card for the manifesto text */}
          <div
            className="rounded-[2rem] p-1.5 mx-auto max-w-2xl"
            style={{
              background: "rgba(245, 240, 235, 0.04)",
              border: "1px solid rgba(245, 240, 235, 0.08)",
            }}
          >
            <div
              className="rounded-[calc(2rem-0.375rem)] px-8 py-6 md:px-12 md:py-8"
              style={{
                background: "rgba(245, 240, 235, 0.03)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "rgba(245, 240, 235, 0.7)" }}
              >
                É sobre fazer as pessoas{" "}
                <strong style={{ color: "var(--color-accent-light)" }}>desejarem a transformação</strong>{" "}
                que só você entrega e confiar na sua visão estética.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
