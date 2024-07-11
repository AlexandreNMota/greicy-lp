import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IPerguntaProps } from "./types";
import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Certifique-se de importar corretamente
import "./perguntas.css";

export const Pergunta: FC<IPerguntaProps> = ({
  item,
  i,
  expanded,
  setExpanded,
  ...props
}: IPerguntaProps) => {
  const isOpen = i === expanded;
  return (
    <Box
      {...props}
      sx={{
        width: "100%",
        margin: "auto",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <Accordion
        className="accordion-custom"
        expanded={isOpen}
        onChange={() => setExpanded(isOpen ? false : i)} // Certifique-se de alternar o estado expandido
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#2976D2" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="accordion-summary-custom"
        >
          {item.title}
        </AccordionSummary>
        <AnimatePresence initial={false}>
          {isOpen && ( // Condicional para renderizar o conteúdo apenas quando expandido
            <AccordionDetails className="accordion-details-custom">
              <motion.section
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto", scale: 1.03 },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {item.resposta}
              </motion.section>
            </AccordionDetails>
          )}
        </AnimatePresence>
      </Accordion>
    </Box>
  );
};
