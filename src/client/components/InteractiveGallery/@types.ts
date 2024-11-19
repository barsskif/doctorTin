import React from "react";
import type { ReactNode } from "react";

export interface ICardProps {
    title?: string;
    content: string;
    price?: string;
    isActive: boolean;
  }
  
export  interface ICarouselProps {
    children: ReactNode;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>
  }
  