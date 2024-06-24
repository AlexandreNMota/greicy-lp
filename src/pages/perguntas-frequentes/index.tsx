import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Section } from "../../components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const perguntasFrequentes = [
  {
    title: "Como  saber quando preciso iniciar um processo terapêutico?",
    resposta:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames. Convallis ornare praesent mollis at habitasse morbi eu ridiculus, tristique proin venenatis dictum nisl volutpat interdum, eleifend velit erat mi penatibus nibh curabitur. Vestibulum augue condimentum luctus auctor nullam imperdiet magna, mattis scelerisque erat odio aliquam risus nam morbi, accumsan dapibus montes facilisis suspendisse rhoncus.",
  },
  {
    title: "Quais os benefícios da Psicoterapia?",
    resposta:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames. Convallis ornare praesent mollis at habitasse morbi eu ridiculus, tristique proin venenatis dictum nisl volutpat interdum, eleifend velit erat mi penatibus nibh curabitur. Vestibulum augue condimentum luctus auctor nullam imperdiet magna, mattis scelerisque erat odio aliquam risus nam morbi, accumsan dapibus montes facilisis suspendisse rhoncus.",
  },
  {
    title: "O Psicólogo irá resolver meu problema?",
    resposta:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames. Convallis ornare praesent mollis at habitasse morbi eu ridiculus, tristique proin venenatis dictum nisl volutpat interdum, eleifend velit erat mi penatibus nibh curabitur. Vestibulum augue condimentum luctus auctor nullam imperdiet magna, mattis scelerisque erat odio aliquam risus nam morbi, accumsan dapibus montes facilisis suspendisse rhoncus.",
  },
  {
    title: "A terapia online traz bons resultados?",
    resposta:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames. Convallis ornare praesent mollis at habitasse morbi eu ridiculus, tristique proin venenatis dictum nisl volutpat interdum, eleifend velit erat mi penatibus nibh curabitur. Vestibulum augue condimentum luctus auctor nullam imperdiet magna, mattis scelerisque erat odio aliquam risus nam morbi, accumsan dapibus montes facilisis suspendisse rhoncus.",
  },
  {
    title: "Quantas sessões irei precisar?",
    resposta:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames. Convallis ornare praesent mollis at habitasse morbi eu ridiculus, tristique proin venenatis dictum nisl volutpat interdum, eleifend velit erat mi penatibus nibh curabitur. Vestibulum augue condimentum luctus auctor nullam imperdiet magna, mattis scelerisque erat odio aliquam risus nam morbi, accumsan dapibus montes facilisis suspendisse rhoncus.",
  },
  {
    title: "A ansiedade já faz parte da minha vida, isso tem jeito?",
    resposta:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames. Convallis ornare praesent mollis at habitasse morbi eu ridiculus, tristique proin venenatis dictum nisl volutpat interdum, eleifend velit erat mi penatibus nibh curabitur. Vestibulum augue condimentum luctus auctor nullam imperdiet magna, mattis scelerisque erat odio aliquam risus nam morbi, accumsan dapibus montes facilisis suspendisse rhoncus.",
  },
  {
    title: "Minha vida não faz mais sentido, porque devo fazer psicoterapia?",
    resposta:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames. Convallis ornare praesent mollis at habitasse morbi eu ridiculus, tristique proin venenatis dictum nisl volutpat interdum, eleifend velit erat mi penatibus nibh curabitur. Vestibulum augue condimentum luctus auctor nullam imperdiet magna, mattis scelerisque erat odio aliquam risus nam morbi, accumsan dapibus montes facilisis suspendisse rhoncus.",
  },
];
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
        <Typography
          className="source-sans-3"
          sx={{ color: "#44C6E9", fontSize: "1rem", fontWeight: "bold" }}
        >
          Dúvidas
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className="poppins"
          sx={{
            textAlign: "initial",
            color: "#00296D",
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Perguntas Frequentes
        </Typography>
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
