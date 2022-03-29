import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/Navbar.css';
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button';


function Mynav() {
    return (
        <ReactBootStrap.Navbar className="navbar-custom" collapseOnSelect expand="lg" variant="dark" sticky="top">
            <ReactBootStrap.Navbar.Brand className='navbar-brand-text-custom'><span>Portfolio</span></ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="ml-auto">
                <Button variant="dark" className="navbar-button-custom"><Link to="home" spy={false} smooth={true} offset={-70} duration={300}>Home</Link></Button>
                <Button variant="dark" className="navbar-button-custom"><Link to="about" spy={false} smooth={true} offset={-150} duration={300}>About</Link></Button>
                <Button variant="dark" className="navbar-button-custom"><Link to="experience" spy={false} smooth={true} offset={-75} duration={300}>Experience</Link></Button>
                <Button variant="dark" className="navbar-button-custom"><Link to="technical" spy={false} smooth={true} offset={-150} duration={300}>Technical Skills</Link></Button>
                <Button variant="dark" className="navbar-button-custom"><Link to="projects" spy={false} smooth={true} offset={-180} duration={300}>Projects</Link></Button>
                <Button variant="dark" className="navbar-button-custom"><Link to="contact" spy={false} smooth={true} offset={-50} duration={300}>Contact</Link></Button>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    );  
}

export default Mynav;