export {};

type FbqStandardEvent =
  | "ViewContent"
  | "InitiateCheckout"
  | "Purchase"
  | "Lead"
  | "CompleteRegistration"
  | "AddToCart"
  | "PageView";

interface FbqEventData {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  value?: number;
  currency?: string;
  num_items?: number;
  [key: string]: unknown;
}

interface Fbq {
  (command: "init", pixelId: string): void;
  (command: "track", event: FbqStandardEvent, data?: FbqEventData): void;
  (command: "trackCustom", event: string, data?: Record<string, unknown>): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: (...args: unknown[]) => void;
  loaded: boolean;
  version: string;
}

declare global {
  interface Window {
    fbq: Fbq;
    _fbq: Fbq;
  }
}
