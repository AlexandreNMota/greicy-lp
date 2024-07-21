import { useState } from "react";
import { BigText, Pergunta, Section, Title } from "../../components";
import { perguntasFrequentes } from "../../constantes/perguntasFrequentes";

export const PerguntasFrequentes = () => {
  const [expanded, setExpanded] = useState<false | number>(false);
  return (
    <Section id="duvidas-section">
      <Title
        title="Dúvidas"
        sx={{ width: "100%", textAlign: "center", marginTop: "50px" }}
      />
      <BigText
        text="Perguntas Frequentes"
        hasMarginBottom={true}
        sx={{ width: "100%", textAlign: "center" }}
      />
      {perguntasFrequentes.map((item, i) => (
        <Pergunta
          key={i}
          item={item}
          i={i}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </Section>
  );
};
