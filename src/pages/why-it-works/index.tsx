import {
  FirstGrid,
  GridContainer,
  GridItem,
  ImageContainer,
  Section,
} from "../../components";
import desktop from "../../assets/Desktop.png";

export const WhyItWorks = () => {
  return (
    <Section id="como-funciona-section">
      <GridContainer hasMarginTop={true}>
        <GridItem directionFlex="column" xs={6}>
          <FirstGrid />
        </GridItem>
        <GridItem directionFlex="row" xs={6}>
          <ImageContainer src={desktop} className="como-funciona-img" />
        </GridItem>
      </GridContainer>
    </Section>
  );
};
