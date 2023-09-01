import React from "react";
// import ButtonPrimary from "../ButtonPrimary";
import { batuBesar } from "../../assets";

const EventCardRight = ({ title, desc, img }) => {
  return (
    <div className="w-full h-screen px-4 md:px-[8.2rem] relative z-20  mb-10 md:mb-[-4rem] ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-14">
        <div className="w-full flex flex-col items-center order-1 md:order-2">
          <img className="w-36  md:w-80"  src={img} alt="" />
          <img className="w-48 mt-[-1.5rem] md:mt-[-4rem]  md:w-[26rem] " src={batuBesar} alt="" />
        </div>
        <div className="text-white flex flex-col gap-3 w-full order-2 md:order-1">
          {/* Before Revision Start */}
          {/* <div className="w-fit relative font-inter text-2xl md:text-4xl font-extrabold">
            <h2 className="relative font-outline-1 text-transparent">{title}</h2>
            <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full">{title}</h2>
          </div> */}
          {/* Before Revision End */}

          {/* After Revision Start */}
          <h2 className="w-fit font-inter text-2xl md:text-4xl font-extrabold">{title}</h2>
          {/* After Revision End */}
          <p className="text-lg md:text-2xl mb-3">{desc}</p>
          {/* <ButtonPrimary text="See More" link={link} /> */}
        </div>
      </div>
    </div>
  );
};

export default EventCardRight;
