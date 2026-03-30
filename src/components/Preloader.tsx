"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLUMNS = 12;
const STAGGER_MS = 40;
const DURATION_MS = 900;

export default function Preloader() {
  const [phase, setPhase] = useState<"in" | "hold" | "exit" | "done">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("exit"), 1600);
    const t3 = setTimeout(() => setPhase("done"), 1600 + DURATION_MS + STAGGER_MS * COLUMNS);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Brand text — fades out before grid wipe */}
      <AnimatePresence>
        {phase !== "exit" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            style={{ background: "var(--color-hero-bg)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.p
              className="font-mono text-[0.65rem] tracking-[0.45em] uppercase"
              style={{ color: "rgba(245, 240, 235, 0.3)" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            >
              ANAMNESE ESTRATÉGICA
            </motion.p>
            <motion.h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)",
                color: "var(--color-text-inverse)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                lineHeight: 1,
              }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
            >
              KATHYELE JOANA
            </motion.h1>
            <motion.div
              className="h-px rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
              }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "clamp(3rem, 8vw, 6rem)", opacity: 1, transition: { delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid wipe — 12 columns that collapse on exit */}
      <div
        className="absolute inset-0 flex"
        style={{ pointerEvents: "none" }}
      >
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <motion.div
            key={i}
            className="h-full flex-1"
            style={{ background: "var(--color-hero-bg)", transformOrigin: "top" }}
            initial={{ scaleY: 1 }}
            animate={
              phase === "exit"
                ? {
                    scaleY: 0,
                    transition: {
                      duration: DURATION_MS / 1000,
                      delay: i * (STAGGER_MS / 1000),
                      ease: [0.86, 0, 0.07, 1],
                    },
                  }
                : { scaleY: 1 }
            }
          />
        ))}
      </div>
    </div>
  );
}
