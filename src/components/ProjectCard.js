import { Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sx={12} sm={6} md={6} xl={4}>
      <div className="proj-imgbx animate__animated animate__zoomIn">
        <img src={imgUrl} alt="" />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
