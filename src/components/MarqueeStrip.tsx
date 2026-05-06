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
      className="relative z-20 w-full"
      style={{
        background: "var(--color-hero-bg)",
        marginTop: "-1px",
      }}
    >
      <div className="py-2 pb-6 md:pb-10">
        <div
          className="relative overflow-hidden py-4 md:py-6"
          style={{
            borderTop: "1px solid rgba(184,132,79, 0.35)",
            borderBottom: "1px solid rgba(184,132,79, 0.35)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              opacity: 0.04,
              background:
                "radial-gradient(ellipse at 50% 50%, var(--color-accent) 0%, transparent 70%)",
            }}
          />

          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 4 }).map((_, rep) =>
              items.map((item, i) => (
                <span
                  key={`${rep}-${i}`}
                  className="mx-4 flex shrink-0 items-center gap-8 md:mx-6 md:gap-12"
                >
                  <span
                    className="text-sm font-medium uppercase tracking-[0.25em] md:text-base"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "rgba(245, 240, 235, 0.35)",
                    }}
                  >
                    {item}
                  </span>
                  <span
                    className="inline-block h-1 w-1 shrink-0 rounded-full"
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
