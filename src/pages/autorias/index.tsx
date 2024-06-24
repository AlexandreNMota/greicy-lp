import { Box, Grid, Typography } from "@mui/material";
import { Section } from "../../components";
import logo from "../../assets/produtos-logo.png";
import bgWave from "../../assets/Our_People.png";
import sign from "../../assets/sign.png";
import GreicyModel from "../../assets/greicy-top-model.png";
import bgWaveProdutos from "../../assets/bg-produtos-wave.png";
export const Autorias = () => {
  return (
    <Section id="productos-section">
      <Box
        sx={{
          backgroundImage: `url(${bgWave})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "150vh",
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
              fontSize: "1rem",
              fontWeight: "400 !important",
              color: "#44C6E9",
            }}
          >
            Produtos
          </Typography>
        </Box>
        {/* <Box
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
        </Box> */}
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              className="poppins"
              sx={{
                color: "#fff",
                fontSize: "32px",
                fontWeight: "700 !important",
              }}
            >
              Autorias
            </Typography>
            <Typography
              sx={{
                color: "#F5F5F5",
                fontSize: "16px",
                fontWeight: "100 !important",
                textAlign: "justify",
              }}
            >
              A ideia em criar esses baralhos psicoterapêuticos foi para que o
              coconhecimento relativo ao tema proposto em cada temática fosse
              adquirido de forma dinâmica e flexível. São ferramentas incríveis
              que vão mudar sua forma de pensar a respeito de tais temas. Eles
              tem formato de livro em caixinha, contendo sumário, manual de
              instruções de uso em QR Code, e muita psicoeducação com
              estratégias de ação. Podem ser utilizados individualmente ou em
              set terapêutico.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <img
              src={GreicyModel}
              style={{ width: "800px", height: "800px" }}
            />
          </Grid>
        </Grid>
        <img
          src={bgWaveProdutos}
          style={{
            position: "absolute",
            bottom: -3210,
            left: 0,
            width: "100%",
            height: "300px",
          }}
        />
      </Box>
    </Section>
  );
};
