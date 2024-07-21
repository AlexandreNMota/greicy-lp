import { Box } from "@mui/material";
import {
  BigText,
  CustomText,
  GridContainer,
  GridItem,
  ImageContainer,
  ProdutosDesktop,
  ProdutosMobile,
  SaibaMaisButton,
  Section,
  Title,
} from "../../components";
import logo from "../../assets/produtos-logo.png";
import bgWave from "../../assets/Our_People.png";
import sign from "../../assets/sign.png";
import GreicyModel from "../../assets/greicy-top-model.png";
import bgWaveProdutos from "../../assets/bg-produtos-wave.png";
import livros from "../../assets/livros.png";
import greicyMobileProdutos from "../../assets/greicy-mobile-produtos.png";
import { produtosDescription } from "../../constantes/description";
import "./autorias.css";
import useAppContext from "../../context/app/useAppContext";
export const Autorias = () => {
  const { isMobile } = useAppContext();
  return (
    <Section id="productos-section">
      <Box
        sx={{
          backgroundImage: `url(${bgWave})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: !isMobile ? "100vh" : "auto",
        }}
      >
        {!isMobile && <ProdutosDesktop />}
        {isMobile && <ProdutosMobile />}
      </Box>
    </Section>
  );
};
