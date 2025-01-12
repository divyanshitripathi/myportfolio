// import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBars";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
