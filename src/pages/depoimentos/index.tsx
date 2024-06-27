import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { BigText, Section, Title } from "../../components";
import Carousel from "react-material-ui-carousel";
import { motion, AnimatePresence } from "framer-motion";

const tutorialSteps = [
  {
    step: [
      {
        nome: "Matias Gomez",
        stars: 4,
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
      },
      {
        nome: "Maria Paz",
        stars: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
      },
      {
        nome: "Silvia Rios",
        stars: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
      },
    ],
  },
  {
    step: [
      {
        nome: "Matias Gomez 2",
        stars: 4,
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
      },
      {
        nome: "Maria Paz 2",
        stars: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
      },
      {
        nome: "Silvia Rios 2",
        stars: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.",
      },
    ],
  },
];

export const Depoimentos = () => {
  return (
    <Section id="section-depoimentos">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title title="Meus Clientes" />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BigText text="Depoimentos" hasMarginBottom={true} />
      </Box>
      <Carousel
        sx={{ width: "85%", margin: "auto", marginTop: "50px" }}
        animation="slide"
        indicators={true}
        autoPlay={true}
        // navButtonsAlwaysVisible
      >
        {tutorialSteps.map((item, i) => (
          <AnimatePresence key={i}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 5 }}
            >
              <Stack direction="row" spacing={4}>
                {item.step.map((subItem, index) => (
                  <Card key={index}>
                    <CardActionArea>
                      <Typography
                        className="source-sans-3"
                        sx={{
                          textAlign: "initial",
                          color: "#000",
                          fontSize: "20px",
                          fontWeight: "400 !important",
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-around",
                        }}
                      >
                        {subItem.nome}
                        <Rating
                          size="small"
                          name="read-only"
                          value={subItem.stars}
                          readOnly
                        />
                      </Typography>
                      <CardContent>
                        <Typography
                          className="source-sans-3"
                          sx={{
                            color: "#666666",
                            fontSize: "16px",
                            textAlign: "justify",
                          }}
                        >
                          {subItem.desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </Stack>
            </motion.div>
          </AnimatePresence>
        ))}
      </Carousel>
    </Section>
  );
};
