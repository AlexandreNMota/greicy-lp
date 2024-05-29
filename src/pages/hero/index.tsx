import useAppContext from "../../context/app/useAppContext";
import { CustomStyledSection } from "./styles";
import './index.css'
import { Box, Grid, Typography } from "@mui/material";
import { StyledButton } from "../../components/UI/header/styles";

export const Hero = () => {
  const { dimensions } = useAppContext();
  return (
    <CustomStyledSection full={true} dimensions={dimensions}>
      <img src="images/Ellipse 42.png" className="eclipse42"></img>
      <img src="images/Ellipse 43.png" className="eclipse43"></img>
      <img src="images/greicyhome.png" className="greicyHome"></img>
      <img src="images/logo greicy 1.png" className="logoHome"></img>
      <Grid container sx={{ zIndex: 999 }}>
        <Grid item xs={12} md={5} sx={{ marginLeft: "70px" }}>
          <Typography className="poppins" sx={{ color: "#00296D" }} variant="h3">
            Procurando uma <span style={{ color: "#89BBE0" }}>Psicóloga</span> de confiança?
          </Typography>
          <Grid item xs={12} md={8}>
            <Typography className="source-sans-3" variant="subtitle1" sx={{ m: 1 }}>
              Psicóloga, Professora, Palestrante e Autora.
              Especialista em Terapias Cognitivas, Neuropsicologica, Gestão de Pessoas e Coach, e Educação a Distância.
            </Typography>
            <Typography className="source-sans-3" variant="subtitle1" sx={{ m: 1 }}>
              Atendimentos <span className="source-sans-3-400" style={{ color: "#44C6E9" }}>on-line</span> e presencial dentro da abordagem Terapia Cognitiva Comportamental a Adolescentes, Adultos, Idosos e Casais.
            </Typography>
            <Box display="flex" alignItems={'center'} justifyContent={'space-between'} sx={{ marginTop: '8px' }}>
              <StyledButton className="poppins" onClick={() => { }} disableRipple>
                Saiba Mais
              </StyledButton>
              <Typography sx={{ color: "#44C6E9" }} className="source-sans-3-400" variant="subtitle1">Dra.Greicy Pais</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </CustomStyledSection >
  );
};
