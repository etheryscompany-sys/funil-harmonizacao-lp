"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedHeadlineProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}

export default function AnimatedHeadline({
  children,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: AnimatedHeadlineProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  // Split into words, preserving spans/accents is handled via string only
  const words = children.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={children}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ verticalAlign: "bottom" }}
        >
          <span
            style={{
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease`,
              transitionDelay: `${(i * 60) + delay}ms`,
              whiteSpace: "pre",
            }}
          >
            {word}{i < words.length - 1 ? "\u00a0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
