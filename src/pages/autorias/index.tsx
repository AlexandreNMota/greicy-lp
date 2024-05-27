import useAppContext from "../../context/app/useAppContext";
import { CustomStyledSection } from "./styles";

export const Autorias = () => {
  const { dimensions } = useAppContext();
  return (
    <CustomStyledSection full={true} dimensions={dimensions}>
      <h1>Autorias</h1>
    </CustomStyledSection>
  );
};
