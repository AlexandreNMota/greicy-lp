import { BigText } from "../../global";
import { StyledButton } from "../../UI/header/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { StepTitle } from "../step-title";
import { StepContent } from "../step-content";
import React from "react";

type Etapa = {
  title: string;
  content: string;
};
export const FirstGrid = () => {
  const etapas: Etapa[] = [
    {
      title: "1. Entre em contato pelo Whatsapp",
      content: "Escolha o melhor dia",
    },
    {
      title: "2. Realize o pagamento da sessão",
      content:
        "O pagamento pode ser realizado via PagSeguro ou Mercado Pago utilizando cartão de crédito, débito ou via PIX",
    },
    {
      title: "3. Pronto! Sua sessão foi agendada!",
      content:
        "No momento da consulta, garanta que está com um bom sinal de internet, então basta acessar o link que estará em seu Whatsapp. O tempo da sessão é de 40 a 60 minutos.",
    },
  ];
  return (
    <>
      <BigText text="Como funciona?" />
      {etapas.map((item, index) => (
        <React.Fragment key={index}>
          <StepTitle text={item.title} />
          <StepContent text={item.content} />
        </React.Fragment>
      ))}
      <StyledButton
        className="poppins"
        onClick={() => {}}
        startIcon={<WhatsAppIcon />}
        disableRipple
        sx={{ marginTop: "50px" }}
      >
        Agendar Consulta
      </StyledButton>
    </>
  );
};
