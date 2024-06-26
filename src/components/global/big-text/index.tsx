import { FC } from "react";
import { IBigTextProps } from "./types";
import { Typography } from "@mui/material";
import clsx from "clsx";
import "./big-text.css";
export const BigText: FC<IBigTextProps> = ({
  text,
  hasMarginBottom,
  branco,
  ...props
}: IBigTextProps) => {
  const classe = clsx({
    "big-text-mb": hasMarginBottom,
    "big-text-branco": branco,
    "big-text": true,
  });
  return (
    <Typography className={classe} {...props}>
      {text}
    </Typography>
  );
};
