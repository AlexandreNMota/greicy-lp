import { FirstGrid, GridContainer, GridItem, Section } from "../../components";
import desktop from "../../assets/Desktop.png";

export const WhyItWorks = () => {
  return (
    <Section id="como-funciona-section">
      <GridContainer hasMarginTop={true}>
        <GridItem directionFlex="column" xs={6}>
          <FirstGrid />
        </GridItem>
        <GridItem directionFlex="row" xs={6}>
          <img src={desktop} width="600" height="391" />
        </GridItem>
      </GridContainer>
    </Section>
  );
};
