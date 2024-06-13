import { Button, Card, Grid, IconButton, Typography } from "@mui/material";
import { IDoencaCard } from "./types";
import useDoencaContext from "../../../../context/doenca-cards/useDoencaContext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
export const DoencaCard = ({ title, content, video, thumb }: IDoencaCard) => {
  const { play, isPlaying, truncateText } = useDoencaContext();
  return (
    <Card
      className="card-especialidades-video"
      sx={{ marginTop: "49px", padding: "30px", maxHeight: "300px" }}
    >
      <Grid container>
        <Grid item xs={12} sm={5}>
          <Typography
            className="poppins card-title-especialidade"
            variant="h3"
            sx={{ fontSize: "26px !important" }}
          >
            {title}
          </Typography>
          <Typography
            className="source-sans-3"
            sx={{ fontSize: "0.9rem", marginTop: "10px" }}
          >
            {truncateText(content, 250)}
          </Typography>

          {content.length > 250 && (
            <Button sx={{ backgroundColor: "transparent" }}>
              {" "}
              <Typography
                className="source-sans-3"
                sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                Saiba Mais{" "}
              </Typography>
            </Button>
          )}
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isPlaying && (
            <video
              width="158"
              height="215"
              controls
              className="video-especialidade"
            >
              <source src={video} type="video/mp4" />
            </video>
          )}
          {!isPlaying && (
            <div className="image-container">
              <img width="158" height="215" src={thumb} alt={title} />
              <IconButton
                className="play-button"
                onClick={play}
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff" }}
              >
                <PlayArrowIcon fontSize="large" />
              </IconButton>
            </div>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};
