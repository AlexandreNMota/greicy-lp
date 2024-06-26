import { Box } from "@mui/material";
import {
  BigText,
  GridContainer,
  GridItem,
  ImageContainer,
  Title,
} from "../../global";
import { CustomText } from "../../about";
import { SaibaMaisButton } from "../saiba-mais-button";
import logo from "../../../assets/produtos-logo.png";
import sign from "../../../assets/sign.png";
import bgWaveProdutos from "../../../assets/bg-produtos-wave.png";
import livros from "../../../assets/livros.png";
import GreicyModel from "../../../assets/greicy-top-model.png";
import { produtosDescription } from "../../../constantes/description";
export const ProdutosDesktop = () => {
  return (
    <>
      <Title title="Produtos" sx={{ width: "100%", textAlign: "center" }} />
      <ImageContainer src={logo} classe="logo-produtos" />
      <ImageContainer src={sign} classe="sign-produtos" />
      <GridContainer>
        <GridItem xs={6} flexAround={true} directionFlex="column">
          <Box className="box-grid-1">
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
            <SaibaMaisButton />
          </Box>
        </GridItem>
        <GridItem xs={6} flexStart={true}>
          <ImageContainer src={GreicyModel} classe="greicy-model-produtos" />
        </GridItem>
      </GridContainer>
      <ImageContainer src={bgWaveProdutos} classe="bg-wave-produtos" />
    </>
  );
};
