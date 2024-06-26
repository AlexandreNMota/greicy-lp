import { BoxProps } from "@mui/material";
import { PerguntaType } from "../../../constantes/perguntasFrequentes";
import { Dispatch, SetStateAction } from "react";

export interface IPerguntaProps extends BoxProps {
  item: PerguntaType;
  i: number;
  expanded: false | number;
  setExpanded: Dispatch<SetStateAction<number | false>>;
}
