import { styled } from "@mui/material/styles";

export const StyleNav = styled("ul")(({}) => {
  return {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyleType: "none",
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
