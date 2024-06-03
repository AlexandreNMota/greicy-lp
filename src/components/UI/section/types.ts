import { ReactNode } from "react";
import { Dimensions } from "../../../context/app";

export interface SectionProps {
  children: ReactNode;
  id: string;
}

export interface StyledSectionProps {
  full: boolean;
  dimensions: Dimensions;
}
