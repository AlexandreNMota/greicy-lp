import { Header } from "./components";
import {
  About,
  Autorias,
  Contato,
  Depoimentos,
  Hero,
  PerguntasFrequentes,
  WhyItWorks,
  WhyTherapy,
  WhyTherapyRefactor,
} from "./pages";

function App() {
  return (
    <>
      <Header section={"hero"} />
      <Hero />
      <WhyTherapyRefactor />
      <WhyItWorks />
      <About />
      <Autorias />
      <Depoimentos />
      <PerguntasFrequentes />
      <Contato />
    </>
  );
}

export default App;
