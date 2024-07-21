import {Header} from "./components";
import {About, Autorias, Contato, Depoimentos, Especialidades, Hero, PerguntasFrequentes, WhyItWorks,} from "./pages";

const PAGES = [
    Hero,
    Especialidades,
    WhyItWorks,
    About,
    Autorias,
    Depoimentos,
    PerguntasFrequentes,
    Contato,
];

function App() {
    return (
        <>
            <Header section={"hero"}/>
            {PAGES.map((PageComponent, index) => <PageComponent key={index}/>)}
        </>
    );
}

export default App;
