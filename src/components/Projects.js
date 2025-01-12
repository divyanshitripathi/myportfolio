import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const UAEProjects = [
    {
      title: "DIC (Digital Incubation Center)",
      description: (
        <p>
          {" "}
          Project facilitates collaboration between investors and startups by
          managing pitches, events, and mandates for the{" "}
          <strong style={{ color: "white" }}>Qatar Ministry</strong>.
        </p>
      ),
      imgUrl: projImg1,
    },
    {
      title: "SP (Smart Car Parking System)",
      description: (
        <p>
          Developed for{" "}
          <strong style={{ color: "white" }}>AECL Company in Qatar</strong>
          ,designed to streamline parking systems for customers across major
          locations in Qatar.
        </p>
      ),
      imgUrl: projImg2,
    },
    {
      title: "4S (Smart Site Safety Solution)",
      description: (
        <p>
          Developed for <strong style={{ color: "white" }}>Aramco</strong> for
          enhance real-time monitoring of worker safety across construction,
          factory, and accommodation sites, improving visibility by 98%.
        </p>
      ),
      imgUrl: projImg3,
    },
  ];

  const InternalProjects = [
    {
      title: "IoT Platform",
      description: (
        <p>
          This application integrates{" "}
          <strong style={{ color: "white" }}>
            IoT devices and connects various IoT-based systems{" "}
          </strong>
          , such as fleet tracking, creating a unified platform for managing
          interlinked IoT-enabled applications.
        </p>
      ),
      imgUrl: projImg4,
    },
    {
      title: "Fleet Tracking System",
      description: (
        <p>
          Application monitors vehicle movement within a defined area, managing
          travel between destinations and tracking all routes in real-time.
        </p>
      ),
      imgUrl: projImg5,
    },
    {
      title: "SWM (Smart Waste Management System)",
      description: (
        <p>
          This system monitors bins in real-time, tracking their fill levels,
          tampering incidents, and battery status, ensuring efficient waste
          collection and management.
        </p>
      ),
      imgUrl: projImg6,
    },
  ];

  const TrainingProjects = [
    {
      title: "HRMS (Human Resource Management)",
      description: (
        <p>
          <strong>HRMS</strong> is a comprehensive system that manages all
          managing employee records, attendance, payroll, recruitment, leave,
          and performance appraisals in
          <strong>Directorate of Punjab Reforms</strong>.
        </p>
      ),
      imgUrl: projImg7,
    },
  ];

  return (
    <section className="project" id="projects">
      <>
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Client Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">
                            Internal Projects
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">
                            Training Projects
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                        style={{ padding: "0px 0px 95px" }}
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {UAEProjects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {InternalProjects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {TrainingProjects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="" />
      </>
    </section>
  );
};
