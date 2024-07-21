import {Box, Typography} from "@mui/material";
import {BigText, GridContainer, GridItem, ImageContainer, Title,} from "../../global";
import logo from "../../../assets/produtos-logo.png";
import sign from "../../../assets/sign.png";
import bgWaveProdutos from "../../../assets/bg-produtos-wave.png";
import livros from "../../../assets/livros.png";
import GreicyModel from "../../../assets/greicy-top-model.png";
import {produtosDescription} from "../../../constantes/description";
import "./index.css"
import {SaibaMaisButton} from "../saiba-mais-button";

export const ProdutosDesktop = () => {
    return (
        <div style={{position: "absolute", height: "100vh"}}>
            <Title title="Produtos" sx={{width: "100%", textAlign: "center"}}/>
            <ImageContainer src={logo} classe="pd-logo-produtos"/>
            <ImageContainer src={sign} classe="pd-sign-produtos"/>
            <GridContainer>
                <GridItem xs={6} flexAround={true} directionFlex="column">
                    <Box className="pd-box-grid-1">
                        <BigText
                            text="Autorias"
                            branco={true}
                            hasMarginBottom={true}
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "flex-start",
                            }}
                        />
                        <Typography
                            className="product-desc-refactor"
                            sx={{
                                textAlign: "justify",
                                fontSize: {
                                    sm: "1rem !important",
                                    md: "1.15rem !important",
                                    lg: "1rem !important",
                                    xl: "1rem !important",
                                },
                            }}
                        >
                            {produtosDescription}
                        </Typography>
                        {/* <CustomText text={produtosDescription} classe="product-desc" /> */}
                    </Box>
                    <ImageContainer src={livros} classe="pd-livros-produtos"/>

                </GridItem>
                <GridItem xs={6} flexStart={true}>
                    <ImageContainer src={GreicyModel} classe="pd-greicy-model-produtos"/>
                </GridItem>
            </GridContainer>
            <Box className="pd-container-saiba-mais"

            >
                <SaibaMaisButton/>
            </Box>
            <ImageContainer src={bgWaveProdutos} classe="pd-bg-wave-produtos"/>

        </div>
    );
};
