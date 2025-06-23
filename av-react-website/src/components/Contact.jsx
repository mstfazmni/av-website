import React, {useState} from "react";
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import '../components/Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
        setIsSubmitting(true);
    };

    return (
        <section id="contact" className="py-5 bg-light">
            <Container>
                <h2 className="text-center fw-bold mb-4">Contact Us</h2>
                <p className="text-center mb-4">We’d love to hear about your project. Fill out the form and we’ll get back to you shortly.</p>

                <Row className="g-4">
                    {/* LEFT: Form */}
                    <Col lg={8}>
                    {/* replace the email with customer's email */}
                        <Form action="https://formsubmit.co/zmnimstfa@gmail.com" method="POST"  onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name="name" required placeholder="Your Name"/>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" required placeholder="you@example.com"></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel" name="phone" placeholder="+1 (403) 123-4567" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" name="message" rows={5} required placeholder="Tell us about your project..." />
                            </Form.Group>

                            {/* Optional: hide CAPTCHA & redirect */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://av-construction.netlify.app/thank-you" />

                            <Button type="submit" className="w-100" variant="primary" disabled={isSubmitting}>
                                {isSubmitting ? (
                                <>
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Sending...
                                </>
                                ) : (
                                'Send Message'
                                )}
                            </Button>
                        </Form> 
                    </Col>

                    {/* RIGHT: Contact Info */}

                    <Col className="border border-1 p-3 rounded" lg={4}>
                        <h2 className="fw-bold mb-4">Get In Touch</h2>
                        <Row className="gy-4">
                                <Col sm={6}>
                                    <div className="contact-box h-100">
                                        <h5 className="fw-bold mb-1">📍 Address</h5>
                                        <p className="mb-0">2350 Baywater Cres, Airdrie, AB T4B 0T4, Canada</p>
                                    </div>
                                </Col>
                             
                                <Col sm={6}>
                                    <div className="contact-box h-100">
                                        <h5 className="fw-bold mb-1">📞 Phone</h5>
                                        <p className="mb-1">
                                        <a href="tel:+14036048272" className="text-decoration-none text-dark">
                                            +1 (403) 604-8272
                                        </a>
                                        </p>
                                        <p className="mb-0">
                                        <a href="tel:+15874378887" className="text-decoration-none text-dark">
                                            +1 (587) 437-8887
                                        </a>
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <div className="contact-box h-100">
                                        <h5 className="fw-bold mb-1">📧 Email</h5>
                                        <p className="mb-0">
                                        <a href="mailto:info@calgaryrenovationservices.ca" className="text-decoration-none text-dark">
                                            info@calgaryrenovationservices.ca
                                        </a>
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <div className="contact-box h-100">
                                        <h5 className="fw-bold mb-1">🕑 Hours</h5>
                                        <p className="mb-0">Mon–Sat: 8am – 6pm</p>
                                        <p className="mb-0">Sunday: Closed</p>
                                    </div>
                                </Col>
                                {/* Quote Button */}
                                {/* <Row className="mt-3"> */}
                                    <Col sm={12} className="mt-1">
                                        <a
                                        href="/quote"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-primary w-100"
                                        >
                                        Request a Quote
                                        </a>
                                    </Col>
                                {/* </Row> */}
                        </Row>
                    </Col>
                </Row>
                {/* Google Maps */} {/* Full-width map */}

                    <div className="mt-5">
                        <iframe
                            title="Google Map"
                            // replace the src with actual location
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.724839045494!2d-114.0378037840802!3d51.28257877959054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537173028a841a29%3A0xc0152bc5ec585999!2s2350%20Baywater%20Cres%20SW%2C%20Airdrie%2C%20AB%20T4B%200T4%2C%20Canada!5e0!3m2!1sen!2sca!4v1719080909832!5m2!1sen!2sca"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: "10px" }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
            </Container>
        </section>
    );
};

export default Contact;