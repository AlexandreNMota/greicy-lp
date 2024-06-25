import { GridProps } from "@mui/material";
import { ReactNode } from "react";

export interface IGridItemsProps extends GridProps {
  children: ReactNode;
  directionFlex?: "row" | "column";
  flexStart?: boolean;
  flexAround?: boolean;
  unflex?: boolean;
  padded?: boolean;
  alignItemsStart?: boolean;
  customClass?: string;
}
