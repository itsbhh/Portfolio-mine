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
                    