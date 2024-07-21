import { Button, Typography } from "@mui/material";
import { ISaibaMaisProps } from "./types";
import { FC } from "react";
import "./saiba-mais-button.css";
export const SaibaMaisButton: FC<ISaibaMaisProps> = ({
  ...props
}: ISaibaMaisProps) => {
  return (
    <Button variant="contained" className="saiba-mais-button" {...props}>
      <Typography className="poppins saiba-mais-text">
        Saiba Mais {">>"}
      </Typography>
    </Button>
  );
};
