import "./App.css";
import About from "./components/About/About";
import ContractAddress from "./components/ContractAddress/ContractAddress";
import FAQ from "./components/FAQ/FAQ";
import HeroPage from "./components/HeroPage/HeroPage";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import NavBar from "./components/NavBar/NavBar";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Utilities from "./components/Utilities/Utilities";

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <About />
      <HowItWorks />
      <Utilities />
      <HowToBuy />
      <Tokenomics />
      <FAQ />
    </>
  );
}

export default App;
