import { FC, useState } from "react";
import { HeaderProps } from "./types";
import { StyledAppBar, StyledButton, StyledHeader } from "./styles";
import useAppContext from "../../../context/app/useAppContext";
import { Navbar } from "./navbar";
import { Box, Button, CssBaseline, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Menus } from "../../../constantes/menus";
import { CustomTypography } from "../typography";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Header: FC<HeaderProps> = ({ section, ...props }) => {
  const { dimensions } = useAppContext();
  const menuList = Menus;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <StyledHeader dimensions={dimensions} section={section} {...props}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <StyledAppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <CustomTypography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </CustomTypography> */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', sm: 'block' }, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              {menuList.map((item) => (
                <Button className="source-sans-3" key={item} sx={{ color: '#000', textTransform: 'none' }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <StyledButton className="poppins" onClick={() => { }} startIcon={<WhatsAppIcon />} disableRipple>
              Agendar Consulta
            </StyledButton>
          </Toolbar>
        </StyledAppBar>
        <Navbar handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen} />
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
