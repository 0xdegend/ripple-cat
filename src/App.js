import "./App.css";
import About from "./components/About/About";
import ContractAddress from "./components/ContractAddress/ContractAddress";
import HeroPage from "./components/HeroPage/HeroPage";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import NavBar from "./components/NavBar/NavBar";
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
    </>
  );
}

export default App;
