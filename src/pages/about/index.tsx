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
import teste from "../../../public/images/teste.svg";
import useAppContext from "../../context/app/useAppContext";
export const About = () => {
  const { isMobile } = useAppContext();
  return (
    <Section id="sobre-section">
      {!isMobile && (
        <Title title="Sobre mim" sx={{ width: "100%", textAlign: "center" }} />
      )}

      <GridContainer>
        <GridItem directionFlex="column" flexStart={true} xs={12} md={6}>
          {!isMobile && <ImageContainer src={anjo} classe="anjo" />}

          {isMobile && <img src={teste} width="100%" />}
          {isMobile && (
            <Title
              title="Sobre mim"
              sx={{ width: "100%", textAlign: "left", marginLeft: "20px" }}
            />
          )}
          {!isMobile && (
            <StyledButton
              className="poppins"
              onClick={() => {}}
              startIcon={<WhatsAppIcon />}
              disableRipple
              sx={{ marginTop: "50px" }}
            >
              Agendar Consulta
            </StyledButton>
          )}
        </GridItem>
        <GridItem
          unflex={true}
          xs={12}
          md={6}
          padded={!isMobile}
          customClass="is-about"
        >
          <BigText text="Dra Greicy Pais" hasMarginBottom={true} />
          {sobre.map((item, index) => (
            <React.Fragment key={index}>
              {/* <CustomText text={item.texto} classe="sobre-a-greicy" /> */}
              <Typography className="source-sans-3">{item.texto}</Typography>
            </React.Fragment>
          ))}
          {!isMobile && (
            <Link sx={{ color: "#44C6E9", cursor: "pointer" }}>
              <Typography className="source-sans-3" sx={{ fontSize: "14px" }}>
                {"Currículo Completo>"}
              </Typography>
            </Link>
          )}
        </GridItem>
      </GridContainer>
    </Section>
  );
};
