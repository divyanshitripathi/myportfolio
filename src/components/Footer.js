import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import portfolio from "../assets/img/portfolio.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={6} xl={6} style={{ textAlign: "start" }}>
            <img src={portfolio} alt="Logo" />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            xl={6}
            className="text-center text-sm-end"
          >
            <div className="social-icon" style={{ marginTop: "20px" }}>
              <a
                href="https://www.linkedin.com/in/divyanshi-tripathi-58b23718b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="linkedIn" />
              </a>
              <a
                href="https://github.com/divyanshitripathi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="gitHub" />
              </a>
            </div>
            <p style={{ marginBottom: "0px" }}>
              Copyright 2024. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
