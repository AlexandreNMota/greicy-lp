import { Typography } from "@mui/material";
import { IStepTitleProps } from "./types";
import "./step-title.css";
import { FC } from "react";
export const StepTitle: FC<IStepTitleProps> = ({
  text,
  ...props
}: IStepTitleProps) => {
  return (
    <Typography {...props} className="poppins step-title">
      {text}
    </Typography>
  );
};
