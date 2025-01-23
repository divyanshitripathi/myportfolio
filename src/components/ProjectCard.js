import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, eventKey }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/projectDetails/${title}`);
  };
  return (
    <Col sx={12} sm={6} md={6} xl={4}>
      <div className="proj-imgbx animate__animated animate__zoomIn">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4 style={{ color: "white" }}>{title}</h4>
          <span>
            {description}{" "}
            {eventKey === "1" && (
              <button
                onClick={handleCardClick}
                style={{
                  color: "white",
                  cursor: "pointer",
                }}
              >
                .....Read More{" "}
              </button>
            )}
          </span>
        </div>
      </div>
    </Col>
  );
};
