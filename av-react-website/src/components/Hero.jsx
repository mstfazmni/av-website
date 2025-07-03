import React, { useRef, useEffect } from "react";
import './Hero.css';

const Hero = ({ setHeroHeightRef }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current && setHeroHeightRef) {
      setHeroHeightRef(heroRef.current.offsetHeight);
    }
  }, [setHeroHeightRef]);

  return (
    <div id="home" className="hero-container" ref={heroRef}>
      <video autoPlay muted loop className="bg-video">
        <source src={`${process.env.PUBLIC_URL}/assets/hero.mp4`} type="video/mp4" />
      </video>

      <div className="overlay" />

      <div className="hero-content text-center container">
        <h1 className="hero-title">Crafting Spaces That Inspire</h1>
        <p className="hero-subtitle">Calgary’s trusted renovation partner</p>

        <div className="hero-buttons mt-4">
          <a href="/quote" className="btn btn-primary me-3">Get a Free Quote</a>
          <a href="#contact" className="btn btn-outline-light">Contact Us</a>
        </div>

        {/* Contact Info */}
        <div className="hero-contacts mt-5 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <p className="m-0 text-white">
            📞 <a href="tel:+14036048272" className="contact-link">+1 (403) 604-8272</a>
          </p>
          <span className="text-white d-none d-md-inline">|</span>
          <p className="m-0 text-white">
            📞 <a href="tel:+1584378887" className="contact-link">+1 (584) 378-887</a>
          </p>
          <span className="text-white d-none d-md-inline">|</span>
          <p className="m-0 text-white">
            📧 <a href="mailto:info@calgaryrenovationservices.ca" className="contact-link">info@calgaryrenovationservices.ca</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
