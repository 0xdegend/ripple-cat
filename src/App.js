import "./App.css";
import About from "./components/About/About";
import HeroPage from "./components/HeroPage/HeroPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <About/>
    </>
  );
}

export default App;
