import useAppContext from "../../context/app/useAppContext";
import { CustomStyledSection } from "./styles";

export const Hero = () => {
  const { dimensions } = useAppContext();
  return (
    <CustomStyledSection full={true} dimensions={dimensions}>
      <h1>HERO</h1>
    </CustomStyledSection>
  );
};
