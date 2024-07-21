import React, {FC, useEffect, useRef} from "react";
import {
    Box,
    Card,
    CardContent,
    Dialog,
    DialogContent,
    Grid,
    GridProps,
    IconButton,
    Tooltip,
    Typography
} from "@mui/material";
import useAppContext from "../../../context/app/useAppContext";
import {BigText, Section, Title} from "../../../components";
import "./index.css"
import {cards} from "../../../constantes/doencaCards"
import {motion} from "framer-motion";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ReactPlayer from 'react-player';

const cardAnimation = {
    rest: {scale: 1},
    hover: {scale: 1.03},
    tap: {scale: 0.98}
};
const RenderEllipseImage = ({className}: { className: string }) => (
    <img
        src="images/Ellipse 36.png"
        className={className}
        alt="Ellipse"
        width="100%"
    />
);

const RenderGridContainer: React.FC<GridProps> = ({children, ...props}: GridProps) => (
    <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        alignSelf="flex-start"
        {...props}
    >
        {children}
    </Grid>
);

const SpecialtiesContent: React.FC = () => (
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
);

export const Especialidades: React.FC = () => {
    const {isMobile} = useAppContext();
    const cardLayoutProps = isMobile ? {xs: 12} : {xs: 12, sm: 6};
    const [modalOpen, setModalOpen] = React.useState(false);
    const [currentVideo, setCurrentVideo] = React.useState('');
    const openModal = (videoUrl) => {
        setCurrentVideo(videoUrl);
        setModalOpen(true);
    };

    const playerRef = useRef(null); // Crie uma referência

    useEffect(() => {

    }, []);
    (() => {
        if (modalOpen) {
            // Verifique se o navegador suporta a API Fullscreen
            if (playerRef.current.requestFullscreen) {
                playerRef.current.requestFullscreen();
            } else if (playerRef.current.webkitRequestFullscreen) { /* Safari */
                playerRef.current.webkitRequestFullscreen();
            } else if (playerRef.current.msRequestFullscreen) { /* IE/Edge */
                playerRef.current.msRequestFullscreen();
            }
        }
    }, [modalOpen]);

    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <Section id="especialidades-section">
            <div className="content-especialidades">
                <RenderEllipseImage className="eclipse36-especialidades"/>
                <div className="spacer-especialidades">
                    <RenderGridContainer>
                        {/* Extracted code to a separate function for better readability and reuse */}
                        <RenderTitles/>
                        <RenderSpecialtiesContent/>
                        <RenderCards cardLayoutProps={cardLayoutProps} openModal={openModal}/>

                    </RenderGridContainer>
                </div>
                <Dialog
                    open={modalOpen}
                    onClose={closeModal}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogContent>
                        <ReactPlayer
                            ref={playerRef}
                            url={currentVideo}
                            playing={modalOpen}
                            width="100%"
                            height="100%"
                            controls={true}
                        />
                    </DialogContent>
                </Dialog>
                <RenderEllipseImage className="eclipse36-especialidades rotated-especialidades"/>
            </div>
        </Section>
    )
}

const RenderTitles: FC = () => (
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
);

const RenderSpecialtiesContent: FC = () => (
    <Grid item xs={12} sm={6} marginTop={2}>
        <SpecialtiesContent/>
    </Grid>
);

type RenderCardsProps = { cardLayoutProps: GridProps, openModal: (videoUrl: string) => void }
const RenderCards: FC<RenderCardsProps> = ({cardLayoutProps, openModal,}) => (
    <Grid item xs={12}>
        <div className="card-container-especialidades">
            <Grid container spacing={2}>
                {cards.map((card, index) => (
                    <Grid item {...cardLayoutProps} key={`card-${index}`}>
                        <motion.div
                            whileHover="hover"
                            whileTap="tap"
                            initial="rest"
                            variants={cardAnimation}
                        >
                            <Card variant="outlined" sx={{
                                transition: "0.5s",
                                ':hover': {
                                    borderColor: '#2977d5',
                                    boxShadow: '0 0 10px #2977d5, 0 0 5px #2977d5',
                                }
                            }}>
                                <CardContent>
                                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                                        <Typography variant="h5" component="div" className="poppins"
                                                    sx={{color: "#2977d5"}}>
                                            {card.title}
                                        </Typography>
                                        <Tooltip title={`Saiba mais sobre ${card.title}`}>
                                            <IconButton color="primary" aria-label="play video"
                                                        onClick={() => openModal(card.video)}>
                                                <OndemandVideoIcon/>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary"
                                                className="source-sans-3"
                                                sx={{
                                                    fontSize: {
                                                        xs: "1rem !important",
                                                    },
                                                }}>
                                        {card.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </div>
    </Grid>
)
