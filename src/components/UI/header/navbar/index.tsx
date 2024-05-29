import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Menus } from "../../../../constantes/menus";
import { StyleItem, StyleNav } from "./styles";
import { useState } from "react";
import useAppContext from "../../../../context/app/useAppContext";

export const Navbar = ({ ...props }) => {
  const { dimensions } = useAppContext();
  const menuList = Menus;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {

    props.handleDrawerToggle()
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {menuList.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = () => window.document.body;
  return (
    <StyleNav>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={props.mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: dimensions.headerHeight },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* {menuList.map((item, index) => (
        <StyleItem
          onClick={() => {
            console.log(item);
          }}
          key={index}
        >
          {item}
        </StyleItem>
      ))} */}
    </StyleNav>
  );
};
