// import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBars";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <div className="App">
      <title>Divya Portfolio</title>

      <Router>
        <Routes>
          {/* Static layout components */}
          <Route
            path="/myportfolio"
            element={
              <>
                <NavBar />
                <Banner />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* Full-page view for ProjectDetails */}
          <Route path="/projectDetails/:title" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
