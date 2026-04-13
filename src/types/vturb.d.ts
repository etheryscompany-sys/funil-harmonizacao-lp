import type {
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        id?: string;
        style?: CSSProperties | string;
      };
    }
  }
}

export {};
