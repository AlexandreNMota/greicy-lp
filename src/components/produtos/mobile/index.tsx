import { BigText, ImageContainer, Title } from "../../global";
import greicyMobileProdutos from "../../../assets/greicy-mobile-produtos.png";
import { produtosDescription } from "../../../constantes/description";
import { CustomText } from "../../about";
import livros from "../../../assets/livros.png";
import bgWaveProdutos from "../../../assets/bg-produtos-wave.png";
import { Typography } from "@mui/material";
export const ProdutosMobile = () => {
  return (
    <>
      <Title title="Produtos" sx={{ width: "100%", textAlign: "initial" }} />
      <BigText text="Autorias" branco={true} />
      <ImageContainer src={greicyMobileProdutos} classe="greicy-model-mobile" />
      <Typography
        className="product-desc-refactor"
        sx={{
          maxWidth: "80% !important",
          margin: "auto",
          textAlign: "justify",
          fontSize: {
            xs: "1.2rem !important",
          },
        }}
      >
        {produtosDescription}
      </Typography>
      <ImageContainer src={livros} classe="livros-produtos" />
      <ImageContainer src={bgWaveProdutos} classe="bg-wave-produtos" />
    </>
  );
};
