import { Box, Grid, Typography } from "@mui/material";
import { Section } from "../../components";
import wpp from "../../assets/WhatsApp.png";
import insta from "../../assets/Instagram.png";
import face from "../../assets/Facebook.png";
import email from "../../assets/At sign.png";
export const Contato = () => {
  return (
    <Section id="contato-section">
      <Box
        sx={{
          backgroundColor: "#24496A",
          width: "100%",
          height: "100%",
          paddingBottom: "20px",
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
              fontWeight: "700 !important",
              marginBottom: "20px",
            }}
          >
            Contato e Localização
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={10} sx={{ display: "flex", justifyContent: "center" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              style={{
                border: 0,
                width: "80%",
                height: "400px",
                borderRadius: "15px",
                boxShadow: "#44C6E9 -4px -4px 4px",
              }}
              allowFullScreen={true}
              aria-hidden="false"
            />
          </Grid>
          <Grid item xs={2}>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  marginRight: "200px",
                }}
              >
                <img src={wpp} width={"40"} />
                <Typography sx={{ color: "#fff" }}>(41) 99986-7867</Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  marginRight: "200px",
                  marginTop: "10px",
                }}
              >
                <img src={insta} width={"40"} />
                <Typography sx={{ color: "#fff" }}>(41) 99986-7867</Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  marginRight: "200px",
                  marginTop: "10px",
                }}
              >
                <img src={face} width={"40"} />
                <Typography sx={{ color: "#fff" }}>(41) 99986-7867</Typography>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  marginRight: "200px",
                  marginTop: "10px",
                }}
              >
                <img src={email} width={"40"} />
                <Typography sx={{ color: "#fff" }}>(41) 99986-7867</Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};
