import { FC } from "react";
import { HeaderProps } from "./types";
import { StyledButton, StyledHeader } from "./styles";
import useAppContext from "../../../context/app/useAppContext";
import { Navbar } from "./navbar";
import { Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export const Header: FC<HeaderProps> = ({ section, ...props }) => {
  const { dimensions } = useAppContext();
  return (
    <StyledHeader dimensions={dimensions} section={section} {...props}>
      <Grid container spacing={4}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Navbar />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <StyledButton onClick={() => {}} startIcon={<WhatsAppIcon />}>
            Agendar Consulta
          </StyledButton>
        </Grid>
      </Grid>
    </StyledHeader>
  );
};
