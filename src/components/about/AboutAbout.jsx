import React from "react";
import { logoXpro9 } from "../../assets";

const AboutAbout = () => {
  return (
    <div className="w-full h-full pb-5 md:pb-36 relative z-20">
      <div className="px-4 md:px-[8.2rem] text-white flex flex-col items-center md:flex-row justify-between gap-9 py-36">
        <img className="w-52 md:w-96" src={logoXpro9} alt="" />
        <div className="flex flex-col gap-4">
          <div className="relative font-inter text-[2rem] md:text-6xl font-extrabold text-center md:text-left ">
            <h2 className="relative font-outline-1 text-transparent">X-PROJECT</h2>
            <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full">X-PROJECT</h2>
          </div>
          <p className="text-lg text-center md:text-left md:text-2xl mb-4 border-2 w-full border-white bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] py-6 px-8 ">
            X-Project merupakan acara tahunan yang diadakan oleh himti UNESA. X-Project 9.0 memiliki serangkaian acara yang meliputi kegiatan pelatihan, pembelajaran pada bidang keahlian tertentu, perlombaan, IT expo, kewirausahaan dan
            pertunjukan yang bertujuan untuk mengenalkan HIMTI UNESA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAbout;
