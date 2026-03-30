"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="font-mono text-4xl md:text-6xl font-medium tabular-nums" style={{ color: "var(--color-accent)" }}>
      {count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

const stats = [
  { value: 5000, suffix: "+", label: "Ticket mínimo por protocolo" },
  { value: 100, suffix: "%", label: "Online e ao vivo" },
  { value: 26, suffix: "/04", label: "Data do evento" },
];

export default function SocialProofSection() {
  return (
    <section
      className="relative w-full"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        background: "var(--color-bg-surface)",
      }}
    >
      {/* Section divider — gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      <div className="container-lp">
        <ScrollReveal>
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase block mb-6 text-center lg:text-left"
            style={{ color: "var(--color-text-muted)" }}
          >
            // Números
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 150}>
              {/* Stat card container */}
              <div
                className="flex flex-col gap-4 rounded-2xl p-6 md:p-8 text-center lg:text-left items-center lg:items-start"
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border-subtle)",
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-baseline gap-1">
                  {stat.suffix === "/04" ? (
                    <span
                      className="font-mono text-4xl md:text-6xl font-medium tabular-nums"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {stat.value}{stat.suffix}
                    </span>
                  ) : (
                    <>
                      <span
                        className="font-mono text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        R$
                      </span>
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </>
                  )}
                </div>

                {/* Accent underline decoration */}
                <div
                  className="h-0.5 w-12 rounded-full mx-auto lg:mx-0"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-accent), transparent)",
                  }}
                />

                <span
                  className="text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

