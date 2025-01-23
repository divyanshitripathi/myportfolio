import { Container, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";
import externalLogo from "../assets/img/external link logo.png";
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "react-bootstrap-icons";
import WorkerTracking from "../assets/img/4s Worker Tracking.png";
import Dashboard from "../assets/img/4s Dashboard.png";
import AlertManagement from "../assets/img/4s Alert Management.png";
import FallAlertDashboard from "../assets/img/4sFall alert dashboard.png";
import DicMainPage from "../assets/img/DIC MainPage 2.png";
import DICShortList from "../assets/img/DIC Search startUps 2.png";
import DicSearchList from "../assets/img/DIC main Page.png";
import DICMandatePage from "../assets/img/ShortList StartUps.png";
import SPDashboard from "../assets/img/SPDashboard.png";
import SPSite from "../assets/img/SPSite.png";
import SPSubSite from "../assets/img/SPSubSite.png";
import SPEnforcement from "../assets/img/SPEnforcement.png";
import SPNotification from "../assets/img/SPNotifications.png";
import { Footer } from "./Footer";

const ProjectDetails = () => {
  const location = useParams();
  const { title } = location || {};
  const screenshotsRef = useRef(null);
  const [scrolledByUser, setScrolledByUser] = useState(false);

  useEffect(() => {
    /** Scroll to the top of the page when the component mounts */
    window.scrollTo(0, 0);
    setScrolledByUser(false);
  }, [title]);

  /** dynamic data */
  const projectDetails = {
    "SP (Smart Car Parking System)": {
      companyName: "Hyperthink IoT Systems ",
      webSiteLink: "http://hts.sps.hyperthings.in",
      projectPeriod: "September 2022 - March 2023",
      description:
        "Project is designed for the AECL Company in Qatar to maintain its parking system. It is a multisite-application-based project in which we designed not only the web apps but also the mobile apps. To give the facility to reach every single customer and give them feasibility in parking the vehicles..",
      keyPoints: [
        "As is a multi-site project where all main Qatar places are linked like Faisal International Airport, Riyad Airport, etc.",
        <>
          Develop real-time backend connectivity with{" "}
          <strong> Graphiql </strong> and REST API integration.
        </>,
        <>
          A key feature of the application is <strong> Site Wizard</strong>.
          This is the most challenging layout Where users can register as many
          sites as user want to connect with the application.
        </>,
        "Also, along with my team members, I developed some more important features.",
        "I gained the confidence to face clients and fulfil client requirements within the given deadlines.",
        "From giving demos of the implemented features to the client to listing all the changes expected by the clients.",
        <>
          <strong>Backend:</strong>
          <span className="tag">Post-Graphiql</span>
          <span className="tag">Post-Graphiql Client</span>
        </>,
        <>
          <strong>Frontend:</strong>
          <span className="tag">React JS</span>
          <span className="tag">Redux</span>
          <span className="tag">Redux Toolkit</span>
          <span className="tag">Nextjs</span>
          <span className="tag">Antd</span>
          <span className="tag">Flutter</span>
        </>,
      ],
      projectScreens: [
        SPDashboard,
        SPSite,
        SPSubSite,
        SPEnforcement,
        SPNotification,
      ],
    },
    "DIC (Digital Incubation Center)": {
      companyName: "Hyperthink IoT Systems ",
      webSiteLink: "http://dic.hyperthink.io/",
      projectPeriod: "December 2023 - April 2024",
      description: (
        <>
          Project is designed to maintain the relationship between the investors
          and Startups by handling pitches.Also it will manage all the{" "}
          <strong>
            {" "}
            events, news, mandates, and pitches done by stakeholders and
            investing partners of the Qatar Ministry
          </strong>
          .
        </>
      ),
      keyPoints: [
        "This portal is built to provide a list of Startups and their investors to be aligned in one portal, by providing all valuable functionalities for handling it",
        <>
          This is a robust application with having{" "}
          <strong>
            Search Startups feature running from the CrunchBase system
          </strong>
        </>,
        <>
          Additionally, the project includes{" "}
          <strong>payment gateway integration</strong> using{" "}
          <strong>Skip cash</strong>, ensuring secure and seamless transactions
          for financial operations
        </>,
        <>
          <strong>Backend:</strong>
          <span className="tag">Rest API</span>
          <span className="tag">Axios</span>
        </>,
        <>
          <strong>Frontend:</strong>
          <span className="tag">React JS</span>
          <span className="tag">Redux</span>
          <span className="tag">MUI</span>
          <span className="tag">Nextjs</span>
        </>,
      ],
      projectScreens: [
        DicSearchList,
        DicMainPage,
        DICShortList,
        DICMandatePage,
      ],
    },
    "4S (Smart Site Safety Solution)": {
      companyName: "Hyperthink IoT Systems ",
      webSiteLink: "https://4s.hyperthings.in",
      projectPeriod: "March 2020 - September 2021",
      description: (
        <>
          Designed and implemented intuitive front-end features to monitor
          worker safety across construction, factory, and accommodation sites,
          increasing real-time visibility by <strong> 80%.</strong>
        </>
      ),
      keyPoints: [
        "Developed and optimized interfaces using React.js and Redux, enhancing usability for sensor-based device integration",
        "Collaborated with the backend team to streamline data flow, reducing API response times by 30% with Post-Graphile and REST APIs",
        "Led the implementation of key safety features, improving incident reporting efficiency by 40%",
        "Identified and resolved critical bugs in collaboration with the QA team, achieving a 95% reduction in production issues",
        "Conducted comprehensive unit, smoke, and integration testing, ensuring 100% alignment with client requirements",
        <>
          <strong>Backend:</strong>
          <span className="tag">Post-Graphiql</span>
          <span className="tag">Post-Graphiql Client</span>
          <span className="tag">Rest API</span>
        </>,
        <>
          <strong>Frontend:</strong>
          <span className="tag">React JS</span>
          <span className="tag">Redux</span>
          <span className="tag">Redux Toolkit</span>
          <span className="tag">Antd</span>
        </>,
      ],
      projectScreens: [
        Dashboard,
        FallAlertDashboard,
        WorkerTracking,
        AlertManagement,
      ],
    },
  };
  const project = projectDetails[title];
  if (!project) {
    return <p>Project not found!</p>;
  }

  // Function to scroll to the screenshots section
  const scrollToScreenshots = () => {
    if (screenshotsRef.current) {
      screenshotsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setScrolledByUser(true);
  };

  return (
    <section className="projectDetails" id="projectDetails">
      <Container>
        <div
          className="card"
          style={{ padding: "30px", color: "white", marginTop: "30px" }}
        >
          <h1>{title}</h1>
          <Dropdown.Divider />
          <div className="work-item">
            <div className="work-details">
              <h3>{project?.companyName}</h3>
              <h5>{project?.projectPeriod}</h5>
              <a
                href={project?.webSiteLink}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "18px",
                  cursor: "default",
                }}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer"
              >
                ProjectLink{" "}
                <img
                  src={externalLogo}
                  alt="External Link"
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
            <div className="work-summary">
              <p>{project.description}</p>
              <ul>
                {project.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Down arrow button */}

          <button
            className="scroll-down-btn"
            onClick={scrollToScreenshots}
            aria-label="Scroll down"
            style={{
              margin: "10px 0 0",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            Screenshots
            <ArrowDown size={30} style={{ color: "white" }} />
          </button>
        </div>
        {/* Screenshots section conditionally rendered */}
        {scrolledByUser && (
          <div
            ref={screenshotsRef}
            id="screenshots-section"
            style={{ padding: "30px", marginTop: "30px" }}
          >
            {/* screenshots of project image content here */}
            <h2 style={{ fontSize: "50px" }}>Project Screenshots</h2>
            <div className="screenshotsLayout">
              {project?.projectScreens.map((point, index) => (
                <img key={index} src={point} alt={`Screenshot ${index}`} />
              ))}
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </section>
  );
};

export default ProjectDetails;
