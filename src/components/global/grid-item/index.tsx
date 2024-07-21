import { FC } from "react";
import clsx from "clsx";
import { IGridItemsProps } from "./types";
import { Grid } from "@mui/material";
import "./grid-item.css";

export const GridItem: FC<IGridItemsProps> = ({
  children,
  directionFlex = "row",
  flexStart = false,
  flexAround = false,
  unflex = false,
  padded = false,
  alignItemsStart = false,
  customClass = "",
  ...props
}) => {
  const classe = clsx({
    "grid-item-flex-start": flexStart && !flexAround && !unflex,
    "grid-item-flex-center": !flexStart && !flexAround && !unflex,
    "grid-item-flex-around": flexAround && !flexStart && !unflex,
    "grid-item-column": directionFlex === "column",
    "grid-item-row": directionFlex === "row",
    "grid-padded": padded,
    "grid-items-start": alignItemsStart,
    [customClass]: customClass,
  });

  return (
    <Grid className={classe} item {...props}>
      {children}
    </Grid>
  );
};
