import { Grid, Typography } from "@mui/material";
import { Section } from "../../components";

export const WhyItWorks = () => {
  return (
    <Section id="como-funciona-section">
      <Grid container spacing={2}>
        <Grid item xs={0.5}></Grid>
        <Grid item xs={11}>
          <Grid container>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      color: "#00296D",
                      fontSize: "40px",
                      fontWeight: "bold",
                    }}
                  >
                    Como funciona?
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={0.5}></Grid>
      </Grid>
    </Section>
  );
};
