import { Box, Grid, IconButton, Typography } from "@mui/material";
import { BigText, DoencaCard, Section, Title } from "../../components";
import "./index.css";
import DoencaProvider from "../../context/doenca-cards";
import { useState } from "react";
import { StyledButton } from "../../components/UI/header/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { cards } from "../../constantes/doencaCards";
import { useSwipeable } from "react-swipeable";

export const WhyTherapy = () => {
  const [step, setStep] = useState(1);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (step === 1) setStep(2);
    },
    onSwipedRight: () => {
      if (step === 2) setStep(1);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const renderCards = () => {
    const limitedCards = step === 1 ? cards.slice(0, 4) : cards.slice(4);
    return limitedCards.map((card, id) => (
      <Grid item xs={6} key={id} sx={{ zIndex: 2 }}>
        <DoencaProvider>
          <DoencaCard
            title={card.title}
            content={card.content}
            video={card.video}
            thumb={card.thumb}
          />
        </DoencaProvider>
      </Grid>
    ));
  };

  return (
    <Section id="especialidades-section">
      <img
        src="images/Ellipse 36.png"
        className="eclipse36"
        alt="Ellipse"
      ></img>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} sm={12} sx={{ zIndex: 999 }} marginTop={10}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Title title="Especialidades" />
            <BigText text="Porque e quando buscar terapia?" marginTop={2} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} marginTop={2}>
          <Typography
            className="source-sans-3 subtitle2-especialidades"
            variant="subtitle1"
          >
            Assim como cuidamos da nossa saúde física, é importante cuidar da
            nossa saúde mental e emocional. Procurar a ajuda de uma psicóloga
            pode ser um ato de autocuidado e investimento no seu bem-estar!
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} {...handlers}>
        <Grid item xs={0.5} sx={{ display: "flex", alignItems: "center" }}>
          {step === 2 && (
            <IconButton onClick={() => setStep(step - 1)}>
              <ChevronLeftIcon sx={{ color: "#00296d" }} />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={11} sx={{ marginTop: "20px" }}>
          <Grid container spacing={2}>
            {renderCards()}
          </Grid>
        </Grid>
        <Grid item xs={0.5} sx={{ display: "flex", alignItems: "center" }}>
          {step === 1 && (
            <IconButton onClick={() => setStep(step + 1)}>
              <ChevronRightIcon sx={{ color: "#00296d" }} />
            </IconButton>
          )}
        </Grid>
      </Grid>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledButton
          className="poppins"
          onClick={() => {}}
          startIcon={<WhatsAppIcon />}
          disableRipple
          sx={{ marginTop: "50px" }}
        >
          Agendar Consulta
        </StyledButton>
      </div>
      <img
        src="images/Ellipse 36.png"
        className="eclipse36"
        style={{
          transform: "rotate(175deg)",
          position: "absolute",
          top: "220vh",
          zIndex: 1,
        }}
        alt="Ellipse"
      ></img>
    </Section>
  );
};
