import { Typography } from "@mui/material";
import { ICustomTextProps } from "./types";
import { FC } from "react";
import "./custom-text.css";
export const CustomText: FC<ICustomTextProps> = ({
  text,
  ...props
}: ICustomTextProps) => {
  return (
    <Typography className="source-sans-3 custom-text" {...props}>
      {text}
    </Typography>
  );
};
