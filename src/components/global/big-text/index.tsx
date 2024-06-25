import { FC } from "react";
import { IBigTextProps } from "./types";
import { Typography } from "@mui/material";
import "./big-text.css";
export const BigText: FC<IBigTextProps> = ({
  text,
  hasMarginBottom,
}: IBigTextProps) => {
  const classe = hasMarginBottom === true ? "big-text big-text-mb" : "big-text";
  return <Typography className={classe}>{text}</Typography>;
};
