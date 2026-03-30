"use client";

import { useCallback } from "react";

type StandardEvent =
  | "ViewContent"
  | "InitiateCheckout"
  | "Purchase"
  | "Lead"
  | "CompleteRegistration";

interface EventData {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  num_items?: number;
  [key: string]: unknown;
}

export function useFbq() {
  const track = useCallback((event: StandardEvent, data?: EventData) => {
    if (typeof window === "undefined" || !window.fbq) return;
    window.fbq("track", event, data);
  }, []);

  const trackCustom = useCallback(
    (event: string, data?: Record<string, unknown>) => {
      if (typeof window === "undefined" || !window.fbq) return;
      window.fbq("trackCustom", event, data);
    },
    []
  );

  return { track, trackCustom };
}
