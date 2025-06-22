import React, {useRef, useEffect} from "react";
import './Hero.css';

const Hero = ({setHeroHeightRef}) => {
    const heroRef = useRef(null);

    useEffect(() => {
        if (heroRef.current && setHeroHeightRef) {
            setHeroHeightRef(heroRef.current.offsetHeight);
        }
    }, [setHeroHeightRef])
    return(
        <div className="hero-container" ref={heroRef}>
            <video autoPlay muted loop className="bg-video">
                <source src={`${process.env.PUBLIC_URL}/assets/hero.mp4`} type="video/mp4" />
            </video>
            <div className="overlay" />
            <div className="hero-content text-center">
                <h1 className="text-white fw-bold">BUILDING YOUR VISION</h1>
                <p className="text-white">Your vision’s trusted construction partner</p>
                <div>
                    <a href="/quote" target="_blank" rel="noopener noreferrer" className="btn btn-primary m-2">Request a Quote</a>
                    <a href="#contact" className="btn btn-light m-2">Contact Us</a>
                </div>

                {/* Contact Details */}
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mt-4">
                    <p className="text-white m-0">
                        📞 <a href="tel:+14036048272" className="text-white text-decoration-none">+1 (403) 604-8272</a>
                    </p>
                    <span className="text-white d-none d-md-inline">|</span>
                    <p className="text-white m-0">
                        📧 <a href="mailto:info@calgaryrenovationservices.ca" className="text-white text-decoration-none">info@calgaryrenovationservices.ca</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;