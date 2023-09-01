import React from "react";

const Theme = ({ desc }) => {
  return (
    <div className="w-full h-full px-6 md:px-[8.2rem] pb-36 relative z-20">
      <div className="w-fit mx-auto relative font-inter text-[2rem] md:text-6xl font-extrabold mb-8 md:mb-14 uppercase z-20 text-center">
        <h2 className="relative font-outline-1 text-transparent">X-Project 9.0 2023 Theme</h2>
        <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full text-white">X-Project 9.0 2023 Theme</h2>
      </div>
      <h1 className="text-2xl md:text-4xl text-center text-white font-bold w-3/4 mx-auto mb-10 md:mb-20">"An early journey to actualize an active, intelligent, and innovative younger generation in the digitalization era"</h1>
      <div className="border-2 w-full md:w-11/12 mx-auto border-white bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] mb-8">
        <p className="text-center py-6 px-8 text-white text-lg md:text-2xl">{desc}</p>
      </div>
    </div>
  );
};

export default Theme;
