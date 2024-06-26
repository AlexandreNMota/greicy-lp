import { Box, Button, Typography } from "@mui/material";
import {
  BigText,
  CustomText,
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
import { produtosDescription } from "../../constantes/description";
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
        <Title title="Produtos" sx={{ width: "100%", textAlign: "center" }} />
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
              <BigText
                text="Autorias"
                branco={true}
                hasMarginBottom={true}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              />
              <CustomText text={produtosDescription} classe="product-desc" />
            </Box>
            <ImageContainer src={livros} classe="livros-produtos" />
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
