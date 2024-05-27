import { styled } from "@mui/material/styles";
import { StyledSectionProps } from "./types";
export const StyledSection = styled("section")(
  ({ full }: StyledSectionProps) => {
    return {
      height: full ? "100vh" : "auto",
      minHeight: full ? "100vh" : "auto",
      width: "100vw",
    };
  }
);
