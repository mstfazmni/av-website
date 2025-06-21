import React, {useState} from "react";
import Hero from '../components/Hero';
import CustomNavbar from '../components/Navbar';
import Services from '../components/Services';

const Home = () => {
    const [heroHeight, setHeroHeight] = useState(0);
    return (
        <>
            <CustomNavbar heroHeight={heroHeight}/>
            <Hero setHeroHeightRef={setHeroHeight}/>
            <Services />
        </>
    );
};

export default Home;