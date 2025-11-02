import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPlaneDeparture, FaRocket, FaMoneyBillWave, FaGraduationCap, FaStore, FaHeartbeat, FaPhotoVideo, FaShieldAlt } from "react-icons/fa";

const industries = [
  { icon: <FaPlaneDeparture className="text-5xl text-blue-600 mb-3" />, title: "Travel & Hospitality" },
  { icon: <FaRocket className="text-5xl text-blue-600 mb-3" />, title: "Startups & Enterprises" },
  { icon: <FaMoneyBillWave className="text-5xl text-blue-600 mb-3" />, title: "E-finance" },
  { icon: <FaGraduationCap className="text-5xl text-blue-600 mb-3" />, title: "Education & E-learning" },
  { icon: <FaStore className="text-5xl text-blue-600 mb-3" />, title: "Retail" },
  { icon: <FaHeartbeat className="text-5xl text-blue-600 mb-3" />, title: "Health care" },
  { icon: <FaPhotoVideo className="text-5xl text-blue-600 mb-3" />, title: "Media & Entertainment" },
  { icon: <FaShieldAlt className="text-5xl text-blue-600 mb-3" />, title: "Insurance" },
];

function IndustryGrid() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-10">
      <Container>
        <Row className="g-4 justify-center">
          {industries.map((item, index) => (
            <Col
              key={index}
              xs={6}
              md={4}
              lg={3}
              className="flex flex-col items-center justify-center bg-blue-50 border border-blue-100 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:bg-white"
            >
              {item.icon}
              <p className="font-semibold text-center text-gray-800">{item.title}</p>
            </Col>
          ))}
        </Row>
      </Container>
     <div>
      
     </div>
    </div>
    
  );
}

export default IndustryGrid;
