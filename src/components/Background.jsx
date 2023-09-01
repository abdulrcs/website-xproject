import React from "react";
import { layer1, layer2, layer3, layer4 } from "../assets";

const Background = () => {
  return (
    <div className="relative w-full h-56 md:h-72 z-10">
        <img className="absolute object-fit bottom-0 -z-[5]" src={layer1} alt="" />
        <img className="absolute object-fit bottom-0 -z-[4]" src={layer2} alt="" />
        <img className="absolute object-fit bottom-0 -z-[3]" src={layer3} alt="" />
        <img className="absolute object-fit bottom-0 -z-[2]" src={layer4} alt="" />
    </div>
  );
};

export default Background;
