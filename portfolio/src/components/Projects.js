import { Container, Row, Col, Tab, Nav, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import skynetImg from "../assets/img/skynet.png";
import bookstoreImg from "../assets/img/bookstore.png";
import voiceAssistantImg from "../assets/img/voice-assistant.jpeg";
import zoomCloneImg from "../assets/img/zoom-clone.jpeg";
import websiteDesignImg from "../assets/img/website-design.jpg";
import weatherApiImg from "../assets/img/weather-api.png";
import imageApiImg from "../assets/img/image-api.png";
import newsApiImg from "../assets/img/news-api.png";
import codsoftImg from "../assets/img/codsoft.png";
import gifApiImg from "../assets/img/gif-api.png";
import recipeApiImg from "../assets/img/recipe-api.png";
import coffeeShopImg from "../assets/img/coffee-shop.png";
import movieGuideImg from "../assets/img/movie-guide.png";
import todoFlutterImg from "../assets/img/todo-flutter.jpeg";
import todoImg from "../assets/img/todo.png";
import bloodBankImg from "../assets/img/blood-bank.png";
import MerryImg from "../assets/img/merry.png";
import ZerodhaImg from "../assets/img/zerodha.png";
import lovegramImg from "../assets/img/lovegram.png";
import plagiarismCheckerImg from "../assets/img/plagiarism-checker.jpg";
import languageTranslationImg from "../assets/img/language-translation.jpg";
import facialEmotionRecognitionImg from "../assets/img/facial-emotion-recognition.jpg";
import donationdappImg from "../assets/img/donation-dapp.png";
import eduwizardImg from "../assets/img/eduwizard.jpg";
import jobhubImg from "../assets/img/job-hub.png";
import aviaai from "../assets/img/AviaAI.png";

// Project data with links and descriptions
const initialProjects = [
  {
    title: "Skynet Search Engine",
    description:
      "AI-integrated searching platform. A group project focused on leveraging AI for search functionalities.",
    imgUrl: skynetImg,
    liveDemo: "https://skynet-g6pm.onrender.com/",
    github: "https://github.com/Twoward-Technologies/Skynet",
  },
  {
    title: "Avia AI",
    description:
      "An AI-powered career and learning assistant offering personalized recommendations using integrated AI models.",
    imgUrl: aviaai,
    liveDemo: "https://avia-ai.vercel.app/",
    github: "https://github.com/itsbhh/Career-Helper/tree/main",
  },
  {
    title: "The Book Store",
    description:
      "A comprehensive bookstore application featuring admin and user panels for managing book inventories and user interactions.",
    imgUrl: bookstoreImg,
    liveDemo: "https://thebookworld.netlify.app/",
    github: "https://github.com/itsbhh/bookstore-mern",
  },
  {
    title: "EduWizard-LMS",
    description:
      "EduWizard is a powerful and user-friendly E-commerce Learning Management System (LMS) designed to connect instructors and students.",
    imgUrl: eduwizardImg,
    liveDemo: "https://eduwizard.netlify.app/",
    github: "https://github.com/itsbhh/EduWizard-LMS",
  },
  {
    title: "Student Management System",
    description:
      "A Java-based application built using modular architecture to handle student records, authentication, and CRUD operations efficiently.",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    liveDemo: "#",
    github: "https://github.com/itsbhh/Student-Management-System",
  },
  {
    title: "Voice Assistant App (Flutter)",
    description:
      "A voice-controlled application built with Flutter, integrated APIs for enhanced user interaction.",
    imgUrl: voiceAssistantImg,
    liveDemo: "#",
    github: "https://github.com/itsbhh/Voice-Assistant-Flutter",
  },
  {
    title: "JobHub",
    description:
      "A JobHub website made using MERN Stack. It is responsive for every platform. It contains two pannel one for recruiter and one for applicants.",
    imgUrl: jobhubImg,
    liveDemo: "https://jobhub12.netlify.app/",
    github: "https://github.com/itsbhh/JobPortal",
  },
  {
    title: "Zoom Clone App (Flutter)",
    description:
      "A clone of the Zoom application created using Flutter, featuring video conferencing capabilities.",
    imgUrl: zoomCloneImg,
    liveDemo: "#",
    github: "https://github.com/itsbhh/Zoom-Clone_Flutter",
  },
  {
    title: "Donation DApp",
    description:
      "Donation DApp is a decentralized blockchain-based application that allows users to send donations in the form of Ether.",
    imgUrl: donationdappImg,
    liveDemo: "https://donationdapp.netlify.app/",
    github: "https://github.com/itsbhh/Donation-DApp-Web3",
  },
  {
    title: "Website Design (Figma)",
    description:
      "A prototype design of a university website created using Figma, showcasing UI/UX design skills.",
    imgUrl: websiteDesignImg,
    liveDemo:
      "https://drive.google.com/file/d/1xvnkKEeQ2GprApcDSt2jDGuJYMDCPKra/view",
  },
  {
    title: "Blood Bank (MERN)",
    description:
      "A MERN stack-based decentralized application for secure and accessible blood donation.",
    imgUrl: bloodBankImg,
    liveDemo: "https://bankblood.netlify.app/",
    github: "https://github.com/itsbhh/Blood-Bank-MERN",
  },
  {
    title: "Social Media Platform (Lovegram)",
    description:
      "A social media platform built with the MERN stack, enabling users to post, like, and comment.",
    imgUrl: lovegramImg,
    liveDemo: "https://lovegram.netlify.app/",
    github: "https://github.com/itsbhh/Social-Media",
  },
  {
    title: "Plagiarism Checker",
    description:
      "A machine-learning project to detect plagiarism in text using advanced algorithms.",
    imgUrl: plagiarismCheckerImg,
    liveDemo: "#", // Add live demo link if available
    github: "https://github.com/itsbhh/Plagiarism-Checker",
  },
  {
    title: "Language Translation",
    description:
      "A machine-learning project that detects the input language and translates it as per user requirements.",
    imgUrl: languageTranslationImg,
    liveDemo: "#", // Add live demo link if available
    github: "https://github.com/itsbhh/Language-Translation",
  },
  {
    title: "Facial Emotion Recognition",
    description:
      "A machine learning project for detecting emotions through facial expressions.",
    imgUrl: facialEmotionRecognitionImg,
    liveDemo: "#", // Add live demo link if available
    github:
      "https://github.com/itsbhh/Facial-Emotion-Recognition-and-Detection",
  },
  {
    title: "Merry Video Call Website",
    description: "A website featuring video conferencing capabilities.",
    imgUrl: MerryImg,
    liveDemo: "https://merry-video-call-website.netlify.app/",
    github: "https://github.com/itsbhh/Merry-Video-Call-Website",
  },
  {
    title: "Zerodha Website Clone",
    description: "Zerodha Website Clone.(Currently working on this.)",
    imgUrl: ZerodhaImg,
    liveDemo: "#",
    github: "https://github.com/itsbhh/Zerodha-Clone-Website",
  },
  {
    title: "Weather API",
    description: "API providing weather forecasts and current conditions.",
    imgUrl: weatherApiImg,
    liveDemo: "https://weathrlee.netlify.app/",
    github: "https://github.com/itsbhh/Weathrlee",
  },
  {
    title: "Image API",
    description: "API for fetching and managing images.",
    imgUrl: imageApiImg,
    liveDemo: "https://imgfetching.netlify.app/?#",
    github: "https://github.com/itsbhh/Image-Fetcher",
  },
  {
    title: "News API",
    description: "API providing the latest news headlines and articles.",
    imgUrl: newsApiImg,
    liveDemo: "https://news-fetching.netlify.app/",
    github: "https://github.com/itsbhh/News-Fetcher",
  },
  {
    title: "Mini Projects",
    description:
      "Showcasing various functionalities developed in small projects.",
    imgUrl: codsoftImg,
    liveDemo: "https://internshipcodsoft.netlify.app/",
    github: "https://github.com/itsbhh/CODSOFT",
  },
  {
    title: "Gif API",
    description: "API for searching and retrieving GIFs.",
    imgUrl: gifApiImg,
    liveDemo: "https://gifymify.netlify.app/",
    github: "https://github.com/itsbhh/Gifymify",
  },
  {
    title: "Recipe API",
    description: "API providing recipes and cooking instructions.",
    imgUrl: recipeApiImg,
    liveDemo: "https://recipefetching.netlify.app/",
    github: "https://github.com/itsbhh/Recipe-Fetching",
  },
  {
    title: "Coffee Shop",
    description:
      "Website showcasing a coffee shop with various menu options and features.",
    imgUrl: coffeeShopImg,
    liveDemo: "https://flavoredcafe.netlify.app/",
    github: "https://github.com/itsbhh/Coffeeshop_website",
  },
  {
    title: "Movie Guide API",
    description: "API for fetching movie details, ratings, and reviews.",
    imgUrl: movieGuideImg,
    liveDemo: "https://movieguidy.netlify.app/",
    github: "https://github.com/itsbhh/Movie-guide",
  },
  {
    title: "To-do MERN",
    description: "A task management application built using the MERN stack.",
    imgUrl: todoImg,
    liveDemo: "https://todo-mern-sage.vercel.app/",
    github: "https://github.com/itsbhh/TODO-MERN",
  },
  {
    title: "To-do Flutter",
    description: "A task management app built using Flutter.",
    imgUrl: todoFlutterImg,
    liveDemo: "#",
    github: "https://github.com/itsbhh/Flutter-todo",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleShowModal = (text) => {
    setModalText(text);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    <p>
                      Explore my projects, achievements and experiences in one
                      place.
                    </p>
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center flex-column flex-md-row"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Experience and Certifications
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Research</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        {/* ============= INNER TABS ============= */}
                        <Tab.Container defaultActiveKey="case">
                          <Nav
                            variant="pills"
                            className="nav-pills mb-4 justify-content-center align-items-center"
                            id="inner-pills-tab"
                          >
                            <Nav.Item>
                              <Nav.Link eventKey="case">Case Studies</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="tech">
                                Technical Projects
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>

                          <Tab.Content>
                            {/* ========== CASE STUDIES  ========== */}
                            <Tab.Pane eventKey="case">
                              <Row className="g-4">
                                {/* Instagram */}
                                <Col md={4}>
                                  <div className="case-card">
                                    <div className="case-card-body">
                                      <div className="case-card-top">
                                        <div className="case-img-card">
                                          <img
                                            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                            alt="Instagram"
                                          />
                                        </div>

                                        <div className="case-card-title">
                                          <h4>
                                            Instagram : Interest-Based Feed
                                          </h4>
                                        </div>
                                      </div>

                                      <p className="case-desc">
                                        This case study explores how Instagram
                                        ranks user content using interest
                                        clustering, user behavior patterns,
                                        session optimization, and feed relevance
                                        signals. The analysis focuses on
                                        improving content visibility, enhancing
                                        recommendation quality, and creating
                                        more personalized browsing experiences
                                        for millions of daily active users.
                                      </p>
                                    </div>

                                    <a
                                      href="https://docs.google.com/document/d/1WHl-6G3GDAjnqm0N2wJ002ygsKsHt6B08dHShURZg0o/edit?usp=sharing"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="case-btn"
                                    >
                                      View Case Study
                                    </a>
                                  </div>
                                </Col>

                                {/* Uber */}
                                <Col md={4}>
                                  <div className="case-card">
                                    <div className="case-card-body">
                                      <div className="case-card-top">
                                        <div className="case-img-card">
                                          <img
                                            src="https://1000logos.net/wp-content/uploads/2017/09/Uber-logo.jpg"
                                            alt="Uber"
                                          />
                                        </div>

                                        <div className="case-card-title">
                                          <h4>Uber for Pets</h4>
                                        </div>
                                      </div>

                                      <p className="case-desc">
                                        This case study introduces a dedicated
                                        Uber experience for pet travel. It
                                        focuses on driver training, pet-friendly
                                        vehicle requirements, seamless
                                        onboarding, safe-ride protocols,
                                        verification flows, and comfort-centric
                                        features that improve reliability while
                                        enhancing trust between pet owners and
                                        the transportation ecosystem.
                                      </p>
                                    </div>

                                    <a
                                      href="https://docs.google.com/document/d/1rL9m8Nb11PDUTW8RR1AomOqPVw5Q7WfIuPzNWYh6CM4/edit?usp=sharing"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="case-btn"
                                    >
                                      View Case Study
                                    </a>
                                  </div>
                                </Col>

                                {/* Spotify */}
                                <Col md={4}>
                                  <div className="case-card">
                                    <div className="case-card-body">
                                      <div className="case-card-top">
                                        <div className="case-img-card">
                                          <img
                                            src="https://cdn-icons-png.flaticon.com/512/174/174872.png"
                                            alt="Spotify"
                                          />
                                        </div>

                                        <div className="case-card-title">
                                          <h4>Spotify for Students</h4>
                                        </div>
                                      </div>

                                      <p className="case-desc">
                                        This concept proposes a student-focused
                                        Spotify experience offering discounted
                                        pricing, collaborative campus playlists,
                                        academic-mood music curation, and
                                        partner benefits. The goal is to boost
                                        adoption, increase daily engagement, and
                                        make Spotify a central part of students’
                                        study, travel, and social routines.
                                      </p>
                                    </div>

                                    <a
                                      href="https://docs.google.com/document/d/1fLUfyHSWjCK3HSmm0te7aLTlIuPt-bvFVwpWndjuBAc/edit?usp=sharing"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="case-btn"
                                    >
                                      View Case Study
                                    </a>
                                  </div>
                                </Col>
                              </Row>
                            </Tab.Pane>

                            {/* ========== TECHNICAL PROJECTS ========== */}
                            <Tab.Pane eventKey="tech">
                              <Row className="g-3">
                                {(showAll
                                  ? initialProjects
                                  : initialProjects.slice(0, 3)
                                ).map((project, index) => (
                                  <Col key={index} xs={12} sm={6} md={4}>
                                    <div className="proj-imgbx">
                                      <img
                                        src={project.imgUrl}
                                        alt={project.title}
                                        className="project-img"
                                      />
                                      <div className="proj-txtx">
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>

                                        <div className="project-links">
                                          {project.liveDemo === "#" ? (
                                            <span
                                              onClick={() =>
                                                handleShowModal(
                                                  "Live demo not available"
                                                )
                                              }
                                              className="link-text"
                                            >
                                              Live Demo
                                            </span>
                                          ) : (
                                            <a
                                              href={project.liveDemo}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="link-text"
                                            >
                                              Live Demo
                                            </a>
                                          )}

                                          {project.github === "#" ? (
                                            <span className="link-text">
                                              GitHub Repo
                                            </span>
                                          ) : (
                                            <a
                                              href={project.github}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="link-text"
                                            >
                                              GitHub Repo
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                ))}
                              </Row>

                              {!showAll && (
                                <div className="text-center mt-3">
                                  <span
                                    onClick={() => setShowAll(true)}
                                    className="show-more"
                                  >
                                    Show More ▼
                                  </span>
                                </div>
                              )}
                              {showAll && (
                                <div className="text-center mt-3">
                                  <span
                                    onClick={() => setShowAll(false)}
                                    className="show-more"
                                  >
                                    Show Less ▲
                                  </span>
                                </div>
                              )}
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <h3>Experience & Achievements</h3>
                        <h4>Experience</h4>
                        <li>
                          <strong>
                            Orbitra Technologies | Intern – Founder’s Office
                            (Strategy & Execution)
                          </strong>{" "}
                          | January 2026 – Present
                        </li>
                        <ul>
                          <li>
                            Working closely with founders on strategy execution,
                            product operations, and cross-functional
                            coordination in a travel-tech startup.
                          </li>
                          <li>
                            Supported AI-enabled product and technology
                            initiatives through workflow optimization,
                            documentation, and analysis.
                          </li>
                        </ul>

                        <li>
                          <strong>Orbitra Technologies | Product Intern</strong>{" "}
                          | December 2025
                        </li>
                        <ul>
                          <li>
                            Analyzed travel agent workflows and researched
                            AI-driven third-party integrations to improve
                            operational efficiency.
                          </li>
                          <li>
                            Evaluated technical feasibility, documented
                            insights, and supported AI-enabled feature planning
                            for enhanced agent and traveler experience.
                          </li>
                        </ul>

                        <li>
                          <strong>
                            Thales Group | Software Engineering Intern
                          </strong>{" "}
                          | June 2025 – August 2025
                        </li>
                        <ul>
                          <li>
                            Worked on Docker, Java, Quarkus, Cassandra, and
                            other technologies as part of internship projects.
                          </li>
                        </ul>

                        <li>
                          <strong>
                            Outlook Group | Business Leadership Programme
                            (Operations Team)
                          </strong>{" "}
                          | May 2025 – July 2025
                        </li>
                        <ul>
                          <li>
                            Analyzed 2+ datasets and performed trendline
                            analysis to support strategic decision-making.
                          </li>
                        </ul>

                        <li>
                          <strong>
                            University of California, Berkeley | BISP-L&S
                            (Student Exchange Program)
                          </strong>{" "}
                          | Selected in May 2025
                        </li>
                        <ul>
                          <li>
                            Chosen for the Berkeley International Study Program
                            in Letters and Science for Fall 2025.
                          </li>
                        </ul>

                        <li>
                          <strong>
                            Snappikart Techlabs | Full Stack Developer
                          </strong>{" "}
                          | January 2025 – March 2025
                        </li>
                        <ul>
                          <li>
                            Developed and maintained 2+ full-stack applications
                            using modern frameworks.
                          </li>
                        </ul>

                        <li>
                          <strong>
                            GSSoC 24 Extended | Open Source Contributor
                          </strong>{" "}
                          | October 2024 – November 2024
                        </li>
                        <ul>
                          <li>
                            Ranked in the top 6% (237/3,918 contributors).
                          </li>
                          <li>Contributed to 5+ active GitHub repositories.</li>
                        </ul>

                        <li>
                          <strong>
                            Google Developer Group – SBU | Firebase Expert (Core
                            Member)
                          </strong>{" "}
                          | October 2024 – June 2025
                        </li>
                        <ul>
                          <li>
                            Resolved build issues and mentored peers in Firebase
                            integration.
                          </li>
                          <li>
                            Helped organize 3 technical workshops attended by
                            100+ students.
                          </li>
                        </ul>

                        <li>
                          <strong>
                            Coding Club – Sarala Birla University | Core Member
                          </strong>{" "}
                          | September 2024 – Present
                        </li>
                        <ul>
                          <li>
                            Guided 5+ juniors in DSA fundamentals and debugging
                            practices.
                          </li>
                        </ul>

                        <li>
                          <strong>
                            AIRobotics Club – Sarala Birla University | Core
                            Member
                          </strong>{" "}
                          | December 2024 – Present
                        </li>
                        <ul>
                          <li>
                            Participated in 2+ AI and IoT discussions;
                            contributed ideas for automation-based projects.
                          </li>
                        </ul>

                        <h4>Hackathons</h4>
                        <ul>
                          <li>
                            <strong>Finalist – Clash of Codes v2.0</strong>
                          </li>
                          <li>
                            Participated in 5+ national hackathons: SIH 2025,
                            Code’N’Clone, Code for Bharat, DoraHacks
                            Hack-Web3Conf 2024, and more.
                          </li>
                        </ul>

                        <h4>Recognition</h4>
                        <ul>
                          <li>
                            <strong>NPTEL Star Category</strong> – Discipline |
                            Believers | Enthusiasts (May 2025)
                          </li>
                        </ul>

                        <h3>Certifications</h3>
                        <ul>
                          <li>
                            <strong>Programming in Java</strong> – NPTEL (Elite
                            + Gold, Top 2%) (Jan–Apr 2025)
                          </li>
                          <li>
                            <strong>
                              Fundamentals of Object-Oriented Programming
                            </strong>{" "}
                            – NPTEL (Elite + Gold, Top 5%) (Jan–Apr 2025)
                          </li>
                          <li>
                            <strong>
                              Elements of AI: Basics of Artificial Intelligence
                            </strong>{" "}
                            – University of Helsinki (Aug–Sep 2023)
                          </li>
                          <li>
                            <strong>Machine Learning A–Z (Python & R)</strong> –
                            Udemy (Jun–Jul 2024)
                          </li>
                          <li>
                            <strong>Cloud Computing</strong> – NPTEL (Elite +
                            Silver) (Jul–Dec 2024)
                          </li>
                          <li>
                            <strong>Google Cloud Computing Foundations</strong>{" "}
                            – NPTEL (Elite) (Jul–Dec 2024)
                          </li>
                          <li>
                            <strong>Cybersecurity and Privacy</strong> – NPTEL
                            (Jul–Dec 2024)
                          </li>
                          <li>
                            <strong>Google AI Essentials</strong> – Google (May
                            2025)
                          </li>

                          <li>
                            <strong>
                              Computer Networks and Internet Protocol
                            </strong>{" "}
                            – NPTEL (Jan–Apr 2025)
                          </li>

                          <li>
                            <strong>The Joy of Computing using Python</strong> –
                            NPTEL (Elite) (Jan–Apr 2025)
                          </li>
                          <li>
                            Skill Development Course on Programming Languages
                            and Data Structures – Sarala Birla University (June
                            – July 2023)
                          </li>
                        </ul>

                        <div style={{ marginTop: "40px" }}>
                          <p>
                            For more certificates and hackathon verifications,{" "}
                            <br />
                            visit my{" "}
                            <a
                              href="https://www.linkedin.com/in/bhawnaanand/details/certifications/"
                              className="no-underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              LinkedIn Profile
                            </a>
                            .
                          </p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <h3>Research</h3>
                        <p>Working on research paper.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />

      {/* Modal for Live Demo Not Available */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <div className="model">
          <Modal.Header closeButton>
            <Modal.Title>Live Demo</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalText}</Modal.Body>
        </div>
      </Modal>
    </section>
  );
};
