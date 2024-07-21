import {
  FirstGrid,
  GridContainer,
  GridItem,
  ImageContainer,
  Section,
} from "../../components";
import desktop from "../../assets/Desktop.png";
import "./index.css";

export const WhyItWorks = () => {
  return (
    <Section id="como-funciona-section">
      <GridContainer hasMarginTop={false}>
        <GridItem directionFlex="column" xs={12} sm={12} md={6}>
          <FirstGrid />
        </GridItem>
        <GridItem directionFlex="row" xs={12} sm={12} md={6}>
          <ImageContainer src={desktop} className="como-funciona-img" />
        </GridItem>
      </GridContainer>
    </Section>
  );
};
