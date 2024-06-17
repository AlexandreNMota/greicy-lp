import { styled } from "@mui/material/styles";
import { StyledSectionProps } from "./types";
export const StyledSection = styled("section")(
  ({ full, dimensions }: StyledSectionProps) => {
    return {
      height: full ? "100%" : "auto",
      minHeight: "auto",
      width: "100%",
    };
  }
);

export const CustomStyledSection = styled(StyledSection)(({}) => {
  return {};
});
