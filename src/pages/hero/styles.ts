import { styled } from "@mui/material/styles";
import { StyledSection } from "../../components/UI/section/styles";

export const CustomStyledSection = styled(StyledSection)(({ dimensions }) => {
  const SECTIONHEIGHT = `calc(100vh - ${dimensions.headerHeight})`;
  return {
    // height: SECTIONHEIGHT,
    marginTop: dimensions.headerHeight,
    // padding: "2rem",
  };
});
