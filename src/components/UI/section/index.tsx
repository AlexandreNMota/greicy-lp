import { FC } from "react";
import { SectionProps } from "./types";
import { StyledSection } from "./styles";

export const Section: FC<SectionProps> = ({
  children,
  ...props
}: SectionProps) => {
  return <StyledSection full={true}>{children}</StyledSection>;
};
