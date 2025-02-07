import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import portfolio from "../assets/img/portfolio.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollX > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar
      expand="md"
      style={{
        backgroundColor:
          activeLink === "skills"
            ? "#121212"
            : activeLink === "projects"
            ? "#121212"
            : activeLink === "experience"
            ? "#121212"
            : activeLink === "let's Connect"
            ? "#121212"
            : "",
        position: activeLink === "home" ? "absolute" : "fixed",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={portfolio} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#experiences"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("experience")}
            >
              Experience
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/divyanshi-tripathi-58b23718b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="linkedIn" />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://github.com/divyanshitripathi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="gitHub" />
              </a>
            </div>
            <HashLink to="#connect">
              <button onClick={() => setActiveLink("let's Connect")}>
                <span>Let's Connect</span>
              </button>
            </HashLink>{" "}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
