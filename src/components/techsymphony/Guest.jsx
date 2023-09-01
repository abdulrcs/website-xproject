import React from "react";

const Guest = ({ img, guest }) => {
  return (
    <div className="w-full h-full px-6 md:px-[8.2rem] pb-36 relative z-20">
      <div className="relative">
        <img className="w-72 md:w-96 mx-auto relative z-[1]" src={img} alt="" />
        <div className="mx-auto border-2 border-blue-400 w-64 md:w-[22rem] h-52 md:h-72 rounded bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_3px_67px_0px_rgba(81,159,242,1)] absolute top-14 right-0 left-0"></div>
        <div className="mx-auto font-inter text-center text-white border-2 w-fit py-6 px-2 md:px-36 border-white bg-gradient-to-r from-blue-400/30 via-white/10 to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
          <h3 className="text-4xl md:text-5xl font-extrabold">{guest}</h3>
        </div>
      </div>
    </div>
  );
};

export default Guest;
