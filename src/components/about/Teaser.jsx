import React from "react";

const Teaser = ({ link }) => {
  return (
    <div className="w-full h-full px-4 md:px-[8.2rem] relative z-20 pb-36">
      <div className="w-full md:w-[55rem] mx-auto border-2 border-white bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] p-2 md:p-6 rounded">
        <iframe
          className="w-full h-64 md:h-[30rem] object-cover"
          src="https://www.youtube.com/embed/REQ8siU3m-8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Teaser;
