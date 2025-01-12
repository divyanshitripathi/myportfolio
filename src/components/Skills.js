import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <>
        <Container>
          <Row>
            <Col xs={12} md={12} xl={12}>
              <div className="skill-bx">
                <h2>My Skills</h2>
                <p>
                  "Passionate about creating seamless UI/UX experiences through
                  collaborative design processes."<br></br>
                  Expertise
                  <h4>
                    HTML5, CSS3, JavaScript, Reactjs,Redux,Bootstrap,MUI,
                    TailwindCSS,Angular, and Nextjs
                  </h4>
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="image1" />
                    <h5>Reactjs</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="image2" />
                    <h5>Redux</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="image4" />
                    <h5>React Bootstrap</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="image3" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="image4" />
                    <h5>HTML5</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="image4" />
                    <h5>CSS3</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="image4" />
                    <h5>Bootstrap</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="image4" />
                    <h5>Bootstrap</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="image4" />
                    <h5>Tailwind CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="image4" />
                    <h5>Nextjs</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="image4" />
                    <h5>MUI</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="image4" />
                    <h5>Angular</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image5" />
      </>
    </section>
  );
};
