import React from "react";

const ButtonSecondary = ({ text, link }) => {
  return (
    <div className="w-fit relative z-20">
      <a ta className="text-lg md:text-2xl text-white py-2 md:py-3 px-5 md:px-8 bg-transparent border-2 border-white w-fit rounded hover:bg-blue-800" target="_blank" rel="noreferrer" href={link}>
        {text}
      </a>
    </div>
  );
};

export default ButtonSecondary;
