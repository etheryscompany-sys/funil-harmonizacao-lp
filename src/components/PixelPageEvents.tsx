"use client";

import { useEffect } from "react";

export default function PixelPageEvents() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "O Fim dos Curiosos — Aula ao Vivo",
        content_category: "Evento Online",
        currency: "BRL",
        value: 97,
      });
    }
  }, []);

  return null;
}
