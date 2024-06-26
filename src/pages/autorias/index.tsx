import { Box, Button, Typography } from "@mui/material";
import {
  GridContainer,
  GridItem,
  ImageContainer,
  Section,
  Title,
} from "../../components";
import logo from "../../assets/produtos-logo.png";
import bgWave from "../../assets/Our_People.png";
import sign from "../../assets/sign.png";
import GreicyModel from "../../assets/greicy-top-model.png";
import bgWaveProdutos from "../../assets/bg-produtos-wave.png";
import livros from "../../assets/livros.png";
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
          height: "100vh",
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
          <Title title="Produtos" />
        </Box>
        <ImageContainer src={logo} classe="logo-produtos" />
        <ImageContainer src={sign} classe="sign-produtos" />
        <GridContainer>
          <GridItem xs={6} flexAround={true} directionFlex="column">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  marginBottom: "50px",
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
              </Box>
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
                adquirido de forma dinâmica e flexível. São ferramentas
                incríveis que vão mudar sua forma de pensar a respeito de tais
                temas. Eles tem formato de livro em caixinha, contendo sumário,
                manual de instruções de uso em QR Code, e muita psicoeducação
                com estratégias de ação. Podem ser utilizados individualmente ou
                em set terapêutico.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <ImageContainer src={livros} classe="livros-produtos" />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  position: "relative",
                  bottom: "50%",
                  zIndex: "2",
                  backgroundColor: "#297A40",
                  boxShadow: "#04531A 0px 4px 4px",
                  borderRadius: "10px",
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                <Typography className="poppins" sx={{ fontSize: "14px" }}>
                  Saiba Mais {">>"}
                </Typography>
              </Button>
            </Box>
          </GridItem>
          <GridItem xs={6} flexStart={true}>
            <ImageContainer src={GreicyModel} classe="greicy-model-produtos" />
          </GridItem>
        </GridContainer>
        <ImageContainer src={bgWaveProdutos} classe="bg-wave-produtos" />
      </Box>
    </Section>
  );
};
