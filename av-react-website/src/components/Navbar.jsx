import React, {useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Navbar.css';


const CustomNavbar = ({heroHeight}) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > heroHeight); // Add solid bg after heroHeight scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [heroHeight])

    return (
        <Navbar className={`custom-navbar ${scrolled ? 'scrolled' : ''}`} expand="lg" fixed="top">
            <Container>
                
                <Navbar.Brand href="/">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/av-logo.png`}
                        alt="AV Built Construction Logo"
                        height="50"
                        className="d-inline-block align-middle"
                    />
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;