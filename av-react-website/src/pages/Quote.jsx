// src/pages/Quote.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Quote.css';

const Quote = () => {

  const queryParams = new URLSearchParams(window.location.search);
  const selectedService = queryParams.get("service");

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-3">Get a Free Estimate</h2>
        <p className="text-center mb-4">
          Please fill out the form to request a Free Estimate.
        </p>
        <p className="text-muted text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <strong>Note:</strong> Free estimates apply only to requests for complete roofing, siding,
          eavestrough, attic insulation, stucco, or stone addition/replacement. For all out-of-town or
          service-related estimates, a base inspection fee may apply.
        </p>

        <Row className="justify-content-center">
          <Col md={8}>
          {/* Replace with cutomer's email */}
            <Form action="https://formsubmit.co/zmnimstfa@gmail.com" method="POST">
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" name="phone" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Service Call Type</Form.Label>
                  {[
                      { id: "siding", label: "Siding" },
                      { id: "accessories", label: "Accessories" },
                      { id: "design", label: "Design" },
                      { id: "stucco", label: "Stucco" },
                      { id: "roofing", label: "Roofing" },
                      { id: "windows", label: "Windows" },
                      { id: "doors", label: "Doors" },
                      { id: "skylights", label: "Skylights" },
                      { id: "insurance", label: "Insurance Claim" },
                      { id: "insulation", label: "Insulation" },
                    ].map((service) => (
                      <Form.Check
                        key={service.id}
                        type="checkbox"
                        label={service.label}
                        name="service[]"
                        value={service.id}
                        defaultChecked={selectedService === service.id}
                      />
                    ))}
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={4} />
              </Form.Group>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Submit Quote Request
              </Button>

              <div className="text-center">
                <Link to="/" className="btn btn-outline-secondary mt-2">
                  ← Back to Home
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Quote;
