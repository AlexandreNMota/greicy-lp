import { GridProps } from "@mui/material";
import { ReactNode } from "react";

export interface IGridContainerProps extends GridProps {
  hasMarginTop?: boolean;
  hasPaddingBottom?: boolean;
  children: ReactNode;
}
