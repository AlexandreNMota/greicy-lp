import {Box, Button, Card, CardActions, CardContent, Grid, Typography,} from "@mui/material";
import {BigText, Section, Title} from "../../../components";
import "./index.css";
import {FC, useEffect, useState} from "react";

import {cards} from "../../../constantes/doencaCards";
import {motion} from "framer-motion";

import useAppContext from "../../../context/app/useAppContext";
import {IDoencaCard} from "../../../components/UI/whyTherapy/doenca-card/types.ts";





const cardVariants = {
    enter: {opacity: 0, x: 100},
    center: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100},
};

export const WhyTherapyRefactor: FC = () => {
    const {isMobile} = useAppContext();
    const [step, setStep] = useState<number>(0);
    const [blockCards, setBlockCards] = useState<IDoencaCard[]>(cards.slice(0, 4));
    const [toggle, setToggle] = useState<boolean>(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prevStep) => (prevStep + 1) % cards.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlockCards(toggle ? cards.slice(0, 4) : cards.slice(4, 8));
            setToggle((prevToggle) => !prevToggle);
        }, 5000);

        return () => clearInterval(interval);
    }, [toggle]);

    return (
        <Section id="especialidades-section">
            <div className="content">
                <img
                    src="images/Ellipse 36.png"
                    className="eclipse36"
                    alt="Ellipse"
                    width="100%"
                />
                <div className="spacer">
                    <Grid
                        container
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Grid item xs={12} sm={12} sx={{zIndex: 999}} marginTop={10}>
                            <Box
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                flexDirection={"column"}
                            >
                                <Title title="Especialidades"/>
                                <BigText
                                    text="Porque e quando buscar terapia?"
                                    marginTop={2}
                                    sx={{width: "100%", textAlign: "center"}}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} marginTop={2}>
                            <Typography
                                className=" subtitle2-especialidades"
                                variant="subtitle1"
                                sx={{width: "100%", textAlign: "center"}}
                            >
                                Assim como cuidamos da nossa saúde física, é importante cuidar
                                da nossa saúde mental e emocional. Procurar a ajuda de uma
                                psicóloga pode ser um ato de autocuidado e investimento no seu
                                bem-estar!
                            </Typography>
                        </Grid>
                    </Grid>
                </div>

                {isMobile && (
                    <div className="card-container">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <motion.div
                                    key={step}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    variants={cardVariants}
                                    transition={{duration: 1}}
                                >
                                    <Card
                                        sx={{
                                            width: 345,
                                            minHeight: 500,
                                            height: 500,
                                            maxHeight: 500,
                                            // border: "1px solid #000",

                                            "&.MuiPaper-root": {
                                                boxShadow:
                                                    " rgba(0, 0, 0, 0.35) 0px 5px 15px !important",
                                            },
                                        }}
                                    >
                                        <img src={cards[step].thumb} width={345} height={140}/>
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                className="poppins"
                                                sx={{color: "#2977d5"}}
                                            >
                                                {cards[step].title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                className="source-sans-3"
                                                sx={{
                                                    fontSize: {
                                                        xs: "1rem !important",
                                                    },
                                                }}
                                            >
                                                {cards[step].content.length > 300
                                                    ? cards[step].content.slice(0, 300) + "..."
                                                    : cards[step].content}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" sx={{zIndex: 999}}>
                                                Saiba Mais
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </div>
                )}
                {!isMobile && (
                    <div className="card-container">
                        <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <Grid container spacing={2}>
                                    {blockCards.map((card, index) => (
                                        <Grid item xs={12} sm={6} md={6} lg={6} xl={3} key={index}>
                                            <Card
                                                sx={{
                                                    width: 345,
                                                    minHeight: 500,
                                                    height: 500,
                                                    maxHeight: 500,
                                                    // border: "1px solid #000",

                                                    "&.MuiPaper-root": {
                                                        boxShadow:
                                                            " rgba(0, 0, 0, 0.35) 0px 5px 15px !important",
                                                    },
                                                }}
                                            >
                                                <img src={card.thumb} width={345} height={140}/>
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h5"
                                                        component="div"
                                                        className="poppins"
                                                        sx={{color: "#2977d5"}}
                                                    >
                                                        {card.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        className="source-sans-3"
                                                        sx={{
                                                            fontSize: {
                                                                xs: "1rem !important",
                                                            },
                                                        }}
                                                    >
                                                        {card.content.length > 200
                                                            ? card.content.slice(0, 200) + "..."
                                                            : card.content}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" sx={{zIndex: 999}}>
                                                        Saiba Mais
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </div>
                )}

                <img
                    src="images/Ellipse 36.png"
                    className="eclipse36 rotated"
                    alt="Ellipse"
                />
            </div>
        </Section>
    );
};
