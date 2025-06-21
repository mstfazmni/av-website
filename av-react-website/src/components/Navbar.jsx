import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


const CustomNavbar = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg" fixed="top">
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