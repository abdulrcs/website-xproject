import React from "react";

const SubTitle = ({ title }) => {
  return (
    <div className="w-fit mx-auto relative font-inter text-[2rem] md:text-6xl font-extrabold mb-8 md:mb-14 uppercase z-20 text-center">
      <h2 className="relative font-outline-1 text-transparent">{title}</h2>
      <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full text-white">{title}</h2>
    </div>
  );
};

export default SubTitle;
