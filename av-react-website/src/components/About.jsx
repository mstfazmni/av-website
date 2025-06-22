// src/components/About.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-4">How We Do It?</h2>

        <p className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
          AV Built Construction is a family-run business with over <b>11 years</b> of experience. Our mission is to provide the highest level of professionalism and customer service possible. We aim to meet your exterior needs with clarity, organization, and timely delivery.
        </p>

        <Row className="mb-5">
          <Col md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold">🏆 Workmanship Warranty</h5>
                <p>Up to 10 years</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold">🦺 WCB Coverage</h5>
                <p>Fully covered & compliant</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold">📝 Licensed & Insured</h5>
                <p>Trusted & reliable reputation</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <p className="text-center mx-auto mb-5" style={{ maxWidth: '800px' }}>
          We fully understand that our clients are the reason for our success. We bring only the highest standards and continue to strive for quality. We are a full-service restoration company, committed to elevating professionalism in the exterior industry.
        </p>

        <Row className="text-center">
          <Col md={4}>
            <h1 className="fw-bold text-primary">100%</h1>
            <p className="fw-semibold">Customer Satisfaction</p>
          </Col>
          <Col md={4}>
            <h1 className="fw-bold text-primary">11+</h1>
            <p className="fw-semibold">Years in Business</p>
          </Col>
          <Col md={4}>
            <h1 className="fw-bold text-primary">536+</h1>
            <p className="fw-semibold">Projects Completed</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
