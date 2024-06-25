import { Typography } from "@mui/material";
import { BigText, GridContainer, GridItem, Section } from "../../components";
import desktop from "../../assets/Desktop.png";
import { StyledButton } from "../../components/UI/header/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export const WhyItWorks = () => {
  return (
    <Section id="como-funciona-section">
      <GridContainer hasMarginTop={true}>
        <GridItem directionFlex="column" xs={6}>
          <BigText text="Como funciona?" />
          <Typography
            className="poppins"
            sx={{ color: "#2977D5", fontWeight: "bold", fontSize: "28px" }}
          >
            1. Entre em contato pelo Whatsapp
          </Typography>
          <Typography
            className="poppins"
            sx={{ color: "#666666", fontSize: "14px", textAlign: "center" }}
          >
            Escolha o melhor dia
          </Typography>
          <Typography
            className="poppins"
            sx={{ color: "#2977D5", fontWeight: "bold", fontSize: "28px" }}
          >
            2. Realize o pagamento da sessão
          </Typography>
          <Typography
            className="poppins"
            sx={{ color: "#666666", fontSize: "14px", textAlign: "center" }}
          >
            O pagamento pode ser realizado via PagSeguro ou Mercado Pago
            utilizando cartão de crédito, débito ou via PIX
          </Typography>
          <Typography
            className="poppins"
            sx={{ color: "#2977D5", fontWeight: "bold", fontSize: "28px" }}
          >
            3. Pronto! Sua sessão foi agendada!
          </Typography>
          <Typography
            className="poppins"
            sx={{ color: "#666666", fontSize: "14px", textAlign: "center" }}
          >
            No momento da consulta, garanta que está com um bom sinal de
            internet, então basta acessar o link que estará em seu Whatsapp. O
            tempo da sessão é de 40 a 60 minutos.
          </Typography>
          <StyledButton
            className="poppins"
            onClick={() => {}}
            startIcon={<WhatsAppIcon />}
            disableRipple
            sx={{ marginTop: "50px" }}
          >
            Agendar Consulta
          </StyledButton>
        </GridItem>
        <GridItem directionFlex="row" xs={6}>
          <img src={desktop} width="600" height="391" />
        </GridItem>
      </GridContainer>
    </Section>
  );
};
