import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowLeftCircle } from "react-bootstrap-icons";
import file from "../components/Divyanshi Tripathi(DU).pdf";
import techImage1 from "../assets/img/html5.png";
import techImage2 from "../assets/img/css3.png";
import techImage3 from "../assets/img/js.png";
import techImage4 from "../assets/img/react.png";
import techImage5 from "../assets/img/next.png";
import techImage6 from "../assets/img/angular.png";
import profileImg from "../assets/img/profile-img.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [currentLogos, setCurrentLogos] = useState([0, 1, 2, 3]);
  const [isBlurred, setIsBlurred] = useState(true);
  const toRotate = ["Frontend Developer", "UI/UX Designer", "Web Developer"];
  const logos = [
    techImage1,
    techImage2,
    techImage3,
    techImage4,
    techImage5,
    techImage6,
  ];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  /** Rotate logos periodically */
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogos(([first, second, third, fourth]) => {
        const nextFirst = (first + 1) % logos.length;
        const nextSecond = (second + 1) % logos.length;
        const nextThird = (third + 1) % logos.length;
        const nextFourth = (fourth + 1) % logos.length;
        return [nextFirst, nextSecond, nextThird, nextFourth];
      });
    }, 2000);

    return () => clearInterval(logoInterval);
  }, []);

  /** Detect scroll to remove blur */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 40; // Adjust this value as needed
      if (scrollPosition > triggerPoint) {
        setIsBlurred(false);
      } else {
        setIsBlurred(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Router>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} xl={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome to my Expertise</span>
                    <h2>
                      {`Hi! I'm Divyanshi Tripathi`} <br></br>
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Frontend Developer", "UI/UX Designer", "Web Developer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h2>
                    <p>
                      Front-end Developer with 5+ years of experience in
                      designing, developing, and maintaining front-end web
                      applications.<br></br>"Crafting intuitive and engaging
                      user experiences with clean, efficient code."
                    </p>
                    <a
                      href={file}
                      download="DivyanshiTripathi(DU).pdf"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button classname="vvd" onClick={() => {}}>
                        Resume <ArrowLeftCircle size={25} />
                      </button>
                    </a>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} sm={12} md={6} xl={6}>
              <Row
                style={{
                  display: " flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  xl={12}
                  style={{ textAlign: "center" }}
                >
                  <div>
                    <img
                      src={profileImg}
                      alt="Profile"
                      style={{
                        width: "50%",
                        borderRadius: "50%",
                        filter: isBlurred ? "blur(5px)" : "none", // Blur effect
                        border: "5px solid #fff",
                        animation: "none",
                        height: "300px",
                        marginBottom: "70px",
                      }}
                    />
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  xl={12}
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      cursor: "pointer",
                      display: "inline-flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        color: "#fff",
                        fontWeight: "300",
                        fontSize: "14px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Scroll down to see the picture
                    </span>
                  </div>
                </Col>
              </Row>{" "}
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} md={24} xl={24}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    style={{ marginTop: "20px" }}
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img
                      style={{ marginLeft: "80px" }}
                      src={logos[currentLogos[0]]}
                      alt={`Logo ${currentLogos[0]}`}
                    />
                    <img
                      style={{ marginLeft: "80px" }}
                      src={logos[currentLogos[1]]}
                      alt={`Logo ${currentLogos[1]}`}
                    />
                    <img
                      style={{ marginLeft: "80px" }}
                      src={logos[currentLogos[2]]}
                      alt={`Logo ${currentLogos[2]}`}
                    />
                    <img
                      style={{ marginLeft: "80px" }}
                      src={logos[currentLogos[3]]}
                      alt={`Logo ${currentLogos[3]}`}
                    />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Router>
      </Container>
    </section>
  );
};
