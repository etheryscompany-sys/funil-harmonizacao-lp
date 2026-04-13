"use client";

import { useEffect } from "react";

const NOISY_MESSAGES = [
  "AnalyticsFetchRetry",
  "All Analytics URLs have failed",
  "Failed to fetch",
];

function hasKnownNoise(text: string) {
  return NOISY_MESSAGES.some((message) => text.includes(message));
}

function isObjectWithDetails(value: unknown): value is { message?: string; stack?: string } {
  return typeof value === "object" && value !== null;
}

function stringifyArg(arg: unknown) {
  if (typeof arg === "string") {
    return arg;
  }

  if (arg instanceof Error) {
    return `${arg.message} ${arg.stack ?? ""}`;
  }

  if (isObjectWithDetails(arg)) {
    return `${arg.message ?? ""} ${arg.stack ?? ""}`;
  }

  return "";
}

export default function ObrigadoPlayerConsoleGuard() {
  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args: Parameters<typeof console.error>) => {
      const combinedText = args.map(stringifyArg).join(" ");
      const isAnalyticsNoise =
        combinedText.includes("AnalyticsFetchRetry") ||
        combinedText.includes("All Analytics URLs have failed");
      const isSmartPlayerFetchNoise =
        combinedText.includes("smartplayer.js") &&
        combinedText.includes("Failed to fetch");
      const shouldIgnore = isAnalyticsNoise || isSmartPlayerFetchNoise;

      if (shouldIgnore) {
        return;
      }

      originalConsoleError(...args);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const details =
        typeof reason === "string"
          ? reason
          : reason instanceof Error
            ? `${reason.message} ${reason.stack ?? ""}`
            : isObjectWithDetails(reason)
              ? `${reason.message ?? ""} ${reason.stack ?? ""}`
              : "";

      if (details.includes("smartplayer.js") && hasKnownNoise(details)) {
        event.preventDefault();
      }
    };

    const handleWindowError = (event: ErrorEvent) => {
      const source = event.filename ?? "";
      const message = event.message ?? "";

      if (source.includes("smartplayer.js") && hasKnownNoise(message)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleWindowError);

    return () => {
      console.error = originalConsoleError;
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.removeEventListener("error", handleWindowError);
    };
  }, []);

  return null;
}
