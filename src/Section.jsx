import React from "react";

const HeroSection = () => {
  return (
    <div>
    <section className="bg-blue-950 text-white min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="text-left md:text-left mb-10 md:mb-0">
          <p className="text-[#3DACDB] font-semibold mb-2">
            Code the Future with Us
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Building Reliable Software <br />
            Delivering{" "}
            <span className="text-[#f7b731]">Real Results</span>
          </h1>
          <div className="h-1 w-25 bg-blue-300" > </div> <br />
          <p className="text-gray-300  mx-auto md:mx-0  text-left">
            We deliver powerful web applications, stunning designs, and reliable
            APIs that drive your business forward
          </p> 
         <button
              className="text-sm font-semibold text-white rounded-2xl px-5 py-2
              bg-[linear-gradient(135deg,#152257,#3DACDB)]
              hover:bg-[linear-gradient(135deg,#3DACDB,#152257)]
              shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started →
            </button>
        </div>

        {/* Right Side Illustration */}
        <div className="flex justify-center md:justify-end">
         <img src="/images/Group 294.png" className="w-100 md:w-[450px] animate-float z-20 mb-[200px] md:mb-[100px]" alt="illustration" />

        </div>
      </div>
      
    </section>
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto relative bottom-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 p-6 text-center">
          <img
            src="https://amplewebsol.com/wp-content/uploads/2022/08/Website-Development-1024.png"
            
            className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
          />
          <h5  className="text-xl font-bold mb-2 text-gray-800">Web Application Development</h5 >
          <p className="text-gray-600">
           we design and develop secure , sacalabe and user dreindly web application thar streameline  business operations and drive growth
          </p>
           <button className=" bg-[linear-gradient(135deg,#152257,#3DACDB)]
              hover:bg-[linear-gradient(135deg,#3DACDB,#152257)] text-white px-5 py-2 rounded-full font-medium transition-all duration-300">
            Learn More →
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 p-6 text-center">
          <img
            src="https://amplewebsol.com/wp-content/uploads/2022/08/Website-Development-1024.png"
           
            className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
          />
          <h5  className="text-xl font-bold mb-2 text-gray-800">Web Design</h5 >
          <p className="text-gray-600">
             we design and develop secure , sacalabe and user dreindly web application thar streameline  business operations and drive growth
          </p>
           <button className=" bg-[linear-gradient(135deg,#152257,#3DACDB)]
              hover:bg-[linear-gradient(135deg,#3DACDB,#152257)] text-white px-5 py-2 rounded-full font-medium transition-all duration-300">
            Learn More →
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 p-6 text-center">
          <img
            src="https://amplewebsol.com/wp-content/uploads/2022/08/Website-Development-1024.png"
          
            className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
          />
          <h5 className=" text-sm mb-2 text-gray-800">Reacharge and bill payment Api</h5>
          <p className="text-gray-600">
             we design and develop secure , sacalabe and user dreindly web application thar streameline  business operations and drive growth
          </p>
           <button className=" bg-[linear-gradient(135deg,#152257,#3DACDB)]
              hover:bg-[linear-gradient(135deg,#3DACDB,#152257)] text-white px-5 py-2 rounded-full font-medium transition-all duration-300">
            Learn More →
          </button>
        </div>

      </div>
    </div>
    <div>
        <img src="public\images\Group 322.png" alt="" />
    </div>
    </div>
  );
};

export default HeroSection;
