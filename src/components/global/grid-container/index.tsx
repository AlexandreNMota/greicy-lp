import { FC } from "react";
import { IGridContainerProps } from "./types";
import clsx from "clsx";
import { Grid } from "@mui/material";
import "./grid-container.css";
export const GridContainer: FC<IGridContainerProps> = ({
  hasMarginTop = false,
  hasPaddingBottom = false,
  children,
}: IGridContainerProps) => {
  const classe = clsx({
    "grid-container-margin-top": hasMarginTop,
    "grid-container-padding-bottom": hasPaddingBottom,
  });
  return (
    <Grid container className={classe}>
      {children}
    </Grid>
  );
};
