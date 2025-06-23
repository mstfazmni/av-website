import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CheckCircleFill } from "react-bootstrap-icons"; // Optional for icon

const ThankYou = () => {
  return (
    <section className="py-5 bg-light min-vh-100 d-flex align-items-center">
      <Container className="text-center">
        {/* Success Icon */}
        <CheckCircleFill size={64} className="text-success mb-3" />

        {/* Headline */}
        <h1 className="fw-bold text-success mb-3">Thank You!</h1>

        {/* Subtext */}
        <p className="lead mb-4">
          We’ve received your message and will contact you shortly. 
          Our team is reviewing your request.
        </p>

        {/* Optional: next step encouragement */}
        <p className="text-muted mb-4">
          In the meantime, feel free to explore our services or get inspired by our past projects.
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/" className="btn btn-primary px-4">
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ThankYou;
