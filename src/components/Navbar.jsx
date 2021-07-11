import React, {useState, useEffect} from 'react'
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'

function NavBar() {

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" bg="primary" className="landing-navbar">
            <Navbar.Brand href="/#main" id="navbar-logo">
                <img src="images/logo.png" alt="logo smartq" className="logo"/>
                <span>SmartQ</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="landing-navbar-nav">
                <Nav id="landing-navbar-group">
                    <Nav.Link href="/#about" id="landing-navbar-item">Tentang Kami</Nav.Link>
                    <Nav.Link href="/#layanan" id="landing-navbar-item">Layanan</Nav.Link>
                    <Nav.Link href="/#contact" id="landing-navbar-item">Hubungi</Nav.Link>
                </Nav>
                <Button className="btn-primary" className="btn-navbar" active href="/login">
                    Join Us
                </Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
