import React from "react";
import { bronzeTrophy, goldTrophy, silverTrophy } from "../assets";

const Prizes = ({ first, second, third }) => {
  return (
    <div className="w-full h-full px-6 md:px-[8.2rem] pb-36 relative z-20">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-end text-white gap-10">
        <div className="bg-gradient-to-r from-blue-400/70 to-blue-400/50 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] rounded-lg w-60 md:w-72 h-fit text-center md:order-2">
          <img className="drop-shadow-xl h-64 pt-10 mx-auto" src={goldTrophy} alt="" />
          <div className="pb-10 px-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">1st Winner</h3>
            <p className="text-lg md:text-xl">{first}</p>
            <p className="text-lg md:text-xl">E-Certificate</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-400/70 to-blue-400/50 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] rounded-lg w-60 md:w-72 h-fit text-center md:order-1">
          <img className="drop-shadow-xl h-56 pt-10 mx-auto" src={silverTrophy} alt="" />
          <div className="pb-10 px-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">2nd Winner</h3>
            <p className="text-lg md:text-xl">{second}</p>
            <p className="text-lg md:text-xl">E-Certificate</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-400/70 to-blue-400/50 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] rounded-lg w-60 md:w-72 h-fit text-center md:order-3">
          <img className="drop-shadow-xl h-48 pt-10 mx-auto" src={bronzeTrophy} alt="" />
          <div className="pb-10 px-10">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">3rd Winner</h3>
            <p className="text-lg md:text-xl">{third}</p>
            <p className="text-lg md:text-xl">E-Certificate</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Prizes;
