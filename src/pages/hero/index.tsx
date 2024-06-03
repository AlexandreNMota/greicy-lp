import useAppContext from "../../context/app/useAppContext";
import { CustomStyledSection } from "./styles";
import './index.css'
import { Box, Grid, Typography } from "@mui/material";
import { StyledButton } from "../../components/UI/header/styles";

export const Hero = () => {
  const { dimensions, isMobile } = useAppContext();

  return (
    <CustomStyledSection full={true} dimensions={dimensions} id="home-section">
      {
        !isMobile && (
          <div>
            <img src="images/Ellipse 42.png" className="eclipse42"></img>
            <img src="images/Ellipse 43.png" className="eclipse43"></img>
            <img src="images/greicyhome.png" className="greicyHome"></img>
            <div className="div_homelogo">
              <img src="images/logo greicy 1.png" className="logoHome"></img>
              <Typography className="greicy_name">Greicy Pais</Typography>
            </div>
          </div>
        )
      }

      <Grid sx={{ padding: '20px' }} container className="containerHome">
        {
          isMobile && (
            <Grid xs={12} sm={6} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <img src="images/Ellipse 48.png" className="eclipse48-mobile"></img>
              <img src="images/Ellipse 50.png" className="eclipse49-mobile"></img>
              <img src="images/greicy_home.png" className="greicyHome-mobile"></img>
            </Grid>
          )
        }
        <Grid item xs={12} sm={5} md={5} sx={{ marginLeft: !isMobile ? "70px" : '0' }}>
          <Typography className="poppins titleHome" sx={{ color: "#00296D" }} variant="h3">
            Procurando uma <span style={{ color: "#89BBE0" }}>Psicóloga</span> de confiança?
          </Typography>
          <Grid item xs={12} sm={8} md={8}>
            {
              !isMobile && (
                <Typography className="source-sans-3 subtitleHome" variant="subtitle1" sx={{ m: 1 }}>
                  Psicóloga, Professora, Palestrante e Autora.
                  Especialista em Terapias Cognitivas, Neuropsicologica, Gestão de Pessoas e Coach, e Educação a Distância.
                </Typography>
              )
            }

            <Typography className="source-sans-3 subtitleHome" variant="subtitle1" sx={{ m: 1 }}>
              Atendimentos <span className="source-sans-3-400" style={{ color: "#44C6E9" }}>on-line</span> e presencial dentro da abordagem Terapia Cognitiva Comportamental a Adolescentes, Adultos, Idosos e Casais.
            </Typography>
            <Box display="flex" alignItems={'center'} justifyContent={'space-between'} sx={{ marginTop: '8px' }}>
              <StyledButton className="poppins" onClick={() => { }} disableRipple>
                Saiba Mais
              </StyledButton>
              <Typography sx={{ color: "#44C6E9" }} className="source-sans-3-400 subtitleHome" variant="subtitle1">Dra.Greicy Pais</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </CustomStyledSection >
  );
};
