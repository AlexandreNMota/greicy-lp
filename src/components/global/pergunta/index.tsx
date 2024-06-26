import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IPerguntaProps } from "./types";
import { FC } from "react";
import "./perguntas.css";
export const Pergunta: FC<IPerguntaProps> = ({
  item,
  ...props
}: IPerguntaProps) => {
  return (
    <Box {...props} sx={{ width: "80%", margin: "auto" }}>
      <Accordion className="accordion-custom">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#2976D2" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="accordion-summary-custom"
        >
          {item.title}
        </AccordionSummary>
        <AccordionDetails className="accordion-details-custom">
          {item.resposta}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
