import React from "react";
import { FaCheck } from "react-icons/fa";

const International = () => {
  return (
    <div>
      <div className=" bg-[linear-gradient(135deg,#152257,#3DACDB)] w-full h-full  py-16 px-6">
        {/* --- Top Section --- */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full  lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              className="rounded-2xl w-full h-80   object-cover hover:scale-105 transition-transform duration-300 col-span-2"
              src="/images\Group 70.png"
              alt="Dubmtai"
            />
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white text-left mb-6">
              Why Choose Us ?
            </h1>
            <p className="text-white text-lg  md:text-xl text-left leading-relaxed">
              We{" "}
              <span className="font-semibold text-yellow-500">
                focus 
              </span>
               . on delivering relible , scalable,and user friendly solutions that drive business growth Our exoertise and dedication make us trusted partner in your digital journey.
            </p>
            <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
              contact us
            </button>
          </div>
          <div>
            <div className="bg-white  p-1 hover:bg-[linear-gradient(135deg,#3DACDB,#152257)] hover:text-white ">
              <p className="flex items-center gap-2 text-gray-800">
                <FaCheck className="text-green-500 text-2xl" />
                Scalable and secure solutions
              </p>
            </div>
            <br />
            <div className="bg-white p-1 hover:bg-[linear-gradient(135deg,#3DACDB,#152257)] ">
              <p className="flex items-center gap-2 text-gray-800">
                <FaCheck className="text-green-500 text-2xl" />
               User-focused design and development
              </p>
            </div>{" "}
            <br />
            <div className="bg-white p-1 hover:bg-[linear-gradient(135deg,#3DACDB,#152257)]">
              <p className="flex items-center gap-2 text-gray-800">
                <FaCheck className="text-green-500 text-2xl" />
                Seamless API integration & dedicated support and maintanance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default International;
