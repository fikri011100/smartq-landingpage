import React from 'react'
import './Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <Navbar collapseOnSelect expand="lg"  bg="primary" className="landing-navbar">
            <Navbar.Brand href="#home" id="navbar-logo">
                <img src="images/logo.png" alt="logo smartq" className="logo"/>
                <span>SmartQ</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="landing-navbar-nav">
                <Nav id="landing-navbar-group">
                    <Nav.Link href="#deets" id="landing-navbar-item">Tentang Kami</Nav.Link>
                    <Nav.Link href="#deets" id="landing-navbar-item">Layanan</Nav.Link>
                    <Nav.Link href="#deets" id="landing-navbar-item">Hubungi</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Footer
