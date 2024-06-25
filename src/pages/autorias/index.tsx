import { Box, Button, Grid, Typography } from "@mui/material";
import { GridContainer, GridItem, Section, Title } from "../../components";
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
        <img
          src={logo}
          style={{ position: "absolute", left: "45%", width: "150px" }}
        />
        <img
          src={sign}
          style={{
            position: "relative",
            left: "45%",
            top: "15%",
            width: "150px",
          }}
        />
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
              <img src={livros} style={{ width: "70%", zIndex: 2 }} />
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
            <img
              src={GreicyModel}
              style={{
                width: "500px",
                height: "600px",
                position: "relative",
                top: "-15%",
                right: "-20%",
              }}
            />
          </GridItem>
        </GridContainer>
        <img
          src={bgWaveProdutos}
          style={{
            position: "relative",
            bottom: "35%",
            left: 0,
            width: "100%",
            height: "200px",
          }}
        />
      </Box>
    </Section>
  );
};
