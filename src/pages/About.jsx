import React from "react";
import Navbar from "../components/Navbar";
import AboutAbout from "../components/about/AboutAbout";
import Theme from "../components/about/Theme";
import Background from "../components/Background";
import Footer from "../components/Footer";
import HeroTitle from "../components/HeroTitle";
import SubTitle from "../components/SubTitle";
import Gallery from "../components/about/Gallery";
import Teaser from "../components/about/Teaser";


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="X-Project 9.0" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36">
        <AboutAbout />
        <Theme desc='Mengusung tema "An early journey to actualize an active, intelligent, and innovative younger generation in the digitalization era" karena kami ingin membantu atau menjembatani generasi muda agar terus berkembang dan menjadi produktif di era digitalisasi. "Sebuah perjalanan awal" mengimplikasikan bahwa sebuah proses ini baru dimulai, dan bahwa masih ada banyak pekerjaan yang harus dilakukan untuk mencapai tujuan tersebut. "Mengaktualisasi generasi muda" menekankan pentingnya memberdayakan generasi muda untuk mencapai potensi agar dapat menjadi kontributor yang berharga baik untuk dirinya sendiri maupun orang lain. "Yang aktif, cerdas, dan inovatif" menekankan pentingnya keterampilan dan sikap atau sifat yang relevan di era digitalisasi, seperti kemampuan untuk bekerja dalam lingkungan yang cepat berubah, kreativitas, kemampuan untuk berpikir kritis.' />
        <SubTitle title="Gallery X-Project" />
        <Gallery />
        <SubTitle title="Official Teaser" />
        <div className="-mt-10">
          <SubTitle title="X-Project 9.0" />
        </div>
        <Teaser link="https://youtu.be/REQ8siU3m-8" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default About;
