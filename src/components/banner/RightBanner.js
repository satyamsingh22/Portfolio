import React from "react";
import bannerImg from "../../assets/images/bannerImg.jpeg";

const RightBanner = () => {
  return (
    <div className="flex justify-center items-center w-full lgl:w-1/2 relative">
      {/* Background Card with 3D shadow and red border shadow on hover */}
      <div className="absolute w-[350px] h-[400px] lgl:w-[500px] lgl:h-[600px] bg-gradient-to-r from-[#1e2024] to-[#202327] rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.6)] sm:top-0 sm:left-0"></div>

      {/* Main Image with Hover Effects and Red Border Shadow */}
      <img
        className="shadow-[0_0_15px_5px_rgba(255,0,0,0.6)] relative w-[250px] h-[350px] lgl:w-[450px] lgl:h-[600px] object-cover rounded-lg shadow-xl z-10 transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.6)] mx-auto sm:mx-auto sm:top-0"
        src={bannerImg}
        alt="Banner"
      />
    </div>
  );
};

export default RightBanner;
