import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Main() {
  return (
    <Navbar expand="lg" className="bg-indigo-950 text-white py-3">
      <Container>
        <Navbar.Brand href="#home" className="text-white text-lg font-semibold">
          LOGO
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-white border-0"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-6">
            <Nav.Link
              href="#home"
              className="text-white text-sm hover:font-serif"
            >
              Home
            </Nav.Link>
            <Nav.Link href="#services" className="text-white hover:font-serif">
              Services
            </Nav.Link>
            <Nav.Link href="#about" className="text-white hover:font-serif">
              About Us
            </Nav.Link>
            <Nav.Link href="#how" className="text-white hover:font-serif">
              How It Works
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white hover:font-serif">
              Contact Us
            </Nav.Link>
            <Nav.Link href="#phone" className="text-white hover:font-serif">
              +91-1234567890
            </Nav.Link>

            <button
              className="text-sm font-semibold text-white rounded-full px-5 py-2
              bg-[linear-gradient(135deg,#152257,#3DACDB)]
              hover:bg-[linear-gradient(135deg,#3DACDB,#152257)]
              shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started →
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default Main;
