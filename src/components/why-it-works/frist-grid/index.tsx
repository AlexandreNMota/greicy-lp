import { BigText } from "../../global";
import { MotionButton, StyledButton } from "../../UI/header/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { StepTitle } from "../step-title";
import { StepContent } from "../step-content";
import React from "react";
import { etapas } from "../../../constantes/etapas";

export const FirstGrid = () => {
  return (
    <>
      <BigText text="Como funciona?" />
      {etapas.map((item, index) => (
        <React.Fragment key={index}>
          <StepTitle text={item.title} />
          <StepContent text={item.content} />
        </React.Fragment>
      ))}

      <MotionButton
        className="poppins"
        onClick={() => {}}
        startIcon={<WhatsAppIcon />}
        disableRipple
        sx={{ marginTop: "50px" }}
        whileTap={{ scale: 0.85 }}
      >
        Agendar Consulta
      </MotionButton>
    </>
  );
};
