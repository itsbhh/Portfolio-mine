import { Col } from "react-bootstrap";
import { FaLink, FaGithub } from 'react-icons/fa';

export const ProjectCard = ({ title, description, imgUrl, liveDemo, githubRepo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            <a href={liveDemo || '#'} target="_blank" rel="noreferrer">
              {liveDemo ? <FaLink size={20} /> : 'Sorry, Live Demo Not Available'}
            </a>
            <a href={githubRepo} target="_blank" rel="noreferrer">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
