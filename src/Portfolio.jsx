import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPlaneDeparture,
  FaRocket,
  FaMoneyBillWave,
  FaGraduationCap,
  FaStore,
  FaHeartbeat,
  FaPhotoVideo,
  FaShieldAlt,
} from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const industries = [
  {
    icon: <img src="\images\Rectangle 34624629.png" alt="" />,
    title:
      "web application that streamline business operations and dri growth  ",
  },
  {
    icon: <img src="\images\Rectangle 34624629.png" alt="" />,
    title:
      "web application that streamline business operations and dri growth ",
  },
  {
    icon: <img src="\images\Rectangle 34624629.png" alt="" />,
    title:
      "web application that streamline business operations and dri growth ",
  },
  {
    icon: <img src="\images\Rectangle 34624629.png" alt="" />,
    title:
      "web application that streamline business operations and dri growth  ",
  },
  {
    icon: <img src="\images\Rectangle 34624629.png" alt="" />,
    title:
      "web application that streamline business operations and dri growth ",
  },
  {
    icon: <img src="\images\Rectangle 34624629.png" alt="" />,
    title: "web application that streamline business operations and dri  ",
  },
];

function Portfolio() {
  return (
    <div className="bg-gradient-to-b gap- from-blue-50 to-white py-10">
      <div className="text-center mt-2  ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic max-w-3xl mx-auto">
          At <span className="font-semibold text-yellow-500">we serve</span>,
          web application that streamline business operations and drive growth
          web application that streamline business operations and drive growth
        </p>
      </div>

      <Container>
        <Row className=" g-2  justify-center">
          {industries.map((item, index) => (
            <Col
              key={index}
              xs={6}
              md={4}
              lg={3}
              className="flex flex-col items-center justify-center bg-blue-50 border border-blue-100 rounded-xl p-3 hover:shadow-xl hover:scale-105 transform transition-all duration-300 hover:bg-white"
            >
              {item.icon}
              <p className="font-semibold text-center text-gray-800">
                {item.title}
              </p>
            </Col>
          ))}
        </Row>
      </Container> <br />

      <div className="bg-gray-50 h-full w-full"> 
         <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-4">
       Programming languages
        </h2>
       
        <div className="flex justify-center items-center bg-gray-50 py-10">
      <div className="w-fit bg-white shadow-md rounded-lg p-3">
        <Nav
          className="text-black justify-center text-sm gap-2"
          fill
          variant="tabs"
          defaultActiveKey="/home"
        >
          <Nav.Item>
            <Nav.Link href="" src="public\images\Group 393.png">
              Backend</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Frontend</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">DevOps & Cloud</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Database Development</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">Artificial Intelligence</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">Design</Nav.Link>
          </Nav.Item>
        
        </Nav>
      </div>
    </div>
 <div className="flex justify-center items-center ">
  <img
    src="/images/Group 393.png"
    alt=""
    className="w-[900px] "
  />
</div>


      </div>
       
    </div>
  );
}

export default Portfolio;
