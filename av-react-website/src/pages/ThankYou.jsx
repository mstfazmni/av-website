import React from "react";
import { Container} from "react-bootstrap";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="fw-bold mb-3 text-success">Thank You!</h1>
      <p className="lead mb-4">We've received your request and will get back to you shortly.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </Container>
  );
};

export default ThankYou;