import { BigText } from "../../global";
import { MotionButton } from "../../UI/header/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { StepTitle } from "../step-title";
import { StepContent } from "../step-content";

import { etapas } from "../../../constantes/etapas";

export const FirstGrid = () => {
  return (
    <>
      <BigText text="Como funciona?" id="como-funciona" />
      {etapas.map((item, index) => (
        <div key={index} className="etapa-content">
          <div className="title-div">
            <StepTitle text={item.title} />
          </div>
          <div className="step-content-text-div">
            <StepContent text={item.content} />
          </div>
        </div>
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
