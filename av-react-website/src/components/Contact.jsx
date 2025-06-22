import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../components/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="py-5 bg-light">
            <Container>
                <h2 className="text-center fw-bold mb-4">Contact Us</h2>
                <p className="text-center mb-4">We’d love to hear about your project. Fill out the form and we’ll get back to you shortly.</p>

                <Row className="gy-5">
                    {/* LEFT: Form */}
                    <Col md={6}>
                    {/* replace the email with customer's email */}
                        <Form action="https://formsubmit.co/zmnimstfa@gmail.com" method="POST">
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
                            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                            <Button variant="primary" type="submit" className="w-100">Send Message</Button>
                        </Form> 
                    </Col>

                    {/* RIGHT: Contact Info */}

                    <Col md={6}>
                        <Row className="gy-4">
                                <Col sm={6}>
                                    <div className="contact-box h-100">
                                        <h5 className="fw-bold mb-1">📍 Address</h5>
                                        <p className="mb-0">Calgary, Alberta, Canada</p>
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
                                <Col sm={6}>
                                    <div className="contact-box h-100">
                                        <h5 className="fw-bold mb-1">📧 Email</h5>
                                        <p className="mb-0">
                                        <a href="mailto:info@calgaryrenovationservices.ca" className="text-decoration-none text-dark">
                                            info@calgaryrenovationservices.ca
                                        </a>
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="contact-box h-100">
                                        <h5 className="fw-bold mb-1">🕑 Hours</h5>
                                        <p className="mb-0">Mon–Sat: 8am – 6pm</p>
                                        <p className="mb-0">Sunday: Closed</p>
                                    </div>
                                </Col>
                        </Row>
                    </Col>
                </Row>
                {/* Google Maps */} {/* Full-width map */}

                    <div className="mt-5">
                        <iframe
                            title="Google Map"
                            // replace the src with actual location
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10068.329064327196!2d-114.0719!3d51.0447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371703ce09cf7c5%3A0xdeb5f4292e1ff007!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1719000000000"
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