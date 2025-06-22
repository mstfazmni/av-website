import React from "react";
import './Services.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const exteriorServices = [
    {
        id: "siding",
        title: "Siding",
        description: "Experienced installers of James Hardie Fiber Cement Siding, Vinyl Siding, Metal siding, and wood siding",
        image: "/assets/siding.jpg"
    },
    {
        id: "accessories",
        title: "Accessories",
        description: "Full advance 24/7 services for your house.",
        image: "/assets/sidingacces.jpg"
    },
    {
        id: "stucco",
        title: "Stucco & Masonry",
        description: "Full stucco exteriors including EIFS. Full brick and stone exterior installation.",
        image: "/assets/stucco.jpg"
    },
    {
        id: "windows",
        title: "Windows, Doors, & Skylights",
        description: "ENERGY STAR® windows and doors suited for Canadian weather",
        image: "/assets/window.jpg"
    },
    {
        id: "roofing",
        title: "Roofing",
        description: "Installation of asphalt shingles, cedar shakes, rubber roofing, metal roofing, and flat roofing.",
        image: "/assets/roofing.jpg"
    },
    {
        id: "design",
        title: "Project Design",
        description: "Consultation and design programs for your exterior renovation.",
        image: "/assets/projectd.jpg"
    }
];

const interiorServices = [
    {
        id: "basement",
        title: "Basement Renovation",
        description: "We create functional, efficient basements tailored to your lifestyle.",
        image: "/assets/basement.jpg"
    },
    {
        id: "drywall",
        title: "Drywall Installation",
        description: "Expert drywall installation for all interior projects, big or small.",
        image: "/assets/drywall.jpg"
    },
    {
        id: "painting",
        title: "Painting Services",
        description: "Professional painting to refresh or stage your home effectively.",
        image: "/assets/painting.jpg"
    },
    {
        id: "bathroom",
        title: "Bathroom Renovation",
        description: "Designing and building beautiful, functional bathrooms for 15+ years.",
        image: "/assets/bathroom.jpg"
    },
    {
        id: "flooring",
        title: "Flooring Installation",
        description: "Licensed flooring experts in hardwood, laminate, and more.",
        image: "/assets/flooring.jpg"
    },
    {
        id: "tile",
        title: "Tile Installation",
        description: "Durable, stylish ceramic tile installation throughout Calgary homes.",
        image: "/assets/tile.jpg"
    }
];

const ServicesSection = ({ title, services }) => (
    <>
        <h3 className="text-center my-4 fw-bold">{title}</h3>
        <Row className="mb-5">
            {services.map((service, index) => (
                <Col md={4} className="mb-4" key={index}>
                    <Card className="h-100 shadow-sm">
                        <Card.Img variant="top" src={service.image} alt={service.title} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>{service.description}</Card.Text>
                            <div className="mt-auto">
                                <a
                                    href={`/quote?service=${encodeURIComponent(service.id)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-light w-100"
                                >
                                    Request Quote
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </>
);
const Services = () => {
  return (
        <section id="services" className="py-5 bg-light">
            <Container>
                <h2 className="text-center mb-5 fw-bold">Our Services</h2>
                <ServicesSection title="Exterior Services" services={exteriorServices} />
                <hr />
                <ServicesSection title="Interior Services" services={interiorServices} />
            </Container>
        </section>
    );
};

export default Services;