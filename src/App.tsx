import { Header } from "./components";
import {
  About,
  Autorias,
  Contato,
  Depoimentos,
  Hero,
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
      <Contato />
    </>
  );
}

export default App;
