import { Box, Grid, Typography } from "@mui/material";
import { Section } from "../../components";
import './index.css'

export const WhyTherapy = () => {
  return (
    <Section id="especialidades-section">
      <img src="images/Ellipse 36.png" className="eclipse36"></img>
      <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12} sm={12} sx={{ zIndex: 999 }} marginTop={10}>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
            <Typography className="source-sans-3 title-especialidades">
              Especialidades
            </Typography>
            <Typography className="poppins subtitle-especialidades" variant="h3">
              Porque e quando buscar terapia?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className="source-sans-3 subtitle2-especialidades" variant="subtitle1">
            Assim como cuidamos da nossa saúde física, é importante cuidar da nossa saúde mental e emocional.
            Procurar a ajuda de uma psicóloga pode ser um ato de autocuidado e investimento no seu bem-estar!
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};
