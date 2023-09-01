import React from "react";
import { mascotXpro } from "../assets";
import ButtonPrimary from "./ButtonPrimary";

const Registration = ({link}) => {
  
  return (
    <div className="w-full h-full px-4 md:px-[8.2rem] relative z-20">
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 items-center">
        <img className="animate-wiggle w-36 md:w-80 h-52 md:h-96 order-2 md:order-1" src={mascotXpro} alt="" />
        <div className="w-fit h-fit border-2 border-white p-6 md:p-16 rounded-lg bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur-sm shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] text-white order-1 md:order-2">
          <h3 className="text-2xl md:text-4xl font-bold mb-3">Gimana udah tertarik?</h3>
          <p className="mb-10 text-lg md:text-2xl">
            Jangan lupa daftar ya <br />
            Kuy buruan...
          </p>
          <ButtonPrimary text="Daftar" target="_blank"  link={link} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
