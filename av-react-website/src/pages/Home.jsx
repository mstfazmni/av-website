import React, {useState} from "react";
import Hero from '../components/Hero';
import CustomNavbar from '../components/Navbar';
import Services from '../components/Services';
import About from '../components/About';
import Contact from "../components/Contact";
import Projects from "../components/Projects";


const Home = () => {
    const [heroHeight, setHeroHeight] = useState(0);
    return (
        <>
            <CustomNavbar heroHeight={heroHeight}/>
            <Hero setHeroHeightRef={setHeroHeight}/>
            <Services />
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;