import { Header } from "./components";
import {
  About,
  Autorias,
  Contato,
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
      <Contato />
    </>
  );
}

export default App;
