import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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

  const skills = [
    { name: "Product Thinking", img: meter3 },
    { name: "User Research", img: meter2 },
    { name: "MERN Stack", img: meter3 },
    { name: "React.js", img: meter3 },
    { name: "Node.js", img: meter2 },
    { name: "Wireframing (Figma)", img: meter2 },
    { name: "User Journey Mapping", img: meter3 },
    { name: "Agile & Scrum", img: meter1 },
    { name: "Problem Solving", img: meter3 },
    { name: "Jira", img: meter1 },
    { name: "Notion", img: meter2 },
    { name: "Google Analytics", img: meter1 },
    { name: "Figma", img: meter3 },
    { name: "Feature Prioritization", img: meter1 },
    { name: "Roadmapping", img: meter2 },
    { name: "A/B Testing", img: meter3 },
    { name: "Data Analysis", img: meter1 },
    { name: "Java", img: meter1 },
    { name: "Python", img: meter2 },
    { name: "JavaScript", img: meter1 },
    { name: "MongoDB", img: meter1 },
    { name: "MySQL", img: meter1 },
    { name: "Docker", img: meter2 },
    { name: "Kubernetes", img: meter1 },
    { name: "Cassandra", img: meter1 },
    { name: "Machine Learning", img: meter3 },
    { name: "AI & ML", img: meter3 },
  ];

 