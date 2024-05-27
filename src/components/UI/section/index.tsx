import { FC } from "react";
import { SectionProps } from "./types";
import { StyledSection } from "./styles";
import useAppContext from "../../../context/app/useAppContext";

export const Section: FC<SectionProps> = ({
  children,
  ...props
}: SectionProps) => {
  const { dimensions } = useAppContext();
  return (
    <StyledSection full={true} dimensions={dimensions} {...props}>
      {children}
    </StyledSection>
  );
};
