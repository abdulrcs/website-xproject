import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { fotoGallery1,fotoGallery2,fotoGallery3 } from "../../assets";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Gallery = () => {
  return (
    <div className="w-full h-full px-4 md:px-[8.2rem] relative z-20 pb-36">
      <div className="w-full md:w-[55rem] mx-auto border-2 border-white bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] p-2 md:p-6 rounded">
        <Swiper navigation={true} pagination={true} autoplay={true} modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
          <SwiperSlide>
            <img className="object-cover w-full h-full md:h-[30rem]" src={fotoGallery1} alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover w-full h-full md:h-[30rem]" src={fotoGallery2} alt="slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover w-full h-full md:h-[30rem]" src={fotoGallery3} alt="slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
