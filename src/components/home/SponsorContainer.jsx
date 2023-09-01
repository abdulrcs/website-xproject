import React from "react";

const SponsorContainer = ({ images }) => {
  return (
    <div className="w-full h-full px-4 md:px-[8.2rem] relative z-20">
      <div className="border-2 border-white py-12 md:py-16 px-7 md:px-8 rounded-lg bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] mb-24 md:mb-48">
        <div className=" flex flex-wrap items-center justify-center gap-6">
          {images.map((image) => (
            <img key={image.index} src={image.src} alt={image.alt} className={image.class} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorContainer;
