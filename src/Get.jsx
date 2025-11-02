import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Get = () => {
  return (
    <section className="bg-blue-300 text-white text-left min-h-[80vh] flex items-center py-16">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Get In <span className="text-blue-600">Touch</span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0">
            Have any questions? Fill out the form and we’ll get back to you as soon as possible.  
            We’re here to help with your business needs.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mt-6">
              Your Benefits:
            </h2>
            <ul className="text-gray-600 space-y-2 mt-2">
              <li>✔ Personalized support and quick response</li>
              <li>✔ Expert advice for your project</li>
              <li>✔ Hassle-free communication</li>
            </ul>
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
            Or call us on <span className="text-blue-700">+91-123654987</span>
          </h3>
        </div>

        {/* Right Side: Form */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full md:w-[90%] bg-white p-6 rounded-2xl shadow-lg">
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">
              Send Us a Message
            </h2>

            {/* Name */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">👤</InputGroup.Text>
              <Form.Control
                placeholder="Your Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            {/* Email */}
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
              <Form.Control
                placeholder="Your Email"
                aria-label="Email"
                aria-describedby="basic-addon2"
              />
            </InputGroup>

            {/* Subject */}
            <Form.Label htmlFor="subject" className="text-gray-600">
              Subject
            </Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>📩</InputGroup.Text>
              <Form.Control id="subject" placeholder="Message subject" />
            </InputGroup>

            {/* Message */}
            <InputGroup className="mb-4">
              <InputGroup.Text>💬</InputGroup.Text>
              <Form.Control
                as="textarea"
                placeholder="Write your message here..."
                rows={4}
              />
            </InputGroup>

            {/* Button */}
            <div className="text-center md:text-right">
              <Button
                variant="primary"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Get;
