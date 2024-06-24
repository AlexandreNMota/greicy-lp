import { Box, Grid, Typography } from "@mui/material";
import { Section } from "../../components";
import imagem from "../../assets/Our_People.png";
import wave from "../../assets/Rectangle 699.png";
import logo from "../../assets/produtos-logo.png";
import sign from "../../assets/sign.png";
export const Autorias = () => {
  return (
    <Section id="autorias-section">
      <Box
        sx={{
          backgroundImage: `url(${imagem}), url(${wave})`,
          backgroundPosition: "center center, left bottom",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            className="source-sans-3"
            sx={{
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "34px",
              width: "92px",
              height: "16px",
              color: "#44C6E9",
            }}
          >
            Produtos
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <Box
            sx={{
              width: "249px",
              height: "186px",
              background: `url("${logo}")`,
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              borderRadius: "95px",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "280px",
              height: "71px",
              background: `url("${sign}")`,
            }}
          ></Box>
        </Box>
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              className="poppins"
              sx={{ color: "#fff", fontSize: "32px", fontWeight: "bold" }}
            >
              Autorias
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: "normal",
                textAlign: "justifysy",
              }}
            >
              Bem-vindo à sua jornada de autodescoberta e crescimento pessoal!
              Você está prestes a descobrir uma ferramenta revolucionária que
              vai transformar a maneira como você lida com desafios pessoais.
              Uma caixinha de ferramentas com 100 cartas contendo técnicas,
              exercícios e reflexões para você aprender a lidar com a sua
              ansiedade e/ou trabalhar com os seus pacientes
            </Typography>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </Section>
  );
};
