import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import gsap from "gsap";

import colorSharp from "../assets/img/color-sharp.png";
import { useEffect, useRef } from "react";

export const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    if (experienceRef.current) {
      const experienceSections = gsap.utils.toArray(
        ".experience-bx2",
        experienceRef.current
      );
      gsap.fromTo(
        experienceSections,
        { opacity: 0, y: 50, duration: 1, stagger: 0.2 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
      gsap.fromTo(
        experienceRef.current.querySelector("line"),
        { opacity: 0, x: -50, duration: 1 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, []);

  console.log({ experienceRef });

  return (
    <section className="experience" id="experiences" ref={experienceRef}>
      <>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} xl={12}>
              <div className="experience-bx">
                <h2>Experience</h2>
                <Row>
                  <Col xs={12} sm={12} md={5} xl={5}>
                    <div className="experience-bx2">
                      <h4 style={{ marginBottom: "0" }}>
                        Senior Frontend Developer
                      </h4>
                    </div>
                    <ul
                      style={{
                        marginTop: "30px",
                        textAlign: "start",
                        marginBottom: "1rem",
                      }}
                    >
                      <h6
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                          marginTop: "10px",
                        }}
                      >
                        Hyperthink Iot- Systems{" "}
                        <span style={{ marginLeft: "19px" }}>Qatar</span>
                      </h6>
                      <li>
                        Successfully advanced from Junior Software Engineer to
                        Senior Software Engineer by consistently solving complex
                        challenges and delivering impactful solutions.
                      </li>

                      <li>
                        Faces challenges in designing a complex structure for
                        registering multiple sites in the platform for real-time
                        parking management across Qatar.
                      </li>
                      <li>
                        Integrated REST APIs and create user-friendly web and
                        mobile interfaces. Tackled challenges like tight
                        deadlines and evolving changing client requirements,
                        improving adaptability and teamwork.
                      </li>
                      <li>
                        Learned to prioritize user-centric solutions and
                        optimize system performance. Developed strong
                        collaboration skills with cross-functional teams to meet
                        client expectations.
                      </li>
                      <li>
                        Enhanced ability to navigate complex technical and
                        logistical challenges, delivering solutions aligned with
                        business goals.
                      </li>
                    </ul>
                  </Col>
                  <Col xs={0} sm={0} md={2} xl={2}>
                    {" "}
                    <svg
                      width="100%"
                      height="100%"
                      style={{
                        position: "absolute",
                        top: "-20%",
                        left: 0,
                        pointerEvents: "none",
                      }}
                    >
                      <line
                        x1="50%"
                        y1="50%"
                        x2="50%"
                        y2="100%"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </Col>

                  <Col xs={12} sm={12} md={5} xl={5}>
                    <div className="experience-bx2">
                      <h4 style={{ marginBottom: "0" }}>Intern Developer</h4>
                    </div>
                    <ul
                      style={{
                        marginTop: "30px",
                        textAlign: "start",
                        marginBottom: "1rem",
                      }}
                    >
                      <h6
                        style={{
                          fontSize: "20px",
                          fontWeight: "500",
                          marginTop: "10px",
                        }}
                      >
                        Directorate Of Governance Reforms{" "}
                        <span style={{ marginLeft: "19px" }}>Chandigarh</span>
                      </h6>
                      <li>
                        Designed and implemented the ER diagram flow and
                        integrated APIs for the HRMS application.
                      </li>
                      <li>
                        Contributed to backend development using SQL queries,
                        triggers, procedures, and database design.
                      </li>
                      <li>
                        Developed frontend components with HTML5, CSS3,
                        Bootstrap, and Angular 7.
                      </li>
                      <li>
                        Generated modules for the application including
                        biometric attendance, Leave management, project
                        management, and parking management.
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <img className="background-image-left" src={colorSharp} alt="Image5" />
      </>
    </section>
  );
};
