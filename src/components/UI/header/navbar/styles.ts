import { styled } from "@mui/material/styles";

export const StyleNav = styled("nav")(({}) => {
  return {

  };
});

export const StyleItem = styled("li")(({}) => {
  return {
    textDecoration: "none",
    marginLeft: "5px",

    "&:hover": {
      cursor: "pointer",
    },
  };
});
