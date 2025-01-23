import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import portfolio from "../assets/img/portfolio.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import { QRCodeSVG } from "qrcode.react";

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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "center",
                  backgroundColor: "white",
                  padding: "10px",
                }}
              >
                <text style={{ color: "black" }}> Scan Me</text>

                <QRCodeSVG
                  value={`https://wa.me/552553154?text=Hey%21%0D%0AIt%27s%20nice%20to%20connect%20with%20you.%0D%0AThanks%20for%20reaching%20out%20to%20me%20.%0D%0APlease%20Drop%20a%20message.`}
                  size={80}
                  level="L"
                />
              </div>
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
