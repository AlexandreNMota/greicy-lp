import { FC, useState } from "react";
import { HeaderProps } from "./types";
import {
  MotionButton,
  StyledAppBar,
  StyledButton,
  StyledHeader,
} from "./styles";
import useAppContext from "../../../context/app/useAppContext";
import { Navbar } from "./navbar";
import { Box, Button, CssBaseline, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Menus } from "../../../constantes/menus";
import { CustomTypography } from "../typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Header: FC<HeaderProps> = ({ section, ...props }) => {
  const { dimensions, isMobile } = useAppContext();
  const menuList = Menus;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const scrollToAnchor = (section: any) => {
    const element =
      section === "Inicio"
        ? "home-section"
        : section === "Produtos"
        ? "productos-section"
        : section === "Sobre"
        ? "sobre-section"
        : section === "Contatos"
        ? "contato-section"
        : "home-section";

    const destination = document.querySelector(`#${element}`);
    if (destination) {
      const offsetTop =
        destination.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <StyledHeader dimensions={dimensions} section={section} {...props}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <StyledAppBar component="nav">
          <Toolbar>
            {isMobile && (
              <img
                src="images/logo greicy 1.png"
                style={{ width: "60px" }}
              ></img>
            )}
            {/* <CustomTypography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </CustomTypography> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {menuList.map((item) => (
                <Button
                  className="source-sans-3"
                  key={item}
                  sx={{ color: "#000", textTransform: "none" }}
                  onClick={() => scrollToAnchor(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            {!isMobile && (
              // <StyledButton
              // className="poppins"
              // onClick={() => {}}
              // startIcon={<WhatsAppIcon />}
              // disableRipple
              // >
              <MotionButton
                className="poppins"
                onClick={() => {}}
                startIcon={<WhatsAppIcon />}
                disableRipple
                whileTap={{ scale: 0.85 }}
              >
                Agendar Consulta
              </MotionButton>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </StyledAppBar>
        <Navbar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      </Box>

      {/* <Grid container spacing={4}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Navbar />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <StyledButton onClick={() => {}} startIcon={<WhatsAppIcon />}>
            Agendar Consulta
          </StyledButton>
        </Grid>
      </Grid> */}
    </StyledHeader>
  );
};
