import { Typography } from "@mui/material";
import { IStepContentProps } from "./types";
import { FC } from "react";
import "./step-content.css";
export const StepContent: FC<IStepContentProps> = ({
  text,
  ...props
}: IStepContentProps) => {
  return (
    <Typography {...props} className="poppins step-content">
      {text}
    </Typography>
  );
};
