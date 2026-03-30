"use client";

import { useEffect } from "react";

export default function PixelPageEvents() {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Anamnese Estratégica",
        content_category: "Lead Magnet",
        currency: "BRL",
        value: 0,
      });
    }
  }, []);

  return null;
}
