"use client";

import { useEffect } from "react";
import { useFbq } from "@/hooks/useFbq";

export default function ObrigadoPageEvents() {
  const { trackCustom } = useFbq();

  useEffect(() => {
    trackCustom("view-obrigado");
  }, [trackCustom]);

  return null;
}
