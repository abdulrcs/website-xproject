import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";

const OverviewIC = ({ desc, tempat, kategori, biaya, tingkat,jam }) => {
  return (
    <div className="w-full h-full px-6 md:px-[8.2rem] text-white text-lg md:text-2xl font-inter pb-36 relative z-20">
      <div className="border-2 w-full border-white bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] mb-8">
        <p className="text-center py-6 px-8">{desc}</p>
      </div>
      <ul className="flex flex-col md:flex-row gap-8 justify-around font-extrabold text-center mb-16">
        <li>
          Pelaksanaan
          <p className="font-normal">
            {tempat}
            <br />
            {jam}
          
          </p>
        </li>
        <li>
          Kategori
          <p className="font-normal">{kategori}</p>
        </li>
        <li>
          Biaya
          <p className="font-normal">{biaya}</p>
        </li>
        <li>
          Tingkat
          <p className="font-normal">{tingkat}</p>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row gap-8 items-center md:justify-center">
        <ButtonPrimary text="Daftar" link="" />
        <ButtonSecondary text="Guide Book" link="" />
      </div>
    </div>
  );
};

export default OverviewIC;
