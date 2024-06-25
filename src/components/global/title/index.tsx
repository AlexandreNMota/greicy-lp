import { Typography } from "@mui/material";
import { ITitleProps } from "./types";
import { FC } from "react";
import "./title.css";
export const Title: FC<ITitleProps> = ({ title }: ITitleProps) => {
  return <Typography className="title">{title}</Typography>;
};
