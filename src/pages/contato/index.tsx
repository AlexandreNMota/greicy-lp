import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import { Section } from "../../components";
import wpp from "../../assets/WhatsApp.png";
import insta from "../../assets/Instagram.png";
import face from "../../assets/Facebook.png";
import email from "../../assets/At sign.png";

import letter from "../../assets/Vector.png";
export const Contato = () => {
  return (
    <Section id="contato-section">
      <Box
        sx={{
          backgroundColor: "#24496A",
          width: "100%",
          height: "100%",
        }}
      >
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
              color: "#fff",
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            Contato
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ paddingBottom: "20px !important" }}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingLeft: "10% !important",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              style={{
                border: 0,
                width: "90%",
                height: "200px",
                borderRadius: "15px",
                boxShadow: "#44C6E9 -4px -4px 4px",
              }}
              allowFullScreen={true}
              aria-hidden="false"
            />
            <Box
              sx={{
                paddingTop: "20px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Typography className="source-sans-3" sx={{ color: "#fff" }}>
                Rua Exemplo, 123, Bairro das Amostras, Cidade Modelo
              </Typography>
              <Typography className="source-sans-3" sx={{ color: "#fff" }}>
                Estado, CEP 00000-000
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <ul
              style={{
                borderRadius: "15px",
                width: "80%",
                padding: "20px",
                boxShadow: "#44C6E9 -4px -4px 4px",
                height: "100%",
              }}
            >
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <Typography className="poppins" sx={{ color: "#44C6E9" }}>
                  Horário de Funcionamento:
                </Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <Typography className="source-sans-3" sx={{ color: "#fff" }}>
                  Segunda a Sexta: 9h às 18h
                </Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <Typography className="source-sans-3" sx={{ color: "#fff" }}>
                  Sábado: 9h às 14h
                </Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <Typography className="source-sans-3" sx={{ color: "#fff" }}>
                  Domingo: Fechado
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={3}>
            <ul
              style={{
                borderRadius: "15px",
                width: "80%",
                height: "100%",
                padding: "20px",
                boxShadow: "#44C6E9 4px 4px 4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img src={wpp} width={"30"} />
                <Typography
                  className="source-sans-3"
                  sx={{ color: "#fff", marginLeft: "5px" }}
                >
                  (41) 99986-7867
                </Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <img src={letter} width={"30"} />
                <Typography
                  className="source-sans-3"
                  sx={{ color: "#fff", marginLeft: "5px" }}
                >
                  exemplo@empresa.com
                </Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "60%",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  <img src={insta} width={"30"} />
                  <Typography sx={{ color: "#fff", marginLeft: "5px" }}>
                    Instagram
                  </Typography>
                </Box>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "60%",
                  marginTop: "10px",
                }}
              >
                <img src={face} width={"30"} />
                <Typography sx={{ color: "#fff", marginLeft: "5px" }}>
                  Facebook
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Divider sx={{ color: "#44C6E9", backgroundColor: "#44C6E9" }} />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px !important",
          }}
        >
          <Typography className="source-sans-3" sx={{ color: "#fff" }}>
            ©2024 Psicóloga Greicy Pais. Todos os direitos reservados. |
            Desenvolvido por{" "}
            <Link href="https://codecase.com.br/" sx={{ color: "#44C6E9" }}>
              CodeCase
            </Link>
          </Typography>
        </Box>
      </Box>
    </Section>
  );
};
