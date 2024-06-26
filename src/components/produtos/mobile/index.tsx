import { BigText, ImageContainer, Title } from "../../global";
import greicyMobileProdutos from "../../../assets/greicy-mobile-produtos.png";
import { produtosDescription } from "../../../constantes/description";
import { CustomText } from "../../about";
import livros from "../../../assets/livros.png";
import bgWaveProdutos from "../../../assets/bg-produtos-wave.png";
import { Box } from "@mui/material";
export const ProdutosMobile = () => {
  return (
    <>
      <Title title="Produtos" sx={{ width: "100%", textAlign: "initial" }} />
      <BigText text="Autorias" branco={true} />
      <ImageContainer src={greicyMobileProdutos} classe="greicy-model-mobile" />
      <CustomText
        text={produtosDescription}
        classe="product-desc"
        sx={{ maxWidth: "80% !important", margin: "auto" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <ImageContainer src={livros} classe="livros-produtos" />
      </Box>
      <ImageContainer src={bgWaveProdutos} classe="bg-wave-produtos" />
    </>
  );
};
