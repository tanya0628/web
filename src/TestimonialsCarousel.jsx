import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";

function TestimonialsCarousel() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white py-16">
      <Container>
        <h2 className="text-center text-3xl font-bold mb-3">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We take pride in building long-lasting partnerships with our clients.
          Here’s what they have to say about working with us.
        </p>

        <Carousel
          indicators={true}
          interval={4000}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Slide 1 */}
          <Carousel.Item>
            <div className="flex justify-center gap-6 flex-wrap">
              <TestimonialCard />
              <TestimonialCard active />
              <TestimonialCard />
            </div>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <div className="flex justify-center gap-6 flex-wrap">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

function TestimonialCard({ active }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 w-[300px] md:w-[350px] ${
        active ? "scale-105 shadow-lg" : "opacity-90"
      } transition-all duration-300`}
    >
      <div className="flex items-center mb-3">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Client"
          className="w-14 h-14 rounded-full object-cover mr-3"
        />
        <div>
          <h5 className="font-bold text-gray-800">Lorem ipsum</h5>
          <p className="text-sm text-gray-500">Lorem ipsum dolor sit</p>
        </div>
      </div>

      <div className="flex text-yellow-500 mb-3">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>

      <p className="text-gray-600 text-sm">
        Lorem ipsum dolor sit amet consectetur. Pellentesque duis volutpat
        odtellus hendrerit a. Vulputate et cras nunc pharetra eget libero sit.
      </p>
    </div>
  );
}

export default TestimonialsCarousel;
