import { Box, Grid, Link, Typography } from "@mui/material";
import { Section } from "../../components";
import anjo from "../../assets/greicy-anjo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { StyledButton } from "../../components/UI/header/styles";
export const About = () => {
  return (
    <Section id="sobre-section">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className="source-sans-3"
          sx={{
            color: "#44C6E9",
            fontSize: "1rem",
            fontWeight: "400 !important",
          }}
        >
          Sobre mim
        </Typography>
      </Box>
      <Grid container>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={anjo} width="400" height="400"></img>
          </Box>
          <StyledButton
            className="poppins"
            onClick={() => {}}
            startIcon={<WhatsAppIcon />}
            disableRipple
            sx={{ marginTop: "50px" }}
          >
            Agendar Consulta
          </StyledButton>
        </Grid>
        <Grid item xs={6} sx={{ paddingLeft: "100px", paddingRight: "100px" }}>
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
            Dra Greicy Pais
          </Typography>
          <Typography
            className="source-sans-3"
            sx={{ textAlign: "justify", color: "#000000", fontSize: "14px" }}
          >
            Sou Greicy Maria Cavalcante de Oliveira Pais, uma profissional
            multifacetada apaixonada por entender a complexidade da mente humana
            e suas interações com o mundo. Doutoranda em Psicologia, graduada em
            Psicologia e Enfermagem, minha jornada acadêmica e profissional me
            levou a explorar diversas áreas, desde a neuropsicologia até o
            coaching, passando por terapias cognitivas, acupuntura e gestão de
            pessoas. Como fundadora e proprietária da Clínica de Psicologia
            Greicy Pais, tenho o privilégio de oferecer um espaço dedicado ao
            bem-estar emocional e mental dos meus pacientes.
          </Typography>
          <Typography
            className="source-sans-3"
            sx={{ textAlign: "justify", color: "#000000", fontSize: "14px" }}
          >
            Minha formação abrange um leque diversificado de áreas, refletindo
            meu interesse em compreender o ser humano em sua totalidade. Além da
            graduação em Psicologia e Enfermagem, especializei-me em
            Neuropsicologia e obtive um MBA em Gestão de Pessoas. Essa
            combinação de conhecimentos me permite uma abordagem holística e
            integrativa em minha prática clínica, promovendo o cuidado completo
            do indivíduo.
          </Typography>
          <Typography
            className="source-sans-3"
            sx={{ textAlign: "justify", color: "#000000", fontSize: "14px" }}
          >
            Meu método de trabalho é pautado na integração de diferentes
            abordagens terapêuticas, adaptadas às necessidades e características
            de cada cliente. A partir de uma base sólida em terapias cognitivas
            e fenomenologia, incorporo técnicas de acupuntura e coaching para
            proporcionar um atendimento personalizado e eficaz. Minha abordagem
            visa não apenas tratar sintomas, mas também promover a compreensão
            profunda dos processos mentais e emocionais, facilitando o
            crescimento pessoal e a resolução de conflitos internos.
          </Typography>
          <Typography
            className="source-sans-3"
            sx={{ textAlign: "justify", color: "#000000", fontSize: "14px" }}
          >
            Minha missão é proporcionar um ambiente terapêutico acolhedor e
            empático, onde meus pacientes se sintam seguros para explorar suas
            dificuldades e desafios. Acredito na importância do autoconhecimento
            e do desenvolvimento pessoal como caminhos para uma vida mais plena
            e satisfatória. Meus valores incluem a ética profissional, a
            dedicação ao bem-estar do cliente e o compromisso com a excelência
            no atendimento. Estou empenhada em promover a saúde mental e
            emocional, contribuindo para o crescimento e a transformação
            positiva daqueles que buscam meu auxílio.
          </Typography>
          <Link sx={{ color: "#44C6E9", cursor: "pointer" }}>
            <Typography className="source-sans-3" sx={{ fontSize: "14px" }}>
              {"Currículo Completo>"}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Section>
  );
};
