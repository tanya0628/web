import React from "react";
import { FaCheck } from "react-icons/fa";

const Cards = () => {
  return (
    <div>
      <div className="bg-gray-100 py-10 ">
        
        <h2 className="font-bold text-center">WHO WE ARE  </h2>
        {/* <img src="public\images\Group 320.png" className=" h-40 w-30 left-[850px] top-[-50px]"  alt="" /> */}
    
        <div className="max-w-6xl mx-auto relative mt-[-50px]px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl h-[300px] shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 p-6 text-center">
            <h2 className="text-left font-bold mb-2 text-black">
              We are <span className="text-amber-300">Creative</span> Web Agency
              for next Project
            </h2>
            <p className="text-gray-600">
              , sacalabe and user dreindly web application thar streameline
              business operations and drive growth
            </p>
            <button
              className=" bg-[linear-gradient(135deg,#152257,#3DACDB)]
              hover:bg-[linear-gradient(135deg,#3DACDB,#152257)] text-white px-5 py-2 rounded-full font-medium transition-all duration-300"
            >
              Learn More →
            </button>
          </div>

          {/* Card 2 */}
          <div className="  ">
            <img src="/images\Group 323.png" cla alt="" />
          </div>

          {/* Card 3 */}
          <div>
            <div className="bg-white  p-1 hover:bg-[linear-gradient(135deg,#3DACDB,#152257)] hover:text-white ">
              <p className="flex items-center gap-2 text-gray-800">
                <FaCheck className="text-green-500 text-2xl" />
                web application that streamline business operations and drive
                growth
              </p>
            </div><br />


            <div className="bg-white p-1 hover:bg-[linear-gradient(135deg,#3DACDB,#152257)] ">
              <p className="flex items-center gap-2 text-gray-800">
                <FaCheck className="text-green-500 text-2xl" />
                web application that streamline business operations and drive
                growth
              </p>
            </div> <br />
            <div className="bg-white p-1 hover:bg-[linear-gradient(135deg,#3DACDB,#152257)]">
              <p className="flex items-center gap-2 text-gray-800">
                <FaCheck className="text-green-500 text-2xl" />
                web application that streamline business operations and drive
                growth
              </p>
            </div>
          </div>
        </div>
         </div>
    
        <div className="text-center mt-2 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
       Industries We Serve
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic max-w-3xl mx-auto">
          At{" "}
          <span className="font-semibold text-yellow-500">
           we serve
          </span>
          ,  web application that streamline business operations and drive
                growth
                 web application that streamline business operations and drive
                growth
        </p>
      </div>
    <hr />
    
      </div>
     
   
  );
};

export default Cards;
