"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyUrgencyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          {/* Top accent line */}
          <div
            className="h-px w-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(184, 132, 79, 0.4), transparent)",
            }}
          />

          <div
            style={{
              background: "linear-gradient(180deg, rgba(20, 17, 14, 0.97) 0%, rgba(14, 11, 9, 0.99) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 sm:px-6 py-2.5">
              {/* Left: text + price */}
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <p
                  className="text-[0.625rem] sm:text-xs tracking-wide uppercase truncate"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "rgba(245, 240, 235, 0.5)",
                  }}
                >
                  Guia gratuito de análise facial
                </p>
                <span
                  className="text-xs sm:text-sm font-semibold shrink-0"
                  style={{ color: "var(--color-accent-light)" }}
                >
                  R$ 0
                </span>
              </div>

              {/* Right: CTA */}
              <a
                href="https://kathyelejoana.pro.typeform.com/to/p5KmnaIC/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-lg px-4 sm:px-5 py-2 text-[0.625rem] sm:text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-500"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark, #8B6B3D) 100%)",
                  color: "#fff",
                  boxShadow: "0 2px 8px rgba(184, 132, 79, 0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
                  transitionTimingFunction: "var(--ease-out-expo)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(184, 132, 79, 0.35), inset 0 1px 0 rgba(255,255,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(184, 132, 79, 0.25), inset 0 1px 0 rgba(255,255,255,0.12)";
                }}
              >
                QUERO O GUIA
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
