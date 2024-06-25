import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Section, Title } from "../../components";
import Carousel from "react-material-ui-carousel";

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
          Depoimentos
        </Typography>
      </Box>
      <Carousel sx={{ width: "85%", margin: "auto", marginTop: "50px" }}>
        {tutorialSteps.map((item, i) => (
          <Stack key={i} direction="row" spacing={4}>
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
        ))}
      </Carousel>
    </Section>
  );
};
