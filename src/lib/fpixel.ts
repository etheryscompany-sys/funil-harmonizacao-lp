export const FB_PIXEL_ID = "377992697994811";

export const pageview = () => {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "PageView");
};

export const event = (name: string, options: Record<string, unknown> = {}) => {
  if (typeof window === "undefined" || !window.fbq) return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window.fbq as any)("track", name, options);
};
