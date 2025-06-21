import React from "react";
import '../assets/hero.mp4';

const Hero = () => {
    return(
        <div className="hero-container">
            <video autoPlay muted loop className="bg-video">
                <source src="/assets/hero.mp4" type="video/mp4" />
            </video>
            <div className="overlay" />
            <div className="hero-content text-center">
                <h1 className="text-white fw-bold">BUILDING YOUR VISION</h1>
                <p className="text-white">Your vision’s trusted construction partner</p>
                <div>
                    <a href="#quote" className="btn btn-primary m-2">Request a Quote</a>
                    <a href="#contact" className="btn btn-light m-2">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;