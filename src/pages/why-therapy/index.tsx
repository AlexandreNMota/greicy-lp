import { Box, Card, Grid, Typography } from "@mui/material";
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
            <Typography className="poppins subtitle-especialidades" variant="h3" marginTop={2}>
              Porque e quando buscar terapia?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} marginTop={2}>
          <Typography className="source-sans-3 subtitle2-especialidades" variant="subtitle1">
            Assim como cuidamos da nossa saúde física, é importante cuidar da nossa saúde mental e emocional.
            Procurar a ajuda de uma psicóloga pode ser um ato de autocuidado e investimento no seu bem-estar!
          </Typography>
        </Grid>
      </Grid>
      <Grid container marginTop={2} sx={{ padding: '40px' }}>
        <Grid item xs={12} sm={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Grid item xs={12} sm={6} margin={2}>
            <Card className="card-especialidades-video">
              <Grid item xs={12} sm={6}>
                <Typography className="poppins card-title-especialidade" variant="h3">Ansiedade</Typography>
                <Typography className="source-sans-3">
                  A ansiedade se manifesta como preocupação excessiva e persistente,
                  acompanhada por sintomas físicos como tensão muscular,
                  irritabilidade, dificuldade para dormir, inquietação,
                  dificuldade de concentração e sensação de aperto no peito.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <video width="306" height="429" controls className="video-especialidade" >
                  <source src="./Videos/video1.mp4" type="video/mp4" />
                </video>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} margin={2}>
            <Card className="card-especialidades-video">
              <Grid item xs={12} sm={6}>
                <Typography className="poppins card-title-especialidade" variant="h3">Ansiedade</Typography>
                <Typography className="source-sans-3">
                  A ansiedade se manifesta como preocupação excessiva e persistente,
                  acompanhada por sintomas físicos como tensão muscular,
                  irritabilidade, dificuldade para dormir, inquietação,
                  dificuldade de concentração e sensação de aperto no peito.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <video width="306" height="429" controls className="video-especialidade">
                  <source src="./Videos/video1.mp4" type="video/mp4" />
                </video>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};
