"use client";

import { useEffect } from "react";
import { useFbq } from "@/hooks/useFbq";

export default function Aula100kPageEvents() {
  const { trackCustom } = useFbq();

  useEffect(() => {
    trackCustom("view-aula100k");
  }, [trackCustom]);

  return null;
}
