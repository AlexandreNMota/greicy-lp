import { BoxProps } from "@mui/material";
import { PerguntaType } from "../../../constantes/perguntasFrequentes";

export interface IPerguntaProps extends BoxProps {
  item: PerguntaType;
}
