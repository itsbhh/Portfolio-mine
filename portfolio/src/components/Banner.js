import { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { FaLinkedin, FaGithub, FaLaptopCode, FaEnvelope } from "react-icons/fa";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import aboutImg from "../assets/img/meee.jpg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [showModal, setShowModal] = useState(false);
  const toRotate = [
    "Web Developer",
    "Product Manager Intern",
    "Product Thinker",
    "Web Designer",
    "UI/UX Designer",
    "AI & ML Learner",
  ];
  const period = 2000;

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`Hi! I'm Bhawna Anand`} <br></br>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["Web Developer","Product Manager Intern", "Product Thinker", "Web Designer", "UI/UX Designer" ,"AI & ML Learner"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I’m a product-driven technology enthusiast passionate about
                    building user-centric digital experiences. With experience
                    in product case studies, full-stack development (MERN),
                    UI/UX and AI & ML, I enjoy understanding user needs,
                    defining problems, ideating solutions, and working
                    cross-functionally to bring impactful products to life.
                  </p>
                  <button className="resume-button">
                    <a
                      href="https://docs.google.com/document/d/15M5WHqijnv17va9Xavrvp3fwLXaZFCyWIPEqpjS353o/edit?usp=sharing"
                      download="Bhawna_Resume"
                    >
                      View My Resume
                    </a>
                  </button>
                  <button onClick={handleShow}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        {/* About Me Section */}
        <section id="about" className="about-me">
          <Row>
            <Col xs={12} md={6}>
              <img src={aboutImg} className="about-img" />
            </Col>
            <Col xs={12} md={6}>
              <h2>About Me</h2>
              <p>
                I am a final-year B.Tech CSE (AI & ML) student with over 1.5
                years of experience building digital products, full-stack
                applications, and crafting user-centric solutions. Along with
                strong technical skills in MERN, AI & ML, I actively explore
                Product Management through case studies, user research, and
                feature planning. I enjoy turning problems into simple,
                meaningful product experiences. Here’s a brief overview of my
                journey:
              </p>
              <ul>
                <li>
                  <strong>Years of Experience : </strong> 1.5 Year
                </li>
                <li>
                  <strong>Current Focus : </strong> Product Management, AI & ML
                </li>
                <li>
                  <strong>Notable Projects :</strong>{" "}
                  <a className="sky" href="https://avia-ai.vercel.app/">
                    EduWizard + Avia AI
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </section>

        {/* Modal for "Let's Connect" */}
        <Modal show={showModal} onHide={handleClose} centered>
          <div className="model">
            <Modal.Header closeButton>
              <Modal.Title>Let's Connect</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                background: "linear-gradient(27deg, #fcfcfcbb, #955ba3)",
                color: "black",
              }}
            >
              <div className="social-links">
                <div className="social-link">
                  <a
                    href="mailto:anandbhawna40@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    anandbhawna40@gmail.com <FaEnvelope size={20} />
                  </a>
                </div>
                <div className="social-link">
                  <a
                    href="https://www.linkedin.com/in/bhawnaanand"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn <FaLinkedin size={20} />
                  </a>
                </div>
                <div className="social-link">
                  <a
                    href="https://github.com/itsbhh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <FaGithub size={20} />
                  </a>
                </div>
                <div className="social-link">
                  <a
                    href="https://leetcode.com/itsbhh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LeetCode <FaLaptopCode size={20} />
                  </a>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </Container>
    </section>
  );
};
