import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={10} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form
                    action="https://formsubmit.co/6970c68451253329c7a6bd8b46b4144a"
                    method="POST"
                    onSubmit={() => {
                      setButtonText("Sending...");
                      handleModalShow(); // Show the modal after submission
                    }}
                  >
                    <Row>
                      <Col xs={12} sm={6} className="px-1 py-1 mb-3">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          aria-label="First Name"
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1 py-1 mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          aria-label="Email Address"
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1 py-1 mb-3">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          aria-label="Last Name"
                          required
                        />
                      </Col>
                     
                      <Col xs={12} sm={6} className="px-1 py-1 mb-3">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone No."
                          aria-label="Phone Number"
                          required
                        />
                      </Col>
                      <Col xs={12} className="px-1 py-1 mb-3">
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message"
                          aria-label="Message"
                          required
                        ></textarea>
                        <button type="submit" aria-label="Send Message">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>

                    {/* Hidden Fields for FormSubmit Features */}
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Contact Form Submission"
                    />
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal for Success */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your message has been sent successfully. I will get back to you soon!</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleModalClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
