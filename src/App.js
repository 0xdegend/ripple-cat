import "./App.css";
import About from "./components/About/About";
import HeroPage from "./components/HeroPage/HeroPage";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <About />
      <HowItWorks />
    </>
  );
}

export default App;
