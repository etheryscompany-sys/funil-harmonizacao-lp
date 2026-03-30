"use client";

const items = [
  "ANAMNESE ESTRATÉGICA",
  "SESSÃO GRATUITA",
  "PROTOCOLO COMPLETO",
  "PACIENTE CERTA",
  "ALTO TICKET",
  "CLÍNICA POSICIONADA",
];

export default function MarqueeStrip() {
  return (
    <section
      className="w-full relative z-20"
      style={{
        background: "var(--color-hero-bg)",
        marginTop: "-1px" // Prevent rounding gaps
      }}
    >
      {/* Container providing dark background margin above and below the lines */}
      <div className="py-2 pb-6 md:pb-10">
        <div
          className="relative overflow-hidden py-4 md:py-6"
          style={{
            borderTop: "1px solid rgba(184,132,79, 0.35)",
            borderBottom: "1px solid rgba(184,132,79, 0.35)",
          }}
        >
          {/* Accent glow — subtle center warmth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.04,
              background:
                "radial-gradient(ellipse at 50% 50%, var(--color-accent) 0%, transparent 70%)",
            }}
          />

      <div className="flex whitespace-nowrap animate-marquee">
        {Array.from({ length: 4 }).map((_, rep) =>
          items.map((item, i) => (
            <span
              key={`${rep}-${i}`}
              className="shrink-0 flex items-center gap-8 md:gap-12 mx-4 md:mx-6"
            >
              <span
                className="text-sm md:text-base tracking-[0.25em] uppercase font-medium"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "rgba(245, 240, 235, 0.35)",
                }}
              >
                {item}
              </span>
              <span
                className="inline-block w-1 h-1 rounded-full shrink-0"
                style={{
                  background: "var(--color-accent)",
                  opacity: 0.5,
                }}
              />
            </span>
          ))
        )}
      </div>
        </div>
      </div>
    </section>
  );
}
