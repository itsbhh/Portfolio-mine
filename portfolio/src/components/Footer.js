import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaLaptopCode, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center text-center">
          <Col size={12}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/bhawnaanand" target="_blank" rel="noreferrer" className="me-3">
                <FaLinkedin size={20} className="icon" />
              </a>
              <a href="https://leetcode.com/itsbhh" target="_blank" rel="noreferrer" className="me-3">
                <FaLaptopCode size={20} className="icon" />
              </a>
              <a href="https://github.com/itsbhh" target="_blank" rel="noreferrer">
                <FaGithub size={20} className="icon" />
              </a>
            </div>
            <p className="mt-3">@itsbhh © 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
