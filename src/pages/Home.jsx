import React from "react";
import {  randomGraphic, 
 mediaPartner,
 Ortographic,
 TsOrto,
  Sponsor1,
  Sponsor2,
  Sponsor3,
  Sponsor4,
  Sponsor5,
  Sponsor7,
  Sponsor8,
  Sponsor9,
  Sponsor10,
  Sponsor11,
  Sponsor12,
  Sponsor13,
  Sponsor14,
  Sponsor15,
  Sponsor16,
  Sponsor17,
  Sponsor18,
  Sponsor19,
  Sponsor20,
  Sponsor21,
  Sponsor22, } from "../assets";
import Navbar from "../components/Navbar";
import HeroTitleHome from "../components/home/HeroTitleHome";
import AboutHome from "../components/home/AboutHome";
import EventCardRight from "../components/home/EventCardRight";
import EventCardLeft from "../components/home/EventCardLeft";
import SubTitle from "../components/SubTitle";
import SponsorContainer from "../components/home/SponsorContainer";
import Background from "../components/Background";
import Footer from "../components/Footer";

const Home = () => {
  const imagesSponsor = [
    { index: 1, src: mediaPartner, alt: "Logo1", class: "w-32" },
    // { index: 2, src: medpart1, alt: "Logo2", class: "w-32" },
    // { index: 3, src: medpart1, alt: "Maskot", class: "w-32" },
    // { index: 4, src: medpart1, alt: "Maskot", class: "w-32" },
  ];

  const imagesMedpart = [
    { index: 1, src: Sponsor1, alt: "Logo1", class: "w-32" },
    { index: 2, src: Sponsor2, alt: "Logo2", class: "w-32" },
    { index: 3, src: Sponsor3, alt: "Maskot", class: "w-32" },
    { index: 4, src: Sponsor4, alt: "Maskot", class: "w-32" },
    { index: 5, src: Sponsor5, alt: "Maskot", class: "w-32" },
    { index: 7, src: Sponsor7, alt: "Maskot", class: "w-32" },
    { index: 8, src: Sponsor8, alt: "Maskot", class: "w-32" },
    { index: 9, src: Sponsor9, alt: "Maskot", class: "w-32" },
    { index: 10, src: Sponsor10, alt: "Maskot", class: "w-32" },
    { index: 11, src: Sponsor11, alt: "Maskot", class: "w-32" },
    { index: 12, src: Sponsor12, alt: "Maskot", class: "w-32" },
    { index: 13, src: Sponsor13, alt: "Maskot", class: "w-32" },
    { index: 14, src: Sponsor14, alt: "Maskot", class: "w-32" },
    { index: 15, src: Sponsor15, alt: "Maskot", class: "w-32" },
    { index: 16, src: Sponsor16, alt: "Maskot", class: "w-32" },
    { index: 17, src: Sponsor17, alt: "Maskot", class: "w-32" },
    { index: 18, src: Sponsor18, alt: "Maskot", class: "w-32" },
    { index: 19, src: Sponsor19, alt: "Maskot", class: "w-32" },
    { index: 20, src: Sponsor20, alt: "Maskot", class: "w-32" },
    { index: 21, src: Sponsor21, alt: "Maskot", class: "w-32" },
    { index: 22, src: Sponsor22, alt: "Maskot", class: "w-32" },
    
  ];

  return (
    <div className="font-poppins">
      <Navbar />
      <HeroTitleHome title="X - Project 9.0" link="#about-home" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 w-full">
        <AboutHome />
        <SubTitle title="Our Event" />
        <EventCardRight
          title="Tech Genius"
          desc="Tech Genius adalah kegiatan awal di X-Project 9.0 yang dirancang untuk membangun dan meningkatkan pemahaman serta keterampilan teknologi di kalangan peserta dengan berbagai kegiatan pelatihan."
          img={randomGraphic}
        />
        <EventCardLeft
          title="Informatic Championship"
          desc="Informatic Championship (IC) adalah sebuah ajang perlombaan atau kompetisi yang  bertujuan untuk mengasah kemampuan dan keterampilan peserta di bidang teknologi, sehingga dapat menciptakan berbagai inovasi baru di masa yang akan datang, yang dikemas dalam berbagai jenis perlombaan"
          img={Ortographic}
        />
        <EventCardRight
          title="Techno Symphony"
          desc="Techno Symphony adalah kegiatan akhir dari X-Project 9.0, kegiatan yang bertujuan untuk meningkatkan pengetahuan tentang rumpun teknik informatika bagi mahasiswa TI Unesa dan menjadi wadah kreatifitas seni Mahasiswa"
          img={TsOrto}
        />
        <SubTitle title="Sponsored By" />
        <SponsorContainer images={imagesSponsor} />
        <SubTitle title="Media Partner" />
        <SponsorContainer images={imagesMedpart} />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
