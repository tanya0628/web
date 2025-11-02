import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Fill = () => {
  return (
    <section className="bg-blue-50 min-h-[80vh] flex items-center py-12">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Heading & Intro */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Frequently Asked <br />
            <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Here are some of the most common questions our customers ask.  
            Click to expand and learn more about our services.
          </p>
          <img
            src="/images/Group 393.png"
            alt="FAQ illustration"
            className="mx-auto md:mx-0 w-[70%] md:w-[80%]"
          />
        </div>

        {/* Right Side: Accordion */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full md:w-[90%]">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How does the process work?</Accordion.Header>
                <Accordion.Body>
                  We make everything simple. Once you reach out, we analyze your
                  requirements and deliver a customized solution tailored for your
                  needs.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>What technologies do you use?</Accordion.Header>
                <Accordion.Body>
                  Our stack includes React, Node.js, Express, MongoDB, and more —
                  ensuring scalability and performance.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Do you offer ongoing support?</Accordion.Header>
                <Accordion.Body>
                  Absolutely! We provide maintenance and support plans to keep
                  everything running smoothly.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>How long does it take to get started?</Accordion.Header>
                <Accordion.Body>
                  Typically, onboarding starts within a few days once project
                  requirements and goals are finalized.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fill;
