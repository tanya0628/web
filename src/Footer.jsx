import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 h-full text-light pt-5">
      {/* Hero Section */}
      <Container className="text-center mb-5">
        {/* <img src="/images/5891798_3029363 2 (1).png" alt="Team" className="mb-3" style={{ maxWidth: '150px' }} /> */}
        <h2 className="mb-2">Ready to get started with us?</h2>
        <p className="mb-3">Let's build scalable websites together.</p>
        <Button variant="light">Get Started</Button>
      </Container>

      {/* Footer Links */}
      <Container>
        <Row className="mb-4">
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              We are a passionate team building web solutions that help businesses grow and connect with their audience.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light">Home</Nav.Link>
              <Nav.Link href="#" className="text-light">Services</Nav.Link>
              <Nav.Link href="#" className="text-light">About</Nav.Link>
              <Nav.Link href="#" className="text-light">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-light">Home</Nav.Link>
              <Nav.Link href="#" className="text-light">Services</Nav.Link>
              <Nav.Link href="#" className="text-light">About</Nav.Link>
              <Nav.Link href="#" className="text-light">Contact</Nav.Link>
            </Nav>
          </Col>

          {/* Social Media */}
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-light"><FaFacebook size={24} /></a>
              <a href="#" className="text-light"><FaTwitter size={24} /></a>
              <a href="#" className="text-light"><FaInstagram size={24} /></a>
              <a href="#" className="text-light"><FaLinkedin size={24} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
