import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import { BigText, Section, Title } from "../../components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { perguntasFrequentes } from "../../constantes/perguntasFrequentes";

export const PerguntasFrequentes = () => {
  return (
    <Section id="duvidas-section">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Title title="Dúvidas" />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BigText text="Perguntas Frequentes" hasMarginBottom={true} />
      </Box>
      {perguntasFrequentes.map((item, i) => (
        <Box key={i} sx={{ width: "80%", margin: "auto" }}>
          <Accordion
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#2976D2" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ color: "#2976D2", fontWeight: "700 !important" }}
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                color: "#00296D",
                fontWeight: "400 !important",
                fontSize: "16px",
              }}
            >
              {item.resposta}
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Section>
  );
};
