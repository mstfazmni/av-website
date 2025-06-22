import React from "react";
import './Services.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
    {
        title: "Siding",
        description: "Experienced installers of James Hardie Fiber Cement Siding, Vinyl Siding, Metal siding, and wood siding",
        image: "/assets/siding.jpg"
    },

    {
        title: "Accessories",
        description: "Full advance 24/7 services for your house.",
        image: "/assets/sidingacces.jpg"
    },

    {
        title: "Stucco & Masonry",
        description: "Full stucco exteriors including EIFS. Full brick and stone exterior installation.",
        image: "/assets/stucco.jpg"
    },

    {
        title: "Windows, Doors, & Skylights",
        description: "All Weather Windows Renovations supplies and installs top of the line ENERGY STAR® windows and doors suited for Canadian weather",
        image: "/assets/window.jpg"
    },

    {
        title: "Roofing",
        description: "Experienced with installation of all types of roofing, including: asphalt shingles, cedar shakes, rubber roofing, metal roofing, and flat roofing applications.",
        image: "/assets/roofing.jpg"
    },

    {
        title: "Project design",
        description: "Start your exterior renovation with a consultation from AV Built Construction! Use our unique design programs to help you decide which products.",
        image: "/assets/projectd.jpg"
    },
];

const Services = () => {
    return (
        <section id="services" className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-5 fw-bold">Our Services</h2>
                <Row>
                    {services.map((services, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={services.image} />
                                <Card.Body>
                                    <Card.Title>{services.title}</Card.Title>
                                    <Card.Text>{services.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;