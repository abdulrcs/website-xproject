import React from "react";
import { logoXpro9 } from "../../assets";
import ButtonPrimary from "../ButtonPrimary";

const AboutHome = () => {
  return (
    <div className="w-full h-full pb-5 md:pb-60 relative z-20" id="about-home">
      <div className="px-4 md:px-[8.2rem] text-white flex flex-col items-center md:flex-row justify-between gap-9 py-36">
        <img className="w-52 md:w-96" src={logoXpro9} alt="" />
        <div className="flex flex-col gap-4">
          <div className="relative font-inter text-[2rem] md:text-6xl font-extrabold text-center">
            <h2 className="relative font-outline-1 text-transparent">ABOUT X-PROJECT</h2>
            <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full">ABOUT X-PROJECT</h2>
          </div>
          <p className="text-lg md:text-2xl mb-4">
            X-Project merupakan acara tahunan yang diadakan oleh himti UNESA. X-Project 9.0 memiliki serangkaian acara yang meliputi kegiatan pelatihan, pembelajaran pada bidang keahlian tertentu, perlombaan, IT expo, kewirausahaan dan
            pertunjukan yang bertujuan untuk mengenalkan HIMTI UNESA.
          </p>
          <ButtonPrimary text="See More" link="/About" />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
