import { Box, Grid, Link, Typography } from "@mui/material";
import {
  BigText,
  CustomText,
  GridContainer,
  GridItem,
  ImageContainer,
  Section,
  Title,
} from "../../components";
import anjo from "../../assets/greicy-anjo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { StyledButton } from "../../components/UI/header/styles";
import React from "react";
import { sobre } from "../../constantes/sobre";
export const About = () => {
  return (
    <Section id="sobre-section">
      <Title title="Sobre mim" sx={{ width: "100%", textAlign: "center" }} />
      <GridContainer>
        <GridItem directionFlex="column" flexStart={true} xs={6}>
          <ImageContainer src={anjo} classe="anjo" />
          <StyledButton
            className="poppins"
            onClick={() => {}}
            startIcon={<WhatsAppIcon />}
            disableRipple
            sx={{ marginTop: "50px" }}
          >
            Agendar Consulta
          </StyledButton>
        </GridItem>
        <GridItem unflex={true} xs={6} padded={true}>
          <BigText text="Dra Greicy Pais" hasMarginBottom={true} />
          {sobre.map((item, index) => (
            <React.Fragment key={index}>
              <CustomText text={item.texto} />
            </React.Fragment>
          ))}
          <Link sx={{ color: "#44C6E9", cursor: "pointer" }}>
            <Typography className="source-sans-3" sx={{ fontSize: "14px" }}>
              {"Currículo Completo>"}
            </Typography>
          </Link>
        </GridItem>
      </GridContainer>
    </Section>
  );
};
