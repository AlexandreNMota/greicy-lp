import { styled } from "@mui/material/styles";
import { StyledHeaderProps } from "./types";
import { Button } from "@mui/material";

export const StyledHeader = styled("div")(
  ({ section, dimensions }: StyledHeaderProps) => {
    return {
      width: "90vw",
      height: dimensions.headerHeight,
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
    };
  }
);

export const StyledButton = styled(Button)(({}) => {
  return {
    color: "#fff",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#5EC2ED",
    borderBottom: "2px solid #3775A8",
    borderRight: "2px solid #3775A8",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
  };
});
