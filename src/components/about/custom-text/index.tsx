import { Typography } from "@mui/material";
import { ICustomTextProps } from "./types";
import { FC } from "react";
import clsx from "clsx";
import "./custom-text.css";
export const CustomText: FC<ICustomTextProps> = ({
  text,
  classe = "",
  ...props
}: ICustomTextProps) => {
  const className = clsx({
    "source-sans-3": true,
    "custom-text": classe !== "",
    [classe]: classe,
  });
  return (
    <Typography className={className} {...props}>
      {text}
    </Typography>
  );
};
