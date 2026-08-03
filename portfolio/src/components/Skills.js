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

  return (
    <div>
      {/* Education Section */}
      <section className="education" id="education">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="education-bx wow zoomIn">
                <h2>Education</h2>
                <div className="education-timeline">
                  <div className="education-item">
                    <h5>Sarala Birla University | Ranchi, Jharkhand, India</h5>
                    <p>
                      Bachelor of Technology in Computer Science |
                      Specialization : AI & ML
                      <br />
                      CGPA: 8.82 | SGPA: 9.71
                      <br />
                      <br />
                      2022 – 2026 (Expected)
                    </p>
                  </div>
                </div>
                <h3>Linguistic Skills</h3>
                <ul>
                  <li>English | Proficient</li>
                  <li>Hindi | Proficient</li>
                  <li>Korean | Elementary</li>
                  <li>French | Beginner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <h2>Skills</h2>
                <p>
                  A hybrid of Product, Technical, and Analytical skills.
                  <br /> I conduct user research, define problems, and build
                  features using data-informed decisions.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  {skills.map((skill, index) => (
                    <div key={index} className="item">
                      <img src={skill.img} alt="Skill" />
                      <h5>{skill.name}</h5>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    </div>
  );
};
