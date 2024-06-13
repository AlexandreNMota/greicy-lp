import { Box, Card, Grid, Typography } from "@mui/material";
import { DoencaCard, Section } from "../../components";
import "./index.css";
import { IDoencaCard } from "../../components/UI/whyTherapy/doenca-card/types";
import DoencaProvider from "../../context/doenca-cards";
import greicyImagem from "../../assets/Rectangle 705.png";
import React from "react";
import { StyledButton } from "../../components/UI/header/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export const WhyTherapy = () => {
  const cards: IDoencaCard[] = [
    {
      title: "Ansiedade",
      content:
        "A ansiedade se manifesta como preocupação excessiva e persistente, acompanhada por sintomas físicos como tensão muscular, irritabilidade, dificuldade para dormir, inquietação, dificuldade de concentração e sensação de aperto no peito.",
      video: "./Videos/video1.mp4",
      thumb: greicyImagem,
    },
    {
      title: "Depressão",
      content:
        "A depressão é caracterizada por uma tristeza persistente e a perda de interesse em atividades que costumavam trazer prazer. Outros sintomas incluem alterações no sono e apetite, fadiga, sentimentos de inutilidade ou culpa, dificuldade de concentração e pensamentos suicidas.",
      video: "./Videos/video1.mp4",
      thumb: greicyImagem,
    },
    {
      title: "Transtorno Bipolar",
      content:
        "O transtorno bipolar envolve mudanças extremas de humor, que vão desde episódios de mania, caracterizados por alta energia, euforia e comportamento impulsivo, até episódios de hipomania, marcados por tristeza profunda, desesperança e perda de interesse nas atividades.",
      video: "./Videos/video1.mp4",
      thumb: greicyImagem,
    },
    {
      title: "TOC",
      content:
        "O Transtorno Obsessivo Compulsivo (TOC) é caracterizado por pensamentos intrusivos e recorrentes (obsessões) que levam a comportamentos repetitivos e ritualizados (compulsões) realizados para aliviar a ansiedade associada aos pensamentos obsessivos. Exemplos incluem lavar as mãos repetidamente, verificar coisas repetidamente ou contar compulsivamente.",
      video: "./Videos/video1.mp4",
      thumb: greicyImagem,
    },
    {
      title: "Síndrome do Pânico",
      content:
        "A síndrome do pânico é marcada por ataques de pânico repentinos e intensos, acompanhados por sintomas físicos como batimentos cardíacos acelerados, sudorese, tremores, falta de ar, sensação de asfixia, tontura e medo intenso de morrer ou perder o controle.",
      video: "./Videos/video1.mp4",
      thumb: greicyImagem,
    },
    {
      title: "Transtorno de Personalidade Borderline",
      content:
        "É caracterizado por mudanças rápidas de humor, medo de ser abandonado pelos amigos ou parceiro, relacionamentos instáveis e comportamentos impulsivos.",
      video: "./Videos/video1.mp4",
      thumb: greicyImagem,
    },
    {
      title: "TDAH",
      content:
        "O transtorno do déficit de atenção com hiperatividade (TDAH) é um transtorno neurobiológico caracterizado pela combinação de sintomas de desatenção, hiperatividade (inquietude motora) e impulsividade. O TDAH aparece na infância e, na maioria dos casos, acompanha o indivíduo por toda a vida. Em muitos casos só é diagnosticado na vida adulta.  O tratamento precoce é essencial para que o paciente consiga ter uma vida saudável e produtiva, sendo possível realiza-lo mesmo que tardiamente.",
      video: "./Videos/video1.mp4",
      thumb: greicyImagem,
    },
    {
      title: "Narcisismo",
      content:
        "O narcisismo é um transtorno psicológico caracterizado por uma supervalorização de si próprio, necessidade de reconhecimento e desvalorização dos demais. normalmente tem início nas primeiras etapas da vida adulta.",
      video: "./Videos/video1.mp4",
      thumb: greicyImagem,
    },
  ];
  return (
    <Section id="especialidades-section">
      <img src="images/Ellipse 36.png" className="eclipse36"></img>
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
            <Typography className="source-sans-3 title-especialidades">
              Especialidades
            </Typography>
            <Typography
              className="poppins subtitle-especialidades"
              variant="h3"
              marginTop={2}
            >
              Porque e quando buscar terapia?
            </Typography>
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
      <Grid container spacing={2}>
        {cards.map((card, id) => (
          <React.Fragment key={id}>
            <Grid item xs={0.5}></Grid>
            <Grid item xs={5} sx={{ zIndex: 2 }}>
              <DoencaProvider>
                <DoencaCard
                  title={card.title}
                  content={card.content}
                  video={card.video}
                  thumb={card.thumb}
                />
              </DoencaProvider>
            </Grid>
            <Grid item xs={0.5}></Grid>
          </React.Fragment>
        ))}
      </Grid>
      <img
        src="images/Ellipse 36.png"
        className="eclipse36"
        style={{
          transform: "rotate(175deg)",
          position: "absolute",
          top: "226vh",
          zIndex: 1,
        }}
      ></img>
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
    </Section>
  );
};
