import type { CSSProperties } from "react";

export interface CardStyleProps {
    isActive: boolean;
    offset: number;
  }
  
export interface ExtendedCSSProperties extends CSSProperties {
    "--active": number;
    "--offset": string;
    "--direction": string;
    "--abs-offset": string;
    "--z-index": string;
  }
