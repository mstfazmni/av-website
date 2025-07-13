import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Projects.css';

const projectData = [
  {
    title: "Siding Replacement – NW Calgary",
    image: "/assets/projects/siding.jpg",
    description: "James Hardie Board installation with modern grey tones.",
  },
  {
    title: "Roofing Upgrade – Airdrie",
    image: "/assets/projects/roofing.jpg",
    description: "IKO Cambridge shingles with full underlayment replacement.",
  },
  {
    title: "Full Exterior Remodel – Chestermere",
    image: "/assets/projects/painting.jpg",
    description: "Siding, stucco, and eavestrough replacement.",
  },
  {
    title: "Stone & Stucco – South Calgary",
    image: "/assets/projects/flooring.jpg",
    description: "Old siding removed and replaced with stucco and stonework.",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  responsive: [
    { breakpoint: 768, settings: { arrows: false } },
  ],
};

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4">Recent Projects</h2>
        <Slider {...sliderSettings}>
          {projectData.map((project, index) => (
            <div key={index} className="p-2">
              <div className="position-relative rounded overflow-hidden shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid w-100"
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 text-white p-3"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                >
                  <h5>{project.title}</h5>
                  <p className="mb-2">{project.description}</p>
                  <Link
                    to="/quote"
                    className="btn btn-sm btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request a Quote →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Projects;
