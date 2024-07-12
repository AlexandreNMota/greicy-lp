import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { BigText, Section, Title } from "../../components";
import { motion, useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect } from "react";
import { tutorialSteps } from "../../constantes/depoimentos";
const MotionStack = motion(Stack);

export const Depoimentos = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -width / 2 - 8;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 50,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

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
        <BigText text="Depoimentos" hasMarginBottom={true} />
      </Box>
      <MotionStack
        direction="row"
        spacing={4}
        ref={ref}
        style={{
          x: xTranslation,
          width: "200vw",
          // marginTop: "50px",
          paddingBottom: "50px",
        }}
      >
        {[...tutorialSteps].map((item, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              minHeight: {
                xs: "100%",
              },
            }}
          >
            <CardActionArea>
              <Typography
                className="source-sans-3"
                sx={{
                  textAlign: "initial !important",
                  color: "#000 !important",

                  fontWeight: "400 !important",
                  display: "flex !important",
                  width: "100% !important",
                  justifyContent: "space-around !important",
                  borderRadius: "20px !important",
                  padding: "5px !important",
                  fontSize: {
                    xs: "1rem !important",
                    md: "1.75rem !important",
                    lg: "2.25rem !important",
                  },
                }}
              >
                {item.nome}
                <Rating
                  size="small"
                  name="read-only"
                  value={item.stars}
                  readOnly
                  sx={{ marginLeft: { md: "10px" } }}
                />
              </Typography>
              <CardContent>
                <Typography
                  className="content-depo"
                  sx={{
                    color: "#666666 !important",
                    // fontSize: "16px !important",
                    textAlign: "justify !important",
                    fontSize: {
                      xs: ".75rem !important",
                      sm: "1rem !important",
                      md: "1.25rem  !important",
                    },
                  }}
                >
                  {item.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </MotionStack>
    </Section>
  );
};
