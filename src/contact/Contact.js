import { contactConfig } from "../content_option";

import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import './contactstyle.css';

export default function Contact() {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    try {
      await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Show notification
      setShowNotification(true);

      // Hide notification after 3 seconds
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="cont">
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="display-4 mb-4">Contact us!</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h1 className="color_sec py-4">Get in touch</h1>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100" onSubmit={handleSubmit}>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>

        {showNotification && (
          <Row>
            <Col lg="12">
              <Alert variant="success" className="notification">
                Message sent successfully!
              </Alert>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
