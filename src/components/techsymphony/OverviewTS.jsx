import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import SubTitleExtra from "../../components/SubTitleExtra";

const OverviewTS = ({ desc }) => {
  return (
    <div>
    <div className="w-full h-full px-6 md:px-[14rem] text-white text-lg md:text-2xl font-inter pb-36 relative z-20">
      <div className="border-2  border-white bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] mb-8">
        <p className="text-center py-6 px-8">{desc}</p>
      </div>
      <div className="mt-[5rem]">
      <SubTitleExtra title="Pembelian Ticket" sub="Techno Symphony" />

      </div>
     <div className="flex flex-col md:flex-row gap-8 items-center md:justify-center">
        <ButtonPrimary text="Daftar" target="_blank" link="https://forms.gle/tvawhyEzjgZCYuAeA" />
    </div>
    </div>


    </div>
      
    
  );
};

export default OverviewTS;
