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
} from "./pages";

function App() {
  return (
    <>
      <Header section={"hero"} />
      <Hero />
      <WhyTherapy />
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
